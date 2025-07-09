# Terminology — Grit Labs

_A curated vocabulary that lets humans **and** language models interpret every Grit Labs template and directive the same way._

* * *

## 🧭 Orientation Quick‑Reference

| Directive / Artifact | Primary Role | Plain‑Language Purpose |
| --- | --- | --- |
| **Grit Labs Action Schema** | Defines the table | Specifies how Action Items are formatted, versioned, and validated. |
| **Grit Labs Terminology** | Defines the language | Keeps meanings stable so schemas & directives stay interpretable. |
| **Rotation Directive** | How to use the table | Instructs the LLM to process Notes & Triggers and emit a new Action Schema snapshot. |
| **GOALS.md** | Traceable reasoning | Provides hierarchical Missions → Goals → Acceptance Tests that Action Items can reference. |
| **DEPENDENCY_MODELING.md** | Structural context | Maps reusable Components and their explicit dependencies to support Goals & Actions. |
| **Template Upload Mode** | Sets session intent | 	Sets intent for how templates should be interpreted: `Shared Language` or `Execution`. <br> `Shared Language` (default) = align terminology only;<br />`Execution` = apply directives and perform Rotations.  |

* * *

## 📘 Core Terms (A → Z)

| Term | Definition |
| --- | --- |
| **Action Item** | A discrete task to be completed. _(Example:_ “Request transcript delivery confirmation.”_)_ |
| **Action Note** | New information (email, chat, news, etc.) that may change sequencing or validation of Action Items. |
| **Action Trigger** | A specific event/input (e.g., a support‑ticket closure) that forces an Action Schema update. |
| **AGENTS.md** | A Markdown file containing one or more **LLM-only prompt-executable directives**. Each `AGENTS.md` file defines automatic behaviors for language models operating within a given directory scope. These directives are always executed by LLMs, not humans. Root-level `AGENTS.md` files govern global rules; folder-level files govern local behavior. |
| **Backlog** | All Action Items **not** marked **Done ✅**. No separate backlog artifact exists. |
| **Component** | A reusable building block recorded in the **Component Catalog** (e.g., library, service, concept). |
| **Dependency** | A directional “depends‑on” relationship recorded in **Component Dependencies**. |
| **Dependency Type** | One of **White‑box**, **Black‑box**, or **Product**, defining how much internal knowledge is documented. |
| **Directive** | A **directive** is a structured instruction or behavioral guideline that governs how an AI agent or system component should act, respond, or interact. Directives encode role definitions, constraints, reasoning patterns, or communication protocols, and are used to ensure consistency, safety, and intentionality in LLM-driven workflows. <br /><br />Directives may be stored in various forms, including inline prompts, file-embedded tags, or dedicated `AGENTS.md` files (LLM-only). Not all directives require an `AGENTS.md`.|
| **Entry Point** | A dependency designated as a starting node that links to one or more **Use Cases**. |
| **Fail Until It Works** | Mind‑set of iterating rapidly—accepting early failure and leveraging LLM creativity until validity emerges. |
| **Goal / Sub‑goal** | An objective defined in `GOALS.md`, recursively decomposed until it is actionable and testable. |
| **LLM Precision Expectation** | Reminder: LLM output may contain errors; treat versions/outputs as approximations, validate critical details manually. |
| **Mission** | The top‑level purpose statement that all Goals roll up to. |
| **Optional Task** | A non‑blocking Action Item that can enhance a Rotation but is not strictly required. |
| **Problem Space** | The portion of reality relevant, visible, and solvable **now**. Plans beyond this horizon are ignored until re‑validated. |
| **Rotation** | The LLM‑driven loop that reviews Notes & Triggers, (re)generates the Action Schema, and increments its version. |
| **Snapshot** | Any immutable, versioned artifact (Action Schema, GOALS.md version, etc.) produced during a Rotation. |
| **Status** | Allowed progress states: **Not started**, **In progress ⏳**, **Done ✅**, **Pending**, **Optional**. |
| **Templates** | A **template** is a structured artifact that encodes the rules, language, and expected behaviors for both humans and language models within the Grit Labs system. Templates include prescriptive formats (such as action schemas), shared vocabularies (terminology), and behavioral protocols (directives), enabling aligned execution, traceable reasoning, and reproducible decision-making. <br /><br />Templates may be human-authored, LLM-generated, or collaboratively maintained—and serve as versioned source-of-truth references for performing Rotations, tracking goals, managing dependencies, or updating actions. |
| **Test Case / Validation Check** | Concrete proof (file, URL, automated test) that an Action Item or Goal is complete. |
| **Use Case** | A description of what a **Product‑type Component** does; linked to an Entry Point in dependency modeling. |
| **Version Line** | The single‑line PascalCase title followed by “— vX.Y” that prefixes every Action Schema snapshot. |
| **We Only Know What We’re Doing Now** | Acceptance that only the next action is trusted; future plans are discarded unless re‑validated. |

* * *

## 🛠 Auxiliary Terms (A → Z)

| Term | Definition |
| --- | --- |
| **Application Case** | A practical demonstration that exercises a Use Case, showing problem → solution. |
| **Component Catalog** | Table (or DB) listing every unique Component. No self‑references allowed. |
| **Component Dependencies** | Table capturing explicit dependency rows among Components (directional). |
| **Conventional‑Commit Tag** | The `Tag` column value in the Action Schema (e.g., `feat`, `fix`, `docs`, `meta`). |
| **PascalCase** | Capitalize each word without spaces (e.g., `MyActionList`). Required in every Version Line. |

* * *

## 🔑 Guiding Principles (A → Z)

| Principle | Essence |
| --- | --- |
| **Human‑and‑LLM Parity** | Artifacts must be equally executable by humans and language models. |
| **Immutable History** | Never overwrite prior snapshots; every Rotation appends a new version. |
| **Present‑Focus Principle** | Prioritize solving the visible, current Problem Space; avoid speculative futures. |

* * *

