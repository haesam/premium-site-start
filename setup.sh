#!/usr/bin/env bash
# Installs the extra design skills into ./.claude/skills (project scope).
# Usage: ./setup.sh [--figma] [--ui-ux-pro-max] [--dry-run]
set -euo pipefail

FIGMA=0; UIUX=0; DRY=0
for a in "$@"; do
  case "$a" in
    --figma) FIGMA=1 ;;
    --ui-ux-pro-max) UIUX=1 ;;
    --dry-run) DRY=1 ;;
    *) echo "unknown option: $a" >&2; exit 2 ;;
  esac
done

run() { echo "+ $*"; [ "$DRY" -eq 1 ] || "$@"; }

command -v node >/dev/null || { echo "Node.js not found. Install LTS from https://nodejs.org/ and rerun." >&2; exit 1; }
need="22.20.0"; have="$(node --version | sed 's/^v//')"
if [ "$(printf '%s\n%s\n' "$need" "$have" | sort -V | head -n1)" != "$need" ]; then
  echo "Node.js $have is older than $need (required by the skill installer). Upgrade and rerun." >&2
  exit 1
fi

# --skill limits each install to one skill; the repos contain many more.
run npx --yes skills@latest add emilkowalski/skills --skill "emil-design-eng" --agent claude-code --yes --copy
run npx --yes skills@latest add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend" --agent claude-code --yes --copy
run npx --yes impeccable@latest install --providers=claude --scope=project

if [ "$FIGMA" -eq 1 ]; then
  run claude mcp add --transport http figma https://mcp.figma.com/mcp
  echo "Figma: restart Claude Code, run /mcp, approve in the browser."
fi
if [ "$UIUX" -eq 1 ]; then
  echo "ui-ux-pro-max: inside Claude Code run  /plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill  then install it from /plugin."
fi

echo
echo "Done. Fully restart Claude Code, then run:  /impeccable init"
echo "Check:  ls .claude/skills   (expect design-taste-frontend, emil-design-eng, frontend-design, impeccable)"
