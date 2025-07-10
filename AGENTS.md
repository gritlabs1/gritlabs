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
  Defines **localized LLM prompt behaviors** that apply only within that directory (e.g., `known_issues/AGENTS.md`).

---

## Execution Rules

An LLM working in this repo should:

* Read the root `AGENTS.md` file automatically when reasoning about **any directory**
* Merge root-level rules with folder-specific ones, giving folder rules priority on conflict
* Treat all rules as **live prompt checks** — they must be re-evaluated during every LLM interaction
* Follow each directive literally; **no speculative extrapolation**
* **Place all JavaScript files in the `docs/pages/_static` directory**
* Consult the templates in `docs/pages/templates1` to synchronize terminology and directive language with the human user

---

## 📋 Prompt Rules Summary

### README Synchronization Rules

| Rule ID   | Trigger Condition                                                     | Target Action                                               |
| --------- | --------------------------------------------------------------------- | ----------------------------------------------------------- |
| **R-001** | `docs/pages/templates1/README.md` differs from `docs/pages/index.md`  | Overwrite `index.md` to match `templates1/README.md`.       |
| **R-002** | `docs/pages/templates1/README.md` differs from root-level `README.md` | Overwrite root `README.md` to match `templates1/README.md`. |

---

### Action Schema Versioning Rules

* Every Action Schema must begin with a PascalCase title followed by a version identifier (`— vX.Y`).
* Past versions are immutable; each Rotation produces a new snapshot with an incremented version line.
* Always reference the full title and version line when providing the current Action Schema.

---

## Notes

* Do not include human workflow tracking in this file.
* These rules apply universally and should run on every prompt.
