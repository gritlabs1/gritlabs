# Terminology — Grit Labs

_A curated vocabulary that lets humans **and** language models interpret every Grit Labs template and directive the same way._

* * *

## 🧭 Orientation Quick‑Reference

| Directive / Artifact | Primary Role | Plain‑Language Purpose |
| --- | --- | --- |
| **Grit Labs Action Schema** | Defines the table | Specifies how Action Items are formatted, versioned, and validated. |
| **Grit Labs Terminology** | Defines the language | Keeps meanings stable so schemas & directives stay interpretable. |
| **Rotation Directive** | How to use the table | Instructs the LLM to process Notes & Triggers and emit a new Action Schema snapshot. |
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
| **Fail Until It Works** | Mind‑set of iterating rapidly—accepting early failure and leveraging LLM creativity until validity emerges. |
| **Known Issues** | A curated list of significant, user‑reported or internally identified problems that warrant tracking. This does **not** represent all bugs — only issues important enough to monitor publicly or resolve deliberately. |
| **LLM Precision Expectation** | Reminder: LLM output may contain errors; treat versions/outputs as approximations, validate critical details manually. |
| **Notes** | The cumulative set of Action Notes gathered for context during a Rotation. |
| **Problem Space** | The portion of reality relevant, visible, and solvable **now**. Plans beyond this horizon are ignored until re‑validated. |
| **Rotation** | The LLM‑driven loop that reviews Notes & Triggers, (re)generates the Action Schema, and increments its version. |
| **Templates** | A **template** is a structured artifact that encodes the rules, language, and expected behaviors for both humans and language models within the Grit Labs system. Templates include prescriptive formats (such as action schemas), shared vocabularies (terminology), and behavioral protocols (directives), enabling aligned execution, traceable reasoning, and reproducible decision-making. <br /><br />Templates may be human-authored, LLM-generated, or collaboratively maintained—and serve as versioned source-of-truth references for performing Rotations, tracking goals, managing dependencies, or updating actions. |
| **Test Case / Validation Check** | Concrete proof (file, URL, automated test) that an Action Item or Goal is complete. |
| **Triggers** | The set of Action Triggers indicating events that drive updates or validations during a Rotation. |
| **We Only Know What We’re Doing Now** | Acceptance that only the next action is trusted; future plans are discarded unless re‑validated. |


## 🔑 Guiding Principles (A → Z)

| Principle | Essence |
| --- | --- |
| **Human‑and‑LLM Parity** | Artifacts must be equally executable by humans and language models. |
| **Immutable History** | Never overwrite prior snapshots; every Rotation appends a new version. |
| **Present‑Focus Principle** | Prioritize solving the visible, current Problem Space; avoid speculative futures. |

* * *

