#!/usr/bin/env bash
# academic-unslop-skill standalone installer
# Created by KalarisLabs
# Usage: curl -fsSL https://raw.githubusercontent.com/KalarisLabs/academic-unslop-skill/main/install.sh | bash -s -- [options]

set -euo pipefail

REPO="KalarisLabs/academic-unslop-skill"
BRANCH="main"
DEST_BASE=""
SCOPE="project"
ALL_AGENTS=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    -g|--global)
      SCOPE="global"
      shift
      ;;
    --all)
      ALL_AGENTS=true
      shift
      ;;
    -p|--path)
      DEST_BASE="$2"
      shift 2
      ;;
    -h|--help)
      echo "academic-unslop-skill installer (by KalarisLabs)"
      echo "Usage: ./install.sh [options]"
      echo "  -g, --global   Install globally to user home agent directories"
      echo "  --all          Install to all known agent harness directories"
      echo "  -p, --path     Install to specific target directory"
      exit 0
      ;;
    *)
      shift
      ;;
  esac
done

TMP_DIR=$(mktemp -d)
trap 'rm -rf "$TMP_DIR"' EXIT

echo -e "\033[1;34m→ Downloading academic-unslop-skill from ${REPO}...\033[0m"
curl -fsSL "https://github.com/${REPO}/archive/refs/heads/${BRANCH}.tar.gz" | tar -xz -C "$TMP_DIR"

SOURCE_ROOT="$TMP_DIR/academic-unslop-skill-${BRANCH}"
if [[ -d "$SOURCE_ROOT/skills/academic-unslop" ]]; then
  SOURCE_SKILL="$SOURCE_ROOT/skills/academic-unslop"
else
  SOURCE_SKILL="$SOURCE_ROOT"
fi

if [[ -n "$DEST_BASE" ]]; then
  TARGETS=("$DEST_BASE")
elif [[ "$SCOPE" == "global" ]]; then
  if [[ "$ALL_AGENTS" == true ]]; then
    TARGETS=(
      "$HOME/.claude/skills"
      "$HOME/.agents/skills"
      "$HOME/.cursor/skills"
      "$HOME/.codeium/windsurf/skills"
      "$HOME/.codex/skills"
      "$HOME/.config/opencode/skills"
      "$HOME/.gemini/antigravity/skills"
      "$HOME/.gemini/skills"
      "$HOME/.roo/skills"
      "$HOME/.cline/skills"
      "$HOME/.continue/skills"
      "$HOME/.copilot/skills"
      "$HOME/.factory/skills"
      "$HOME/.trae/skills"
      "$HOME/.kimi/skills"
      "$HOME/.qwen/skills"
      "$HOME/.iflow/skills"
      "$HOME/.openhands/skills"
      "$HOME/.kiro/skills"
      "$HOME/.crush/skills"
      "$HOME/.pi/skills"
      "$HOME/.posit/skills"
      "$HOME/.config/goose/skills"
      "$HOME/.amp/skills"
      "$HOME/.replit/skills"
      "$HOME/.qoder/skills"
      "$HOME/.openclaw/skills"
    )
  else
    TARGETS=(
      "$HOME/.claude/skills"
      "$HOME/.agents/skills"
      "$HOME/.cursor/skills"
      "$HOME/.gemini/antigravity/skills"
      "$HOME/.codex/skills"
    )
  fi
else
  TARGETS=(
    "./.agents/skills"
    "./.claude/skills"
  )
fi

for TARGET in "${TARGETS[@]}"; do
  mkdir -p "$TARGET"
  DEST="$TARGET/academic-unslop"
  rm -rf "$DEST"
  mkdir -p "$DEST"
  cp "$SOURCE_SKILL/SKILL.md" "$DEST/SKILL.md"
  if [[ -d "$SOURCE_SKILL/references" ]]; then
    cp -R "$SOURCE_SKILL/references" "$DEST/"
  elif [[ -d "$SOURCE_ROOT/references" ]]; then
    cp -R "$SOURCE_ROOT/references" "$DEST/"
  fi
  echo -e "\033[32m✔\033[0m Installed skill to \033[2m$DEST\033[0m"
done

echo -e "\033[1;32m✔ academic-unslop-skill by KalarisLabs successfully installed!\033[0m"
