# internal/

Firm-internal working material for **Law Offices of Jose R. Santiago, PLLC**.

Nothing under this directory is part of the plugin marketplace. It ships no
plugin, defines no skill or agent, and is not referenced by
`.claude-plugin/marketplace.json`. The validation commands in the repo root
`CLAUDE.md` skip it automatically — the per-plugin loop only descends into
directories that contain `.claude-plugin/plugin.json`, and this one does not.

## What belongs here

Strategy, planning, and operating documents for the firm itself: business model
work, internal playbooks, planning drafts. Material that is *about running the
firm*, as distinct from the plugins the firm publishes.

## What does not belong here

- **Client information of any kind.** No names, no matter details, no case
  facts, no documents received from clients, no A-numbers or receipt numbers.
  This is a git repository; anything committed persists in history even after a
  later deletion.
- **Credentials.** No API tokens, passwords, connection strings, or private
  keys.
- **Anything that should be published.** Reference material meant to be shared
  or shipped with a plugin belongs in `references/` or inside the relevant
  plugin directory.

## Contents

| Path | What it is |
|---|---|
| `modelo-de-negocio/` | Business model of the firm — Word document plus the source that generates it |

## Related

`references/modelo-de-negocio-law-firm-eeuu.md` is the **generic**, publishable
version of the same subject: how a U.S. law firm works as a business, with no
firm-specific content. The document in `modelo-de-negocio/` is the version
written with this firm as the subject. If the underlying model changes, both
may need updating.
