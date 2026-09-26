# Academic Unslop Skill (`academic-unslop-skill`)

[![Created by KalarisLabs](https://img.shields.io/badge/Author-KalarisLabs-blue.svg)](https://github.com/KalarisLabs)
[![Skills Ecosystem](https://img.shields.io/badge/skills.sh-academic--unslop-blue.svg)](https://skills.sh)
[![Agent Skills Spec](https://img.shields.io/badge/spec-agentskills.io-green.svg)](https://agentskills.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version: 2.21.0](https://img.shields.io/badge/Version-2.21.0-orange.svg)](#)

A conservative, AIGC detector-informed thesis rewriting skill for English and Chinese academic writing by **KalarisLabs**.

Supports **Turnitin AI**, **CNKI AIGC (知网)**, minimal-edit revision, protected academic elements, qualitative/quantitative routing, and chapter-by-chapter AI-writing risk reduction **without detector-bypass claims**.

> [!IMPORTANT]
> **Academic Integrity Notice**: This is **not** a detector-bypass tool. It does not guarantee any AI detector score. It focuses on minimal, evidence-preserving revision, rigorous academic integrity, and systematic reduction of traceable AI-generated writing patterns.

---

## ⚡ Universal Installation

The skill is compatible with **all AI coding agents and harnesses** (Claude Code, Cursor, Windsurf, Codex, OpenCode, Google Antigravity, Roo Code, Continue, Universal/Cline/Zed).

### Option 1: Via `skills.sh` / `npx skills` (Recommended)

```bash
# Add to current project (auto-detects Claude Code, Cursor, Windsurf, etc.)
npx skills add KalarisLabs/academic-unslop-skill

# Install globally to your user profile across all coding agents
npx skills add KalarisLabs/academic-unslop-skill -g

# Install for specific agents non-interactively
npx skills add KalarisLabs/academic-unslop-skill -a claude-code -a cursor -y
```

### Option 2: Via `npm` / `npx` (with `--global` option)

```bash
# Direct run via npx (interactive auto-detection)
npx academic-unslop-skill

# Install globally across ALL coding agent harnesses on your machine
npx academic-unslop-skill --global

# Install globally to every supported agent directory
npx academic-unslop-skill -g --all

# Install to custom directory
npx academic-unslop-skill --path ~/.claude/skills
```

Or install globally via npm:
```bash
npm install -g academic-unslop-skill
academic-unslop-skill --global
```

### Option 3: Standalone `curl` / `bash` (Zero Dependencies)

```bash
# Install to current project
curl -fsSL https://raw.githubusercontent.com/KalarisLabs/academic-unslop-skill/main/install.sh | bash

# Install globally across user agent directories
curl -fsSL https://raw.githubusercontent.com/KalarisLabs/academic-unslop-skill/main/install.sh | bash -s -- --global
```

### Option 4: Direct Git Clone

```bash
# Claude Code (Project or Global)
git clone https://github.com/KalarisLabs/academic-unslop-skill.git .claude/skills/academic-unslop

# Cursor / Windsurf / Universal Agents
git clone https://github.com/KalarisLabs/academic-unslop-skill.git .agents/skills/academic-unslop
```

---

## 🛡️ Target Platform Directory Matrix

When installed with the `--global` (`-g`) option, `academic-unslop-skill` populates the appropriate global skill directories:

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
| **Continue** | `.continue/skills/` | `~/.continue/skills/` | Symlink / Copy |
| **GitHub Copilot** | `.agents/skills/` | `~/.copilot/skills/` | Symlink / Copy |
| **Universal (Cline/Zed/Amp)** | `.agents/skills/` | `~/.agents/skills/` | Symlink / Copy |

---

## 🎯 What This Skill Does

The **AIGC Detector & Rewriter Skill** analyzes thesis text for structural and stylistic AI-writing patterns and revises selected high-risk passages through controlled, minimal edits.

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

## 🚦 Phase 7 Quality Gates (Gate A through Gate J)

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

## 📚 Progressive Reference Architecture

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

## 🔄 Chapter-by-Chapter Closed-Loop Workflow

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

## 🛠️ Repository Layout

```
academic-unslop-skill/
├── .gitignore                         # Isolates local dev tooling & scratch tickets
├── LICENSE                            # MIT License (c) KalarisLabs
├── README.md                          # Multi-platform documentation
├── package.json                       # npm manifest with bin and engines
├── install.sh                         # Standalone POSIX curl installer
├── bin/
│   └── install.js                     # Zero-dependency cross-agent installer CLI
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
    └── verify-skill.js                # Automated integrity test suite
```

---

## 🧪 Verification

Run the automated repository test suite to verify YAML frontmatter validity, cross-reference integrity, technique mapping, and CLI installation behavior:

```bash
npm test
```

---

## 📄 License

MIT © [KalarisLabs](https://github.com/KalarisLabs)
