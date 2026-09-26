# Security & Academic Confidentiality Policy

**Repository**: `KalarisLabs/academic-unslop-skill`  
**Security Lead**: KalarisLabs Security Team

---

## 1. Academic Data Confidentiality Guarantees

Academic manuscripts, dissertations, and research proposals contain sensitive, unreleased intellectual property. `academic-unslop-skill` is engineered with the following absolute confidentiality principles:

1. **Zero External Network Exfiltration**:
   - The skill performs **100% of text diagnosis, scoring, and minimal-edit revision locally within your active coding agent harness**.
   - The skill contains **no telemetry, no external API calls, and no analytics beacons**.
   - It strictly forbids routing text to third-party "humanizer" APIs, commercial paraphrasing web services, or detector-bypass endpoints.
2. **Protection of Research Elements**:
   - Empirical datasets, regression coefficients, participant quotes, and confidential findings are strictly locked (Phase 7 Gate B).
   - Under no circumstances does the skill hallucinate, interpolate, or leak unpublished data across documents.
3. **No Unintentional Git Tracking**:
   - Local scratch tickets (`.scratch/`), agent transcripts (`.gemini/`, `.claude/`), and developer authoring tools are excluded in `.gitignore` by default.

---

## 2. Reporting a Vulnerability

If you discover a security vulnerability, path traversal bug, or potential exfiltration vector in `academic-unslop-skill`:

1. **Do not open a public issue.**
2. Report the vulnerability privately via **GitHub Security Advisories**:
   `https://github.com/KalarisLabs/academic-unslop-skill/security/advisories/new`
3. Alternatively, email the security team at: `security@kalarislabs.com`

We commit to acknowledging your advisory within 48 hours and providing a coordinated patch release within 7 business days.

---

## 3. Supported Versions

| Version | Supported | Security Updates |
|:---:|:---:|:---:|
| 2.21.x | Yes | Current active release |
| < 2.20 | No | End of life |
