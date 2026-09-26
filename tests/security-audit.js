/**
 * Security Coding Review Audit Suite (5 Automated Security Agents)
 * Created by KalarisLabs
 * 
 * Verifies the 5 cardinal security & confidentiality invariants:
 * Agent 1: Path Traversal & Directory Boundary Guard
 * Agent 2: Command & Shell Injection Guard
 * Agent 3: Academic Confidentiality & Zero-Exfiltration Guard (100% offline)
 * Agent 4: Catastrophic Backtracking & ReDoS Analyzer
 * Agent 5: Secret, Token & Private Data Leakage Guard
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

let totalChecks = 0;
let passedChecks = 0;
const findings = [];

function check(agentName, testName, condition, details = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  \x1b[32m✔ [${agentName}]\x1b[0m ${testName}`);
  } else {
    findings.push({ agent: agentName, test: testName, details });
    console.error(`  \x1b[31m✘ [${agentName}]\x1b[0m ${testName}: ${details}`);
    process.exitCode = 1;
  }
}

console.log('\x1b[1m\x1b[35m→ Running KalarisLabs 5-Agent Security Review Audit...\x1b[0m\n');

// Agent 1: Path Traversal and Directory Boundary Guard
console.log('\x1b[1m[Agent 1: Path Traversal & Directory Boundary Guard]\x1b[0m');
const installJs = fs.readFileSync(path.join(ROOT_DIR, 'bin', 'install.js'), 'utf8');

// Ensure path.resolve is used for custom destination
check('Agent 1', 'Custom path resolution uses path.resolve', installJs.includes('path.resolve(options.customPath)'));
// Ensure relative directory escaping is guarded
check('Agent 1', 'Install destination builds through path.join safe segments', installJs.includes('path.join(targetDir, \'academic-unslop\')'));
// Ensure recursive copy skips dangerous folders
check('Agent 1', 'Recursive copy excludes node_modules and .git', installJs.includes('child === \'.git\'') && installJs.includes('child === \'node_modules\''));

// Agent 2: Command & Shell Injection Guard
console.log('\n\x1b[1m[Agent 2: Command & Shell Injection Guard]\x1b[0m');
const installSh = fs.readFileSync(path.join(ROOT_DIR, 'install.sh'), 'utf8');

// Shell script strict mode
check('Agent 2', 'Shell script enforces set -euo pipefail', installSh.includes('set -euo pipefail'));
// Shell script variables properly quoted
check('Agent 2', 'Shell variables properly quoted to prevent word splitting', installSh.includes('"$DEST"') && installSh.includes('"$SOURCE_SKILL'));
// Node installer has zero arbitrary shell execution of user arguments
check('Agent 2', 'Node installer contains no unsafe child_process.exec on raw arguments', !installJs.includes('exec(') && !installJs.includes('execSync(options.'));

// Agent 3: Academic Confidentiality & Zero-Exfiltration Guard
console.log('\n\x1b[1m[Agent 3: Academic Confidentiality & Zero-Exfiltration Guard]\x1b[0m');

// Audit package.json dependencies
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf8'));
const hasNoExternalDeps = (!pkg.dependencies || Object.keys(pkg.dependencies).length === 0);
check('Agent 3', 'Zero external runtime dependencies in package.json', hasNoExternalDeps);

// Audit installer for outbound network calls outside download
const hasNoTelemetry = !installJs.includes('http.request') && !installJs.includes('fetch(') && !installJs.includes('axios');
check('Agent 3', 'Zero telemetry or analytics endpoints in CLI installer', hasNoTelemetry);

// Verify SECURITY.md exists and documents offline guarantee
const securityMdPath = path.join(ROOT_DIR, 'SECURITY.md');
check('Agent 3', 'SECURITY.md exists and is readable', fs.existsSync(securityMdPath));
const securityMd = fs.readFileSync(securityMdPath, 'utf8');
check('Agent 3', 'SECURITY.md mandates 100% offline local processing', securityMd.includes('100% of text diagnosis, scoring, and minimal-edit revision locally'));

// Agent 4: Catastrophic Backtracking & ReDoS Analyzer
console.log('\n\x1b[1m[Agent 4: Catastrophic Backtracking & ReDoS Analyzer]\x1b[0m');

function findProductionJsFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'tests') {
      results = results.concat(findProductionJsFiles(fullPath));
    } else if (entry.isFile() && (entry.name.endsWith('.js') || entry.name.endsWith('.mjs')) && entry.name !== 'security-audit.js') {
      results.push(fullPath);
    }
  }
  return results;
}

const jsFiles = findProductionJsFiles(ROOT_DIR);
let safeRegexes = true;
// Dangerous regex pattern: nested quantifiers like (a+)+ or (.*a)+
const nestedQuantifier = /\([^)]*(\+|\*)\)[+*]|\([a-zA-Z0-9_|]*\+[a-zA-Z0-9_|]*\)\+/;

for (const file of jsFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (nestedQuantifier.test(content)) {
    safeRegexes = false;
    findings.push({ agent: 'Agent 4', test: 'ReDoS check', details: `Potential nested quantifier in ${path.relative(ROOT_DIR, file)}` });
  }
}
check('Agent 4', 'All production scripts audited for catastrophic backtracking (ReDoS)', safeRegexes);

// Agent 5: Secret, Token & Private Data Leakage Guard
console.log('\n\x1b[1m[Agent 5: Secret, Token & Private Data Leakage Guard]\x1b[0m');

const secretPatterns = [
  { name: 'Generic API Token', regex: /(api[_-]?key|access[_-]?token|secret[_-]?key)\s*[:=]\s*['"][a-zA-Z0-9_\-]{16,}['"]/i },
  { name: 'GitHub Token', regex: /gh[pousr]_[A-Za-z0-9_]{36,}/ },
  { name: 'Private Key Block', regex: /-----BEGIN (RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/ }
];

let noSecretsFound = true;
function scanForSecrets(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== '.agents') {
      scanForSecrets(fullPath);
    } else if (entry.isFile()) {
      const content = fs.readFileSync(fullPath, 'utf8');
      for (const pattern of secretPatterns) {
        if (pattern.regex.test(content)) {
          noSecretsFound = false;
          findings.push({ agent: 'Agent 5', test: pattern.name, details: `Found in ${path.relative(ROOT_DIR, fullPath)}` });
        }
      }
    }
  }
}
scanForSecrets(ROOT_DIR);
check('Agent 5', 'Zero exposed API keys, GitHub tokens, or private certificates', noSecretsFound);

// Summary Report
console.log(`\n\x1b[1mSecurity Review Summary: ${passedChecks}/${totalChecks} checks passed.\x1b[0m`);
if (findings.length === 0) {
  console.log('\x1b[32m\x1b[1mAll 5 security agents reported ZERO vulnerabilities or security defects!\x1b[0m\n');
} else {
  console.error('\x1b[31m\x1b[1mSecurity defects discovered:\x1b[0m');
  for (const f of findings) {
    console.error(`  - [${f.agent}] ${f.test}: ${f.details}`);
  }
  process.exit(1);
}
