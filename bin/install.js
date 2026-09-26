#!/usr/bin/env node

/**
 * academic-unslop-skill CLI & Installer
 * Created by KalarisLabs
 * Zero external dependencies cross-platform installer & diagnostics for all AI coding agents & harnesses.
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve skill source directory (checks skills/academic-unslop or falls back to package root)
let SKILL_SOURCE = path.resolve(__dirname, '..', 'skills', 'academic-unslop');
if (!fs.existsSync(SKILL_SOURCE)) {
  SKILL_SOURCE = path.resolve(__dirname, '..');
}

const AGENT_TARGETS = {
  'claude-code': {
    name: 'Claude Code',
    project: ['.claude', 'skills'],
    global: ['.claude', 'skills']
  },
  'cursor': {
    name: 'Cursor',
    project: ['.agents', 'skills'],
    global: ['.cursor', 'skills']
  },
  'windsurf': {
    name: 'Windsurf',
    project: ['.windsurf', 'skills'],
    global: ['.codeium', 'windsurf', 'skills']
  },
  'codex': {
    name: 'OpenAI Codex',
    project: ['.agents', 'skills'],
    global: ['.codex', 'skills']
  },
  'opencode': {
    name: 'OpenCode',
    project: ['.agents', 'skills'],
    global: ['.config', 'opencode', 'skills']
  },
  'antigravity': {
    name: 'Google Antigravity',
    project: ['.agents', 'skills'],
    global: ['.gemini', 'antigravity', 'skills']
  },
  'gemini-cli': {
    name: 'Gemini CLI',
    project: ['.agents', 'skills'],
    global: ['.gemini', 'skills']
  },
  'roo': {
    name: 'Roo Code',
    project: ['.roo', 'skills'],
    global: ['.roo', 'skills']
  },
  'continue': {
    name: 'Continue',
    project: ['.continue', 'skills'],
    global: ['.continue', 'skills']
  },
  'copilot': {
    name: 'GitHub Copilot',
    project: ['.agents', 'skills'],
    global: ['.copilot', 'skills']
  },
  'universal': {
    name: 'Universal / Cline / Zed / Amp',
    project: ['.agents', 'skills'],
    global: ['.agents', 'skills']
  }
};

function printHelp() {
  console.log(`
\x1b[1m\x1b[36m@kalarislabs/academic-unslop-skill\x1b[0m \x1b[2mby KalarisLabs (v2.21.0)\x1b[0m

Conservative academic thesis AI-writing risk reduction and unslop skill for all coding agents.

\x1b[1mCOMMANDS:\x1b[0m
  install                Install skill into local project or global agent harnesses (default)
  doctor                 Check status of detected agents and installed skills
  verify                 Run built-in integrity verification on skill files & references

\x1b[1mUSAGE:\x1b[0m
  npx @kalarislabs/academic-unslop-skill [command] [options]

\x1b[1mOPTIONS:\x1b[0m
  -g, --global           Install globally to user profile across coding agent harnesses
  -a, --agent <agents>   Target specific agents: claude-code, cursor, windsurf, codex,
                         opencode, antigravity, roo, continue, copilot, universal, all
  --all                  Install to ALL supported agent harness directories
  -c, --copy             Copy files instead of creating symbolic links
  -p, --path <dir>       Install directly to a custom destination directory
  -h, --help             Show this help message

\x1b[1mEXAMPLES:\x1b[0m
  npx @kalarislabs/academic-unslop-skill --global
  npx @kalarislabs/academic-unslop-skill -g --all
  npx @kalarislabs/academic-unslop-skill -a claude-code,cursor
  npx @kalarislabs/academic-unslop-skill doctor
  npx @kalarislabs/academic-unslop-skill verify
`);
}

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    command: 'install',
    global: false,
    copy: false,
    agents: [],
    customPath: null,
    all: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '-h' || arg === '--help') {
      printHelp();
      process.exit(0);
    } else if (arg === 'doctor') {
      options.command = 'doctor';
    } else if (arg === 'verify' || arg === 'test') {
      options.command = 'verify';
    } else if (arg === 'install') {
      options.command = 'install';
    } else if (arg === '-g' || arg === '--global') {
      options.global = true;
    } else if (arg === '-c' || arg === '--copy') {
      options.copy = true;
    } else if (arg === '--all') {
      options.all = true;
    } else if (arg === '-p' || arg === '--path') {
      options.customPath = args[++i];
    } else if (arg === '-a' || arg === '--agent') {
      const val = args[++i];
      if (val) {
        options.agents = val.split(',').map(s => s.trim().toLowerCase());
      }
    }
  }

  return options;
}

function detectInstalledAgents(isGlobal) {
  const detected = [];
  const baseDir = isGlobal ? os.homedir() : process.cwd();

  for (const [key, config] of Object.entries(AGENT_TARGETS)) {
    const checkSegments = isGlobal ? config.global : config.project;
    const checkPath = path.join(baseDir, checkSegments[0]);

    if (fs.existsSync(checkPath)) {
      detected.push(key);
    }
  }

  return detected;
}

function runDoctor() {
  console.log('\x1b[1m\x1b[34m→ academic-unslop doctor: Diagnosing AI agent environments...\x1b[0m\n');
  const userHome = os.homedir();
  const currentDir = process.cwd();

  console.log(`User Profile Directory: \x1b[2m${userHome}\x1b[0m`);
  console.log(`Current Project: \x1b[2m${currentDir}\x1b[0m\n`);

  console.log('\x1b[1mAgent Harness Installation Status:\x1b[0m');
  console.log('----------------------------------------------------------------------');
  console.log(' Agent                     Global Config?   Global Skill?   Project Skill?');
  console.log('----------------------------------------------------------------------');

  for (const [key, config] of Object.entries(AGENT_TARGETS)) {
    const globalBase = path.join(userHome, config.global[0]);
    const globalSkill = path.join(userHome, ...config.global, 'academic-unslop');
    const projectSkill = path.join(currentDir, ...config.project, 'academic-unslop');

    const hasGlobalConfig = fs.existsSync(globalBase) ? '\x1b[32m✔ Detected\x1b[0m   ' : '\x1b[90m- Absent\x1b[0m     ';
    const hasGlobalSkill = fs.existsSync(globalSkill) ? '\x1b[32m✔ Installed\x1b[0m  ' : '\x1b[90m- Not found\x1b[0m ';
    const hasProjectSkill = fs.existsSync(projectSkill) ? '\x1b[32m✔ Installed\x1b[0m' : '\x1b[90m- Not found\x1b[0m';

    const namePadded = config.name.padEnd(25, ' ');
    console.log(` ${namePadded} ${hasGlobalConfig} ${hasGlobalSkill} ${hasProjectSkill}`);
  }
  console.log('----------------------------------------------------------------------\n');
  console.log('\x1b[2mTip: Run `npx academic-unslop-skill --global` to install across all detected agents.\x1b[0m\n');
}

function copyRecursiveSync(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      if (child === '.git' || child === 'node_modules') continue;
      copyRecursiveSync(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function installToDirectory(targetDir, useCopy) {
  fs.mkdirSync(targetDir, { recursive: true });
  const dest = path.join(targetDir, 'academic-unslop');

  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }

  if (useCopy) {
    fs.mkdirSync(dest, { recursive: true });
    const skillMdSrc = path.join(SKILL_SOURCE, 'SKILL.md');
    if (fs.existsSync(skillMdSrc)) {
      fs.copyFileSync(skillMdSrc, path.join(dest, 'SKILL.md'));
    }
    const refSrc = path.join(SKILL_SOURCE, 'references');
    if (fs.existsSync(refSrc)) {
      copyRecursiveSync(refSrc, path.join(dest, 'references'));
    }
    console.log(`  \x1b[32m✔\x1b[0m Copied skill -> \x1b[2m${dest}\x1b[0m`);
  } else {
    try {
      const symlinkType = os.platform() === 'win32' ? 'junction' : 'dir';
      fs.symlinkSync(SKILL_SOURCE, dest, symlinkType);
      console.log(`  \x1b[32m✔\x1b[0m Linked skill -> \x1b[2m${dest}\x1b[0m`);
    } catch (err) {
      fs.mkdirSync(dest, { recursive: true });
      const skillMdSrc = path.join(SKILL_SOURCE, 'SKILL.md');
      if (fs.existsSync(skillMdSrc)) {
        fs.copyFileSync(skillMdSrc, path.join(dest, 'SKILL.md'));
      }
      const refSrc = path.join(SKILL_SOURCE, 'references');
      if (fs.existsSync(refSrc)) {
        copyRecursiveSync(refSrc, path.join(dest, 'references'));
      }
      console.log(`  \x1b[33m⚠\x1b[0m Copied skill (symlink fallback) -> \x1b[2m${dest}\x1b[0m`);
    }
  }
}

function runVerify() {
  const verifyScript = path.resolve(__dirname, '..', 'tests', 'verify-skill.js');
  if (fs.existsSync(verifyScript)) {
    import(path.resolve(verifyScript)).catch(err => {
      console.error('Verification error:', err);
      process.exit(1);
    });
  } else {
    console.error('verify-skill.js not found');
    process.exit(1);
  }
}

function main() {
  const options = parseArgs();

  if (options.command === 'doctor') {
    runDoctor();
    return;
  }

  if (options.command === 'verify') {
    runVerify();
    return;
  }

  console.log('\x1b[1m\x1b[34m→ KalarisLabs @kalarislabs/academic-unslop-skill installation\x1b[0m');

  if (options.customPath) {
    const dest = path.resolve(options.customPath);
    console.log(`Installing to custom destination: \x1b[1m${dest}\x1b[0m`);
    installToDirectory(dest, options.copy);
    console.log('\x1b[32m\x1b[1m✔ Complete!\x1b[0m');
    return;
  }

  let selectedAgents = options.agents;

  if (options.all || selectedAgents.includes('all')) {
    selectedAgents = Object.keys(AGENT_TARGETS);
  } else if (selectedAgents.length === 0) {
    const detected = detectInstalledAgents(options.global);
    if (detected.length > 0) {
      console.log(`\x1b[36mDetected agent harnesses in ${options.global ? 'home directory' : 'current project'}:\x1b[0m\n  ${detected.join(', ')}`);
      selectedAgents = detected;
    } else {
      if (options.global) {
        console.log('\x1b[33mInstalling globally to primary agent harnesses: Claude Code, Cursor, Windsurf, Antigravity, and Universal (.agents/skills).\x1b[0m');
        selectedAgents = ['claude-code', 'cursor', 'windsurf', 'antigravity', 'universal'];
      } else {
        console.log('\x1b[33mNo agent configurations detected in current project. Installing to Universal (.agents/skills) and Claude (.claude/skills).\x1b[0m');
        selectedAgents = ['universal', 'claude-code'];
      }
    }
  }

  const baseDir = options.global ? os.homedir() : process.cwd();
  console.log(`Target Scope: \x1b[1m${options.global ? 'Global User Directory (~)' : 'Current Project (./)'}\x1b[0m`);

  for (const agentKey of selectedAgents) {
    const agent = AGENT_TARGETS[agentKey];
    if (!agent) {
      console.warn(`\x1b[33mUnknown agent target '${agentKey}', skipping.\x1b[0m`);
      continue;
    }

    const segments = options.global ? agent.global : agent.project;
    const targetDir = path.join(baseDir, ...segments);

    console.log(`Installing for \x1b[1m${agent.name}\x1b[0m:`);
    installToDirectory(targetDir, options.copy);
  }

  console.log('\n\x1b[32m\x1b[1m✔ academic-unslop-skill successfully installed!\x1b[0m');
  console.log('\x1b[2mThe skill is now available in your coding agents and harnesses.\x1b[0m\n');
}

main();
