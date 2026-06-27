# Wiki Maintenance

This wiki is not edited directly on GitHub. It's generated from the [`docs/`](../docs) folder in the main repo.

## Why

Editing the GitHub Wiki directly means changes live in a separate git history with no PR review. Keeping docs as Markdown in the main repo means:

- Doc changes go through the same PR review as code changes.
- Docs can reference and link to actual source files (e.g. `[ContactFormSection.tsx](../src/sections/ContactFormSection.tsx)`), and those links break visibly in review if a referenced file moves.
- Diagrams are plain-text [Mermaid](https://mermaid.js.org/) in the Markdown itself — diffable, no exported images to keep in sync.

## How it works

[`.github/workflows/sync-wiki.yml`](../.github/workflows/sync-wiki.yml) runs on every push to `main` that touches `docs/**`:

1. Checks out the main repo and the wiki's own git repo (every GitHub wiki is a separate git repo at `<repo>.wiki.git`).
2. `rsync`s `docs/` over the wiki checkout (preserving the wiki's `.git`), so files removed from `docs/` are also removed from the wiki.
3. Commits and pushes to the wiki's `master` branch as `github-actions[bot]`.

## To update the wiki

1. Edit files under `docs/` in a normal PR.
2. Merge to `main`.
3. The wiki updates automatically — no separate action needed.

## Adding a new page

Add a new `.md` file under `docs/`, and link to it from [[Home]] (or another page) using `[[Page-Name]]` — GitHub Wiki resolves that to the file name with spaces/hyphens normalized, same as this repo's existing pages.
