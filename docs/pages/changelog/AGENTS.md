# AGENTS.md — Changelog Agent Rules

This file defines prompt-executable behaviors for Codex (or any LLM agent) responsible for maintaining `CHANGELOG.md` in this directory.

It enforces compatibility with the official changelog layout and derives entries based on meaningful changes across versions.

---

## 📍 Scope & Intent

When the user requests:

> “Update changelog since `vX.Y.Z` into the pending version section”

The agent must:

* Determine the **most recent version tag** (`vX.Y.Z`)
* Collect all relevant **feature additions** and **known issue changes** since that version
* Insert them under a `## [Pending Version] – Updated: YYYY-MM-DD` section using the production changelog schema

---

## 👉 Section Schema

Each version entry (including pending ones) must match the following format:

```markdown
## vX.Y.Z – YYYY-MM-DD  ← for finalized versions  
## [Pending Version] – Updated: YYYY-MM-DD  ← for pending work

#### Features
- …

#### Fixes to Known Issues
- …
```

If there are no known issue fixes, write:

```markdown
#### Fixes to Known Issues
- None.
```

---

## 🧐 Feature Derivation Rules

Features must be inferred **not by commit alone**, but by comparing the **codebase on the target version tag** with the **codebase as of now** (or current working state).

| Rule ID   | Condition                                               | Target Action                                        |
| --------- | ------------------------------------------------------- | ---------------------------------------------------- |
| **F-001** | A new feature is present in code since the last version | Add a bullet point under `#### Features`             |
| **F-002** | Multiple features were added in a single commit         | Include each as its own bullet                       |
| **F-003** | A single feature spans multiple commits                 | Consolidate into one bullet with a clear description |
| **F-004** | Change is internal-only or refactor                     | Exclude unless it visibly affects end-user behavior  |

**Examples of included changes**:

* New UI components
* New articles, pages, demos, or interactive features
* New navigation links, flags, settings, or interactivity

---

## 🪠 Fixes to Known Issues Derivation

Codex must refer to the `/known-issues/` page history and detect:

1. **Any items that changed status**
2. **Any new issues that were created and immediately resolved**
3. **Any entries removed from the known issues list**

| Rule ID                                                          | Condition                                               | Target Action                       |
| ---------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------- |
| **K-001**                                                        | A known issue changed status to `Resolved`              | Add to `#### Fixes to Known Issues` |
| **K-002**                                                        | A known issue changed from `Open` to `In Progress` only | Do not include in changelog         |
| **K-003**                                                        | No known issue status has changed                       | Add “- None.” to the section        |
| **K-004**                                                        | Include hyperlink to known issue file                   | Use this format:                    |
| `([#00002](../known-issues/2025/07/00002.md))` after description |                                                         |                                     |

Known issue statuses to track:

* `Open`
* `In Progress`
* `Resolved`
* `Won’t Fix`

---

## 📅 Pending Version Section

When creating or updating `[Pending Version]`, the section heading must be:

```markdown
## [Pending Version] – Updated: YYYY-MM-DD
```

* Always use ISO format for dates
* Only update the date when adding new entries
* Do not assign a version number or release date

---

## 🗒️ Version Finalization

When a release is assigned and tagged (`vX.Y.Z`):

| Rule ID   | Trigger                          | Target Action                                                             |
| --------- | -------------------------------- | ------------------------------------------------------------------------- |
| **V-001** | `[Pending Version]` exists       | Move content into a new finalized section titled `## vX.Y.Z – YYYY-MM-DD` |
| **V-002** | `[Pending Version]` is emptied   | Remove the pending section entirely                                       |
| **V-003** | New features emerge post-release | Create a fresh `[Pending Version]` section with updated date              |

---

## 🔎 Exclusion Criteria

Exclude any changes that:

* Modify only test files or documentation
* Are formatting-only or whitespace-only diffs
* Contain keywords like `refactor`, `cleanup`, `style`, `merge branch`
* Modify infrastructure, build scripts, or config with no user-visible effect

---

## 🌍 Language & Formatting

* Use **plain language** for all entries
* Bullet points must start with `- `
* Capitalize feature and article names
* Emphasize key terms with `**bold**` where appropriate
* Avoid technical jargon unless it improves clarity

---

## 📌 Notes

* Version numbers must follow `vX.Y.Z` SemVer format
* Changelog content must be understandable by non-developers
* Do not speculate or invent features based on file names alone
* Features are derived **from code comparison**, not commit count

