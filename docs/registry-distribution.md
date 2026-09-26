# Registry Distribution Guide: Academic Unslop Skill

This document provides step-by-step instructions for publishing and indexing `@kalarislabs/academic-unslop-skill` across all major agent skill directories, plugin marketplaces, and package registries.

---

## 1. `skills.sh` & `agentskills.io` Registry

The `skills.sh` ecosystem (powered by AgentSkills standard) enables zero-install agent skill execution via `npx skills add <github-user>/<repo>`.

### Instant Usage
Because the repository is live on GitHub at `https://github.com/KalarisLabs/academic-unslop-skill`, any user or agent can already install it:

```bash
# Current project
npx skills add KalarisLabs/academic-unslop-skill

# Global installation across all local agent harnesses
npx skills add KalarisLabs/academic-unslop-skill -g
```

### Getting Listed on the `skills.sh` Directory
The `skills.sh` public directory crawls public GitHub repositories meeting the AgentSkills specification:
1. **GitHub Repository Topics**: Ensure the following topics are added on GitHub (`Settings` -> `General` -> `Topics`):
   - `agent-skills`
   - `skills`
   - `claude-code`
   - `cursor`
   - `windsurf`
   - `academic-writing`
   - `academic-integrity`
   - `antislop`
2. **File Structure Compliance**:
   - `SKILL.md` at root and in `skills/academic-unslop/SKILL.md`.
   - Valid YAML frontmatter (`name`, `description`, `compatibility`, `tags`).
   - Modular references in `references/`.
   All compliance checks are pre-validated by `npm test`.

---

## 2. Claude Code Plugin Marketplace

Claude Code supports plugins through local configuration, Git URLs, and the official plugin marketplace.

### Instant Installation
Users can install the skill directly into Claude Code via:

```bash
# Add directly via GitHub repository
claude plugin add KalarisLabs/academic-unslop-skill
```

### Marketplace Manifests
The repository includes the required Claude Code plugin metadata:
- [`.claude-plugin/plugin.json`](../.claude-plugin/plugin.json): Declares package identity, version (`2.21.0`), and metadata.
- [`.claude-plugin/marketplace.json`](../.claude-plugin/marketplace.json): Declares skill registration and capabilities.

### Official Anthropic Directory Listing
To list the plugin in the curated Claude Code plugin directory:
1. Submit a PR or submission ticket to Anthropic's plugin directory (or community awesome-claude-plugins).
2. Point to `https://github.com/KalarisLabs/academic-unslop-skill`.
3. Provide the security verification badge and test results demonstrating zero network exfiltration.

---

## 3. Cursor Directory (`cursor.directory`)

Cursor natively supports rules and skills via `.agents/skills/` and `.cursorrules`.

### How to Submit:
1. Navigate to [https://cursor.directory/submit](https://cursor.directory/submit).
2. **Name**: Academic Unslop Skill (`@kalarislabs/academic-unslop-skill`)
3. **Category**: Research / Academic Writing / Anti-Slop
4. **Description**: Conservative AI detector-informed academic thesis revision and de-slopping skill for English and Chinese research.
5. **Content**: Provide the contents of [`SKILL.md`](../SKILL.md).
6. **Repository URL**: `https://github.com/KalarisLabs/academic-unslop-skill`

---

## 4. NPM Registry (`@kalarislabs/academic-unslop-skill`)

Packaging under the `@kalarislabs` scoped organization allows users to run:

```bash
# Direct run via npx
npx @kalarislabs/academic-unslop-skill --global

# Or global install via npm
npm install -g @kalarislabs/academic-unslop-skill
academic-unslop --global
```

### One-Time Setup for KalarisLabs:
1. Log in to [npmjs.com](https://www.npmjs.com) and create the free organization: `kalarislabs`.
2. Authenticate locally:
   ```bash
   npm login
   ```
3. Publish with public access:
   ```bash
   npm publish --access public
   ```
4. Future automated releases: Add `NPM_TOKEN` to GitHub repository secrets to enable continuous publishing via GitHub Actions on new release tags.

---

## 5. Curated Awesome Lists

Submit pull requests to the leading open-source curated collections:
- `awesome-agent-skills` (GitHub)
- `awesome-claude-skills` (GitHub)
- `awesome-cursorrules` (GitHub)

Each PR should include:
- Link: `[academic-unslop-skill](https://github.com/KalarisLabs/academic-unslop-skill)`
- Summary: Conservative, evidence-preserving academic thesis revision skill supporting Turnitin AI and CNKI with zero detector-bypass claims.
