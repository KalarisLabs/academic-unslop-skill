#!/usr/bin/env node

/**
 * Agent Skills Specification Validator (agentskills.io)
 * Validates skill manifest format, character limits, progressive disclosure,
 * encoding purity, and directory conventions.
 *
 * Created by KalarisLabs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

let totalChecks = 0;
let passedChecks = 0;

function check(title, condition, detail = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  \x1b[32m✔ PASS:\x1b[0m ${title}`);
  } else {
    console.error(`  \x1b[31m✘ FAIL:\x1b[0m ${title} ${detail ? `(${detail})` : ''}`);
    process.exitCode = 1;
  }
}

console.log('\x1b[1m\x1b[34m→ Running Agent Skills Specification (agentskills.io) Audit...\x1b[0m\n');

// 1. Root & Packaged SKILL.md Existence
console.log('\x1b[1m1. File & Directory Structure\x1b[0m');
const rootSkillPath = path.join(ROOT_DIR, 'SKILL.md');
const pkgSkillPath = path.join(ROOT_DIR, 'skills', 'academic-unslop', 'SKILL.md');
const workspaceSkillPath = path.join(ROOT_DIR, '.agents', 'skills', 'academic-unslop', 'SKILL.md');

check('Root SKILL.md exists', fs.existsSync(rootSkillPath));
check('Packaged skills/academic-unslop/SKILL.md exists', fs.existsSync(pkgSkillPath));
// .agents/skills/ is gitignored local authoring tooling — only check if present
if (fs.existsSync(workspaceSkillPath)) {
  check('Workspace .agents/skills/academic-unslop/SKILL.md exists (optional, local only)', true);
}

// 2. Encoding and BOM Checks
console.log('\n\x1b[1m2. Encoding Purity & UTF-8 Integrity\x1b[0m');
for (const p of [rootSkillPath, pkgSkillPath, workspaceSkillPath]) {
  if (!fs.existsSync(p)) continue;
  const buf = fs.readFileSync(p);
  const hasBOM = buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf;
  const relName = path.relative(ROOT_DIR, p);
  check(`${relName} has no UTF-8 Byte Order Mark (BOM)`, !hasBOM);

  const text = buf.toString('utf8');
  const mojibakeMatch = text.match(/â[€\x80-\xbf][\x80-\xbf]/);
  check(`${relName} has zero mojibake corruption`, mojibakeMatch === null);
}

// 3. Frontmatter & Specification Constraints
console.log('\n\x1b[1m3. Specification Schema Validation (agentskills.io)\x1b[0m');
const content = fs.readFileSync(rootSkillPath, 'utf8');
const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
check('SKILL.md starts with valid YAML frontmatter delimiters (---)', fmMatch !== null);

if (fmMatch) {
  const fm = fmMatch[1];
  
  // Name field
  const nameMatch = fm.match(/^name:\s*([^\r\n]+)/m);
  check('name field is present', nameMatch !== null);
  if (nameMatch) {
    const name = nameMatch[1].trim();
    check('name is 1-64 characters', name.length >= 1 && name.length <= 64, `len=${name.length}`);
    const isValidName = !name.startsWith('-') && !name.endsWith('-') && !name.includes('--') && /^[a-z0-9-]+$/.test(name);
    check('name conforms to specification naming rules', isValidName, name);
    check('name matches packaged folder name', name === 'academic-unslop');
  }

  // Description field
  const descMatch = fm.match(/description:\s*(?:>|\|)?\s*\r?\n([\s\S]*?)(?=\r?\n[a-z_]+:)/i);
  check('description field is present', descMatch !== null);
  if (descMatch) {
    const desc = descMatch[1].replace(/\r?\n\s*/g, ' ').trim();
    check('description is non-empty', desc.length > 0);
    check('description is <= 1024 characters (agentskills.io hard limit)', desc.length <= 1024, `actual: ${desc.length}`);
    check('description explains both what the skill does and when to use it', desc.toLowerCase().includes('use when'));
  }
}

// 4. Progressive Disclosure & Reference Resolution
console.log('\n\x1b[1m4. Progressive Disclosure & Reference Links\x1b[0m');
const expectedRefs = [
  'references/detection_principles.md',
  'references/rewrite_methods.md',
  'references/qualitative_authorship_restoration.md',
  'references/chinese_text_ai_risk.md'
];

for (const ref of expectedRefs) {
  const rootTarget = path.join(ROOT_DIR, ref);
  const pkgTarget = path.join(ROOT_DIR, 'skills', 'academic-unslop', ref);
  check(`Root reference ${ref} exists`, fs.existsSync(rootTarget));
  check(`Packaged reference ${ref} exists`, fs.existsSync(pkgTarget));
}

// 5. Cross-Platform Ecosystem Coverage
console.log('\n\x1b[1m5. Cross-Platform Ecosystem Matrix\x1b[0m');
const installJs = fs.readFileSync(path.join(ROOT_DIR, 'bin', 'install.js'), 'utf8');
const expectedPlatforms = [
  'claude-code', 'cursor', 'windsurf', 'codex', 'opencode',
  'antigravity', 'gemini-cli', 'roo', 'cline', 'copilot',
  'factory', 'trae', 'kimi', 'qwen', 'iflow', 'openhands',
  'kiro', 'crush', 'pi', 'posit', 'goose', 'amp', 'replit'
];

let platformCount = 0;
for (const plat of expectedPlatforms) {
  if (installJs.includes(`'${plat}':`)) {
    platformCount++;
  }
}
check(`Installer targets include >= 20 major agent ecosystems (found ${platformCount}/${expectedPlatforms.length})`, platformCount >= 20);

// Summary
console.log(`\n\x1b[1mSpecification Audit Summary: ${passedChecks}/${totalChecks} checks passed.\x1b[0m`);
if (passedChecks === totalChecks) {
  console.log('\x1b[32m\x1b[1mSkill is 100% compliant with agentskills.io and skills.sh standards!\x1b[0m\n');
} else {
  console.error('\x1b[31m\x1b[1mSpecification violations detected!\x1b[0m\n');
  process.exit(1);
}
