/**
 * Automated Verification Test Suite for academic-unslop-skill
 * Created by KalarisLabs
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  \x1b[32m✔ PASS:\x1b[0m ${message}`);
  } else {
    console.error(`  \x1b[31m✘ FAIL:\x1b[0m ${message}`);
    process.exitCode = 1;
  }
}

console.log('\x1b[1m\x1b[34m→ Running KalarisLabs academic-unslop-skill verification suite...\x1b[0m\n');

// 1. Check Package Manifest
console.log('\x1b[1m1. Package Manifest Checks\x1b[0m');
const packageJsonPath = path.join(ROOT_DIR, 'package.json');
assert(fs.existsSync(packageJsonPath), 'package.json exists');
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
assert(pkg.name === 'academic-unslop-skill', 'package.json name is academic-unslop-skill');
assert(pkg.author === 'KalarisLabs', 'package.json author is KalarisLabs');
assert(pkg.bin && pkg.bin['academic-unslop-skill'] === 'bin/install.js', 'package.json maps CLI binary');

// 2. Check SKILL.md Frontmatter and Content
console.log('\n\x1b[1m2. SKILL.md Specification Checks\x1b[0m');
const rootSkillPath = path.join(ROOT_DIR, 'SKILL.md');
const packagedSkillPath = path.join(ROOT_DIR, 'skills', 'academic-unslop', 'SKILL.md');
assert(fs.existsSync(rootSkillPath), 'Root SKILL.md exists');
assert(fs.existsSync(packagedSkillPath), 'Packaged skills/academic-unslop/SKILL.md exists');

const skillContent = fs.readFileSync(rootSkillPath, 'utf8');
assert(skillContent.includes('name: academic-unslop'), 'SKILL.md declares name: academic-unslop');
assert(skillContent.includes('author: KalarisLabs'), 'SKILL.md declares author: KalarisLabs');
assert(skillContent.includes('compatibility:'), 'SKILL.md includes compatibility tags');

// 3. Check Quality Gates A through J in SKILL.md
console.log('\n\x1b[1m3. Quality Gates A-J Verification\x1b[0m');
const gates = [
  'Gate A: AI-Pattern Reduction',
  'Gate B: Academic Integrity',
  'Gate C: Meaning Preservation',
  'Gate D: Punctuation Check',
  'Gate E: Aggregation-Worsening and Breakpoint Check',
  'Gate F: Word-Count Preservation',
  'Gate G: Structure and Readability Check',
  'Gate H: Grammatical Completeness',
  'Gate I: Grammar and Subject-Verb Agreement',
  'Gate J: Logic-Flow'
];
for (const gate of gates) {
  assert(skillContent.includes(gate), `SKILL.md defines ${gate}`);
}

// 4. Check References Modules in references/ and skills/academic-unslop/references/
console.log('\n\x1b[1m4. Reference Modules Verification\x1b[0m');
const requiredRefs = [
  'detection_principles.md',
  'rewrite_methods.md',
  'qualitative_authorship_restoration.md',
  'chinese_text_ai_risk.md'
];

for (const ref of requiredRefs) {
  const rootRefPath = path.join(ROOT_DIR, 'references', ref);
  const pkgRefPath = path.join(ROOT_DIR, 'skills', 'academic-unslop', 'references', ref);
  assert(fs.existsSync(rootRefPath), `Root references/${ref} exists`);
  assert(fs.existsSync(pkgRefPath), `Packaged skills/academic-unslop/references/${ref} exists`);
}

// 5. Check Dimensions D1-D21 in detection_principles.md
console.log('\n\x1b[1m5. Scoring Dimensions D1-D21 Verification\x1b[0m');
const detPrinciples = fs.readFileSync(path.join(ROOT_DIR, 'references', 'detection_principles.md'), 'utf8');
for (let i = 1; i <= 21; i++) {
  assert(detPrinciples.includes(`D${i}`), `detection_principles.md defines Dimension D${i}`);
}

// 6. Check Techniques T1-T29 in rewrite_methods.md
console.log('\n\x1b[1m6. Rewrite Techniques T1-T29 Verification\x1b[0m');
const rewriteMethods = fs.readFileSync(path.join(ROOT_DIR, 'references', 'rewrite_methods.md'), 'utf8');
for (let i = 1; i <= 29; i++) {
  assert(rewriteMethods.includes(`T${i}:`) || rewriteMethods.includes(`T${i} `), `rewrite_methods.md defines Technique T${i}`);
}

// 7. Check Chinese Route in chinese_text_ai_risk.md
console.log('\n\x1b[1m7. Chinese Route Module Verification\x1b[0m');
const chineseRisk = fs.readFileSync(path.join(ROOT_DIR, 'references', 'chinese_text_ai_risk.md'), 'utf8');
assert(chineseRisk.includes('chinese_paragraph_risk_estimate'), 'chinese_text_ai_risk.md defines chinese_paragraph_risk_estimate');
assert(chineseRisk.includes('知网 (CNKI) 双区高危扫描策略'), 'chinese_text_ai_risk.md defines CNKI two-zone strategy');
assert(chineseRisk.includes('系词回避'), 'chinese_text_ai_risk.md includes copula avoidance');

// 8. Test CLI Installer in Temporary Directory
console.log('\n\x1b[1m8. CLI Installer Functionality Test\x1b[0m');
const testInstallDir = path.join(ROOT_DIR, '.test-install-sandbox');
try {
  if (fs.existsSync(testInstallDir)) {
    fs.rmSync(testInstallDir, { recursive: true, force: true });
  }
  const installScript = path.join(ROOT_DIR, 'bin', 'install.js');
  execSync(`node "${installScript}" --path "${testInstallDir}" --copy`, { stdio: 'pipe' });
  const installedSkillMd = path.join(testInstallDir, 'academic-unslop', 'SKILL.md');
  const installedRefDir = path.join(testInstallDir, 'academic-unslop', 'references');
  assert(fs.existsSync(installedSkillMd), 'CLI installer installed SKILL.md to custom target');
  assert(fs.existsSync(installedRefDir), 'CLI installer copied references directory');
} finally {
  if (fs.existsSync(testInstallDir)) {
    fs.rmSync(testInstallDir, { recursive: true, force: true });
  }
}

// Final Summary
console.log(`\n\x1b[1mVerification Summary: ${passedTests}/${totalTests} tests passed.\x1b[0m`);
if (passedTests === totalTests) {
  console.log('\x1b[32m\x1b[1mAll verification checks passed cleanly!\x1b[0m\n');
} else {
  console.error('\x1b[31m\x1b[1mSome verification checks failed!\x1b[0m\n');
  process.exit(1);
}
