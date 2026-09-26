# AGENTS.md — Instructions for AI Coding Agents

This repository contains **`academic-unslop-skill`**, authored by **KalarisLabs**.

---

## 1. Skill Invocations & Rules

When operating as an AI agent consuming or modifying this repository:

### Core Principles (Principles 0–9)
- **Principle 0 (Target Lock)**: Target threshold is $< 30\%$ (or user custom target). Reaching a new lowest score above target is PROGRESS, not DONE. Never claim completion while above target.
- **Principle 1 (Closed Loop)**: Process exactly ONE chapter per round. Output revisions, then STOP for the user to conduct an external re-test with Turnitin or CNKI.
- **Principle 2 (Minimal Edit)**: Never regenerate paragraphs from scratch. Every rewritten sentence must trace back to an original sentence.
- **Principle 3 (Red Lines & Ledgers)**: Maintain the Chapter Version Ledger. Re-tests that fail to improve over the lowest recorded score trigger immediate rollback.
- **Principle 4 (Word-Count Preservation)**: $\text{revised\_word\_count} \ge \text{original\_word\_count}$ for every paragraph. Reducing word count to reduce AI score is strictly forbidden.
- **Principle 6 (Structure & Readability)**: Headings must remain on their own lines. Never merge paragraphs into monolithic mega-paragraphs. Soft cap $\le 160$ words / 9 sentences; hard cap $200$ words / 12 sentences.
- **Principle 8 (Syntactic Completeness)**: Zero sentence fragments. Every period-delimited unit must possess its own subject and finite verb.
- **Principle 9 (Grammar & Logic Flow)**: Zero meta-commentary. Zero em dashes ("—") in body prose; zero double hyphens ("--"). Tier 1 AI tropes (*"delve"*, *"rich tapestry"*, *"pivotal role"*) must be eliminated.

### Progressive Disclosure Reference Map
- Diagnostic criteria & D1–D21 scoring: See [`references/detection_principles.md`](references/detection_principles.md).
- Revision algorithms & T1–T29 techniques: See [`references/rewrite_methods.md`](references/rewrite_methods.md).
- Qualitative passages & methodology compatibility: See [`references/qualitative_authorship_restoration.md`](references/qualitative_authorship_restoration.md).
- Chinese thesis text & CNKI AIGC diagnostics: See [`references/chinese_text_ai_risk.md`](references/chinese_text_ai_risk.md).

---

## 2. Agent Skills Integration (Matt Pocock Suite)

### Issue Tracker
GitHub Issues + Local Markdown Scaffolding (`.scratch/`). See [`docs/agents/issue-tracker.md`](docs/agents/issue-tracker.md).

### Triage Labels
Canonical 5-state triage vocabulary. See [`docs/agents/triage-labels.md`](docs/agents/triage-labels.md).

### Domain Docs
Single-context domain modeling for academic AIGC rewriting. See [`docs/agents/domain.md`](docs/agents/domain.md).
