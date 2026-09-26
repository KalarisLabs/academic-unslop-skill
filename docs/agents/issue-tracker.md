# Issue Tracker Configuration

**Repository**: `KalarisLabs/academic-unslop-skill`  
**Tracker Type**: GitHub Issues + Local Markdown Scaffolding (`.scratch/`)

## GitHub Tracker
- Web Interface: `https://github.com/KalarisLabs/academic-unslop-skill/issues`
- CLI Command: `gh issue` (e.g., `gh issue list`, `gh issue create`)

## Local Scratch Tracker
- For offline drafting or internal feature tickets, use `.scratch/<feature-slug>/`
- Specs: `.scratch/<feature-slug>/spec.md`
- Tickets: `.scratch/<feature-slug>/issues/01-<slug>.md`
- Scratch directories are git-ignored to prevent polluting upstream releases.
