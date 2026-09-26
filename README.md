# Academic Unslop Skill (`@kalarislabs/academic-unslop-skill`)

[![Created by KalarisLabs](https://img.shields.io/badge/Author-KalarisLabs-blue.svg)](https://github.com/KalarisLabs)
[![skills.sh](https://skills.sh/b/KalarisLabs/academic-unslop-skill)](https://skills.sh/KalarisLabs/academic-unslop-skill)
[![Skills Ecosystem](https://img.shields.io/badge/skills.sh-academic--unslop-blue.svg)](https://skills.sh/KalarisLabs/academic-unslop-skill)
[![Agent Skills Spec](https://img.shields.io/badge/spec-agentskills.io-green.svg)](https://agentskills.io)
[![CI](https://github.com/KalarisLabs/academic-unslop-skill/actions/workflows/ci.yml/badge.svg)](https://github.com/KalarisLabs/academic-unslop-skill/actions/workflows/ci.yml)
[![Security Review](https://github.com/KalarisLabs/academic-unslop-skill/actions/workflows/security-agents-review.yml/badge.svg)](https://github.com/KalarisLabs/academic-unslop-skill/actions/workflows/security-agents-review.yml)
[![CodeQL](https://github.com/KalarisLabs/academic-unslop-skill/actions/workflows/codeql.yml/badge.svg)](https://github.com/KalarisLabs/academic-unslop-skill/actions/workflows/codeql.yml)
[![Security Policy](https://img.shields.io/badge/Security-Confidential%20Local-green.svg)](SECURITY.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version: 2.21.0](https://img.shields.io/badge/Version-2.21.0-orange.svg)](#)

A conservative, AI detector-informed thesis rewriting skill for English and Chinese academic writing by **KalarisLabs**.

Supports **Turnitin AI**, **CNKI AIGC (知网)**, minimal-edit revision, protected academic elements, qualitative/quantitative routing, and chapter-by-chapter AI-writing risk reduction **without detector-bypass claims**.

> [!IMPORTANT]
> **Academic Integrity Notice**: This is **not** a detector-bypass tool. It does not guarantee any AI detector score. It focuses on minimal, evidence-preserving revision, rigorous academic integrity, and systematic reduction of traceable AI-generated writing patterns.

---

## Universal Installation

The skill is compatible with **25+ AI coding agents and harnesses** including Claude Code, Cursor, Windsurf, OpenAI Codex, OpenCode, Google Antigravity, Gemini CLI, Roo Code, Cline, Continue, GitHub Copilot, Trae AI, Kimi Code, Kiro, Factory AI, OpenHands, and more.

### Option 1: Via `skills.sh` / `npx skills` (Recommended)

```bash
# Add to current project (auto-detects Claude Code, Cursor, Windsurf, etc.)
npx skills add KalarisLabs/academic-unslop-skill

# Install globally to your user profile across all coding agents
npx skills add KalarisLabs/academic-unslop-skill -g

# Install for specific agents non-interactively
npx skills add KalarisLabs/academic-unslop-skill -a claude-code -a cursor -y
```

### Option 2: Via Claude Code Plugin Marketplace

```bash
# Official Claude Code plugin registration
claude plugin add KalarisLabs/academic-unslop-skill
```

### Option 3: Via `npm` / `npx` (Scoped Organization Package)

```bash
# Direct run via npx (interactive auto-detection)
npx @kalarislabs/academic-unslop-skill

# Install globally across all coding agent harnesses on your machine
npx @kalarislabs/academic-unslop-skill --global

# Install globally to every supported agent directory
npx @kalarislabs/academic-unslop-skill -g --all

# Check installation status across all agents on your machine
npx @kalarislabs/academic-unslop-skill doctor

# Run built-in integrity verification
npx @kalarislabs/academic-unslop-skill verify
```

Or install globally via npm:
```bash
npm install -g @kalarislabs/academic-unslop-skill
academic-unslop --global
```

### Option 4: Standalone Verified Shell Installation (Zero Dependencies)

```bash
# Download the installer locally
curl -fsSL https://raw.githubusercontent.com/KalarisLabs/academic-unslop-skill/main/install.sh -o install.sh
chmod +x install.sh

# Install to current project
./install.sh

# Or install globally across user agent directories
./install.sh --global
```

### Option 5: Direct Git Clone

```bash
# Claude Code (Project or Global)
git clone https://github.com/KalarisLabs/academic-unslop-skill.git .claude/skills/academic-unslop

# Cursor / Windsurf / Universal Agents
git clone https://github.com/KalarisLabs/academic-unslop-skill.git .agents/skills/academic-unslop
```

---

## CLI Commands and Diagnostics

The zero-dependency executable CLI (`academic-unslop` or `npx @kalarislabs/academic-unslop-skill`) provides built-in utilities:

| Command | Syntax | Description |
|---|---|---|
| **Install** | `academic-unslop [options]` | Installs the skill into detected or specified agent harness directories. |
| **Doctor** | `academic-unslop doctor` | Diagnoses your machine for installed agent harnesses and shows global/project installation status. |
| **Verify** | `academic-unslop verify` | Runs the full 90-check automated test suite validating frontmatter, Agent Skills spec compliance, references, dimensions, and techniques. |

### CLI Options

| Flag | Shorthand | Description |
|---|---|---|
| `--global` | `-g` | Installs globally to user home profile across agent harness paths. |
| `--agent <names>` | `-a` | Target specific agents (e.g., `-a claude-code,cursor,trae,kimi`). |
| `--all` | | Installs to every recognized coding agent harness directory. |
| `--copy` | `-c` | Forces file copy instead of symbolic links / directory junctions. |
| `--path <dir>` | `-p` | Installs directly into a custom target directory. |
| `--help` | `-h` | Displays usage instructions and examples. |

---

## Target Platform Directory Matrix

When installed with the `--global` (`-g`) option, `@kalarislabs/academic-unslop-skill` populates the appropriate global skill directories across 25+ agent ecosystems:

| Agent Harness | Project Directory | Global Directory (`-g`) | Linking Mode |
|:---|:---|:---|:---:|
| **Claude Code** | `.claude/skills/` | `~/.claude/skills/` | Symlink / Copy |
| **Cursor** | `.agents/skills/` | `~/.cursor/skills/` | Symlink / Copy |
| **Windsurf** | `.windsurf/skills/` | `~/.codeium/windsurf/skills/` | Symlink / Copy |
| **OpenAI Codex** | `.agents/skills/` | `~/.codex/skills/` | Symlink / Copy |
| **OpenCode** | `.agents/skills/` | `~/.config/opencode/skills/` | Symlink / Copy |
| **Google Antigravity** | `.agents/skills/` | `~/.gemini/antigravity/skills/` | Symlink / Copy |
| **Gemini CLI** | `.agents/skills/` | `~/.gemini/skills/` | Symlink / Copy |
| **Roo Code** | `.roo/skills/` | `~/.roo/skills/` | Symlink / Copy |
| **Cline** | `.cline/skills/` | `~/.cline/skills/` | Symlink / Copy |
| **Continue** | `.continue/skills/` | `~/.continue/skills/` | Symlink / Copy |
| **GitHub Copilot** | `.agents/skills/` | `~/.copilot/skills/` | Symlink / Copy |
| **Factory AI (Droid)** | `.factory/skills/` | `~/.factory/skills/` | Symlink / Copy |
| **Trae AI IDE** | `.trae/skills/` | `~/.trae/skills/` | Symlink / Copy |
| **Kimi Code CLI** | `.kimi/skills/` | `~/.kimi/skills/` | Symlink / Copy |
| **Qwen Code CLI** | `.qwen/skills/` | `~/.qwen/skills/` | Symlink / Copy |
| **iFlow CLI** | `.iflow/skills/` | `~/.iflow/skills/` | Symlink / Copy |
| **OpenHands** | `.openhands/skills/` | `~/.openhands/skills/` | Symlink / Copy |
| **Kiro CLI** | `.kiro/skills/` | `~/.kiro/skills/` | Symlink / Copy |
| **Charm Crush** | `.crush/skills/` | `~/.crush/skills/` | Symlink / Copy |
| **Pi Coding Agent** | `.pi/skills/` | `~/.pi/skills/` | Symlink / Copy |
| **Posit Assistant** | `.posit/skills/` | `~/.posit/skills/` | Symlink / Copy |
| **Goose AI** | `.goose/skills/` | `~/.config/goose/skills/` | Symlink / Copy |
| **Amp Code** | `.agents/skills/` | `~/.amp/skills/` | Symlink / Copy |
| **Replit AI** | `.replit/skills/` | `~/.replit/skills/` | Symlink / Copy |
| **Qoder CLI** | `.qoder/skills/` | `~/.qoder/skills/` | Symlink / Copy |
| **OpenClaw** | `.openclaw/skills/` | `~/.openclaw/skills/` | Symlink / Copy |
| **Universal Standard** | `.agents/skills/` | `~/.agents/skills/` | Symlink / Copy |

---

## Agent Slash Commands and Trigger Phrases

Once installed in your agent harness, the skill activates automatically upon detecting academic editing intent or through explicit prompts:

### Slash Commands
- `/academic-unslop`: Primary entrypoint for thesis revision and AI-risk diagnosis.
- `/unslop`: Quick trigger for purging LLM tropes, inflation, and buzzwords.
- `/thesis-unslop`: Targets specific chapters or sections for minimal-edit revision.

### English Triggers
- `"Reduce AI score of Chapter 4"`
- `"Turnitin AI detected 42% on this chapter, revise with minimal edits"`
- `"Audit this paper for AI-writing risk patterns"`
- `"De-slop this literature review while preserving citations"`

### Chinese Triggers (中文触发词)
- `"降低这篇论文的AI率"` / `"降AI"`
- `"降低AI检测率，不要改变实证数据"`
- `"知网AIGC查重过高，进行微调改写"`
- `"改写降AI，保留原意并锁定假设和参考文献"`

---

## What This Skill Does

The **Academic Unslop Skill** analyzes thesis text for structural and stylistic AI-writing patterns and revises selected high-risk passages through controlled, minimal edits.

### Targeted Vulnerabilities
- Repeated sentence openings (e.g., *"This study... This study..."*)
- Over-smooth academic logic (unbroken background $\rightarrow$ gap $\rightarrow$ purpose $\rightarrow$ contribution)
- Mechanical paragraph structures and uniform sentence rhythm ($CV < 0.25$)
- Formulaic literature review templates and repetitive hypothesis development sequences
- Predictable empirical result reporting loops (`test → threshold → result → support`)
- Generic conclusions, unanchored implications, and business-talk AI tropes (*"delve"*, *"testament"*, *"pivotal"*, *"tapestry"*)
- Chinese template phrases (随着……的飞速发展; 综上所述; 毫无疑问) and CNKI-sensitive writing patterns
- Qualitative passages with decorative quotes or absent researcher reasoning

### Central Rule: Minimal-Edit Revision, Never Regeneration
```text
Reduce AI-writing risk by minimally editing original text sentence by sentence,
never by regenerating whole paragraphs or chapters.
```

- **Allowed Operations**: Substituting individual words, reordering clauses safely, splitting overly balanced sentences, recasting repeated sentence openings, eliminating formulaic transitions, making authorial reasoning visible, and preserving/increasing word count ($\ge 100\%$).
- **Forbidden Operations**: Whole-paragraph regeneration, whole-chapter rewriting, back-translation, third-party humanizer/bypass APIs, fabricating citations/data/quotes/researcher voice, and claiming detector score improvements without a comparable external re-test.

---

## Quality Gates (Gate A through Gate J)

Every revised paragraph and chapter must pass all ten mandatory quality gates before output. If any gate fails, the revision is marked **Incomplete** and rolled back for rework:

| Gate | Check | Output-Blocking Standard |
|:---:|:---|:---|
| **Gate A** | **AI-Pattern Reduction** | Addresses actual hit dimensions; structural handling for D12/D13/D15; minimal-edit traceability; **zero placeholders (`TODO`, `X and Y`, `...`)**. |
| **Gate B** | **Academic Integrity** | String comparison verifies **100% preservation** of headings, captions, citations, variable names, hypotheses, p-values, statistics ($\beta, t, F, R^2$, VIF), reference lists, and verbatim quotes. Zero reference pollution. |
| **Gate C** | **Meaning Preservation** | Original claim and logic preserved; no new theories or data; **claim strength preserved** (inferential verbs like *"suggests"* are never upgraded to assertive *"proves"*). |
| **Gate D** | **Dash & Punctuation Integrity** | **Zero Unicode em dashes ("—")** in body prose; **zero double hyphens ("--")** anywhere; single hyphens in compounds (*"employee-AI"*) and en dashes in date ranges (*"2020–2024"*) strictly preserved. |
| **Gate E** | **Aggregation & Breakpoints** | Verifies rewriting did not create continuous long fragments ($> 3000$ chars); inserts substantive empirical breakpoints where required; **merging paragraphs is forbidden**. |
| **Gate F** | **Word-Count Preservation** | **Every paragraph $\text{revised} \ge \text{original}$** (target $0\%$ to $+15\%$). Whole-chapter length must not shrink. Over-cap exception for paragraphs already $> 200$ words. |
| **Gate G** | **Structure & Readability** | Headings on own line; **zero duplicated/echoed headings or captions**; no merged mega-paragraphs; soft cap $\le 160$ words / $9$ sentences, hard cap $200$ words / $12$ sentences. Matches author style baseline. |
| **Gate H** | **Grammatical Completeness** | **HARD BLOCKING**: Every single period-delimited unit must possess its own subject and finite verb. **Zero sentence fragments**, zero choppy runs ($< 8$ words), zero thin conversational sentences. |
| **Gate I** | **Grammar & Subject-Verb Agreement** | Verifies subject-verb agreement (especially across splits), sentence-initial capitalization, demonstratives (*"These items"*, not *"This items"*), and zero spelling errors or typos. |
| **Gate J** | **Logic Flow & Anti-AI Phrase Filter** | Logical cohesion between adjacent sentences; **zero meta-commentary** (*"This sentence was added for clarity"*); tiered filter eliminates Tier 1 AI tropes (*"delve"*, *"rich tapestry"*, *"pivotal role"*, *"at its core"*); protects discipline-standard technical terms. |

---

## Progressive Reference Architecture

Following the `writing-for-agents` engineering doctrine, the repository separates core workflow orchestration (`SKILL.md`) from modular diagnostic and technique catalogues located in `references/`:

- [`references/detection_principles.md`](references/detection_principles.md):
  - Comprehensive definitions and scoring criteria for **D1 through D17** (Total: 49.0 points).
  - Qualitative supplement dimensions **D18 through D21**.
  - Mathematical formulas for `raw_paragraph_risk`, `paragraph_risk_index`, and `scope_risk_index`.
  - Multi-detector triggers A–D and external calibration floors.
- [`references/rewrite_methods.md`](references/rewrite_methods.md):
  - Complete algorithm descriptions, before/after thesis examples, and constraints for **T1 through T29**.
  - The 6-Rung Escalation Ladder and Three-Pass Rewrite Protocol.
  - Mandatory 8-field Source Trace block logging for T19 and T29.
- [`references/qualitative_authorship_restoration.md`](references/qualitative_authorship_restoration.md):
  - Methodology-compatibility matrix across 6 qualitative traditions (Thematic Analysis, Grounded Theory, IPA, Case Study, Narrative Inquiry, Content Analysis).
  - Qualitative de-templating rules (T25–T28) and verbatim quotation protection.
- [`references/chinese_text_ai_risk.md`](references/chinese_text_ai_risk.md):
  - Fixed 10-field evidence template for Chinese routing.
  - CNKI (知网) AIGC two-zone diagnostics (front-loaded introductory vs. back-loaded recommendation chapters).
  - High-risk Chinese phrase catalogue, copula avoidance, and protected statistical terms carveout.

---

## Codebase Security and Confidentiality

We adhere to rigorous data privacy standards for scientific research:

- **100% Local In-Harness Execution**: Text processing runs strictly within your local agent environment.
- **Zero Third-Party Exfiltration**: No text is ever transmitted to external bypass servers or paraphrasing APIs.
- **Automated Security Review Agents**: Continuous integration enforces five automated security review agents on all branches and pull requests:
  - **Agent 1: Path Traversal Guard**: Prevents relative directory escaping and path traversal attacks during file copy or linking.
  - **Agent 2: Shell Injection Guard**: Verifies shell variable quoting and ensures zero unsanitized `child_process.exec` calls.
  - **Agent 3: Academic Confidentiality Guard**: Guarantees zero external network dependencies and enforces offline local processing.
  - **Agent 4: ReDoS Analyzer**: Scans regex patterns to prevent catastrophic backtracking vulnerabilities.
  - **Agent 5: Secret Leakage Guard**: Scans the codebase for API keys, personal access tokens, or private credentials.
- Read our full policy in [`SECURITY.md`](SECURITY.md).

---

## Getting Into Agent Skills Directories and Registries

To list this repository in public agent skills directories and catalogs:

1. **`skills.sh` / `agentskills.io`**:
   - The repository layout conforms to the AgentSkills specification. Adding GitHub repository topics `agent-skills`, `skills`, and `claude-code` enables automatic indexing by the `skills.sh` crawler.
   - Users can already install directly: `npx skills add KalarisLabs/academic-unslop-skill`.
2. **Claude Code Plugin Marketplace**:
   - Packaged with official plugin manifests [`.claude-plugin/plugin.json`](.claude-plugin/plugin.json) and [`.claude-plugin/marketplace.json`](.claude-plugin/marketplace.json).
   - Installable immediately via `claude plugin add KalarisLabs/academic-unslop-skill`.
3. **Cursor Directory (`cursor.directory`)**:
   - Submit via `cursor.directory/submit` under category "Academic / Research".
4. **NPM Scoped Organization Registry**:
   - Configured as `@kalarislabs/academic-unslop-skill` with `access: public` in `publishConfig`.
   - Run `npm publish --access public` after creating the `kalarislabs` npm organization.
5. Read our complete maintainer guide in [`docs/registry-distribution.md`](docs/registry-distribution.md).

---

## Chapter-by-Chapter Closed-Loop Workflow

```text
User: "Reduce the AI detection score of Chapter 4"
  ↓
Stage 1: Diagnostic Review & Version Ledger Setup
  - Parse chapter paragraphs; evaluate D1-D17 or Chinese 10-field template.
  - Identify highest-risk cluster; establish chapter baseline score.
  ↓
Stage 2: Minimal-Edit Revision
  - Apply Phase 4.5 dimension-to-technique plan.
  - Execute Three-Pass Rewrite (Pass 1 phrase repair, Pass 2 rhythm, Pass 3 evidence trace).
  - Verify word count >= 100%.
  ↓
Stage 3: Mandatory Quality Gates (Gates A - J)
  - Verify zero fragments (Gate H), zero dash errors (Gate D), locked statistics (Gate B).
  ↓
Stage 4: Candidate Delivery & Evidence Logging
  - Output revised candidate text + full execution evidence tables.
  ↓
Stage 5: Mandatory External Re-Test Stop
  - User submits candidate to Turnitin AI or CNKI.
  - If score is below target (< 30%): LOCK chapter as DONE, proceed to next chapter.
  - If score decreased but >= target: Update baseline, mark PROGRESS, escalate rung for next round.
  - If score regressed or stalled: ROLL BACK to previous lowest version and adjust strategy.
```

---

## Repository Layout

```
academic-unslop-skill/
├── .claude-plugin/                    # Claude Code plugin registration
│   ├── plugin.json                    # Plugin manifest
│   └── marketplace.json               # Marketplace catalog configuration
├── .github/
│   └── workflows/
│       ├── ci.yml                     # Multi-platform CI (Ubuntu, Windows, macOS)
│       ├── codeql.yml                 # Automated CodeQL security analysis
│       └── security-agents-review.yml # 5-agent security review audit on PRs/branches
├── .gitignore                         # Isolates local dev tooling & scratch tickets
├── LICENSE                            # MIT License (c) KalarisLabs
├── README.md                          # Multi-platform documentation
├── SECURITY.md                        # Academic data privacy & security policy
├── package.json                       # npm manifest with bin and engines
├── install.sh                         # Standalone POSIX curl installer
├── bin/
│   └── install.js                     # Zero-dependency cross-agent CLI & installer
├── docs/
│   ├── registry-distribution.md       # Directory indexing & marketplace distribution guide
│   └── agents/                        # Domain models and triage specifications
├── skills/
│   └── academic-unslop/
│       ├── SKILL.md                   # Core Agent Skill definition
│       └── references/                # Bundled modular references
│           ├── detection_principles.md
│           ├── rewrite_methods.md
│           ├── qualitative_authorship_restoration.md
│           └── chinese_text_ai_risk.md
├── references/                        # Root reference mirror for direct access
│   ├── detection_principles.md
│   ├── rewrite_methods.md
│   ├── qualitative_authorship_restoration.md
│   └── chinese_text_ai_risk.md
├── SKILL.md                           # Root discovery entrypoint
└── tests/
    ├── verify-skill.js                # Automated integrity test suite (82 checks)
    └── security-audit.js              # 5-agent security review test suite (12 checks)
```

---

## Verification and Testing

Run the automated test suite to verify YAML frontmatter validity, cross-reference integrity, technique mapping, and CLI installation behavior:

```bash
# Run skill specification and reference integrity tests (82 checks)
npm test

# Run 5-agent security review audit (12 checks)
node tests/security-audit.js
```

---

## License

MIT © [KalarisLabs](https://github.com/KalarisLabs)
