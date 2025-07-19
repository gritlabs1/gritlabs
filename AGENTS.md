# AGENTS.md — Root Agent Manifest

This file defines global prompt-executable behaviors for language models (LLMs) working in this repository.

---

## Purpose of AGENTS.md

An `AGENTS.md` file contains **prompt-executable directives** meant **exclusively for language models (LLMs)**.

* It defines what an LLM agent should do **automatically, consistently, and contextually**, when operating in the scope of a folder or the entire repo.
* It is not meant for human task-tracking.
* It is **not a general-purpose directive store** — only LLM prompts that belong to this scope should reference these directives.

---

## AGENTS.md Scope Hierarchy

* **Root-level `AGENTS.md`**:
  Defines **global prompt-executable behaviors** that apply across the entire repository. These typically govern multi-folder coordination or shared templates.

* **Folder-level `AGENTS.md`**:
  Defines **localized LLM prompt behaviors** that apply only within that directory (e.g., `known-issues/AGENTS.md`).

---

## Execution Rules

An LLM working in this repo should:

* Read the root `AGENTS.md` file automatically when reasoning about **any directory**
* Merge root-level rules with folder-specific ones, giving folder rules priority on conflict
* Treat all rules as **live prompt checks** — they must be re-evaluated during every LLM interaction
* Follow each directive literally; **no speculative extrapolation**
* **Place all JavaScript files in the `docs/pages/_static` directory**
* Consult the templates in `docs/pages/templates1` to synchronize terminology and directive language with the human user
* Keep article links out of the top-level navigation; list them within the "Articles" vertical menu in `docs/mkdocs.yml`.
* Sort articles in that menu by commit date, newest first, unless a folder-specific rule overrides the order.

---

## 📋 Prompt Rules Summary

### README Synchronization Rules

| Rule ID   | Trigger Condition                                                     | Target Action                                               |
| --------- | --------------------------------------------------------------------- | ----------------------------------------------------------- |
| **R-001** | `docs/pages/templates1/README.md` differs from `docs/pages/index.md`  | Overwrite `index.md` to match `templates1/README.md`.       |
| **R-002** | `docs/pages/templates1/README.md` differs from root-level `README.md` | Overwrite root `README.md` to match `templates1/README.md`. |

---

### MkDocs Ignored Folder Rule

| Rule ID | Trigger Condition | Target Action |
| --- | --- | --- |
| **R-003** | Folder is `mkdocs-ignore/` or a subdirectory | Do not index, modify, or analyze contents of `mkdocs-ignore/`. |
| **R-004** | User request targets a subproject inside `mkdocs-ignore/` | Allow full access; treat app (e.g., Angular/React) as a standalone unit with its own logic. |
| **R-005** | Folder is `_static/` | Do not rename, move, or delete. Reserved for MkDocs static assets and must retain exact name. |

> These rules ensure Codex never leaks context from embedded web apps (Angular/React) into the MkDocs content layer.  
> Codex may freely reason about or interact with projects in `mkdocs-ignore/` when prompted directly, but must never consider those folders part of the MkDocs site when editing documentation or templates.  
> Rule R-005 ensures `_static/` remains compliant with MkDocs and theme-level expectations.


---


### 🔤 Folder & File Naming Rules — v1.2

| Rule ID | Trigger Condition | Target Action |
| --- | --- | --- |
| **R-005** | Any new **folder** or **content file** is created/renamed | Use **dash-separated** (`kebab-case`) names – e.g., `getting-started/`, `api-docs.md`. |
| **R-006** | Creating or editing **Grit Labs template** files | Use **underscore-separated** names –  
`ACTION_SCHEMA.md`, `DIRECTIVE.md`, `DEPENDENCY_MODELING.md`, `TERMINOLOGY.md`. |
| **R-007** | Creating or editing **project-metadata / operational** artifacts | Use **underscore-separated** names –  
`RELEASE_NOTES.md`, `DEPLOYMENT_NOTES.md`, `LICENSE`. |
| **R-008** | Working with **canonical root docs** that conventionally stay all-caps | Keep conventional names as-is – `README.md`, `GOALS.md`. |
| **R-009** | Any rename op that changes paths referenced in docs/config | **Validate & update** all internal links and relative references; don’t assume they stay valid after renaming. |
| **R-010** | Encountering MkDocs **reserved folders** (e.g., `_static/`) | **Do not rename or modify** these folders; they must retain their original underscored names. |

---

### Action Schema Versioning Rules

* Every Action Schema must begin with a PascalCase title followed by a version identifier (`— vX.Y`).
* Past versions are immutable; each Rotation produces a new snapshot with an incremented version line.
* Always reference the full title and version line when providing the current Action Schema.

### Release Tag Conventions

* Release tags use the format `vX.Y.Z` (e.g., `v0.6.0`). Tags must reference the final commit of each release.

---

## Notes

* Do not include human workflow tracking in this file.
* These rules apply universally and should run on every prompt.
* 
test - ignore

