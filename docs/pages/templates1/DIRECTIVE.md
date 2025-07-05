# Directive

## Instructions

You are performing a **Rotation**.

You will be given:

* An **Action Schema** (PascalCase title + version line).
* One or more **Action Notes** and/or **Action Triggers**.
* *(Optional)* A `GOALS.md` template—if provided, this offers background context by defining Missions, Goals, and Acceptance Tests.

  * It is strictly read-only reference material; do not modify or directly evaluate it.
  * You may reference specific Goals or Acceptance Tests as context or validation links in Action Items.
  * You may add Action Items to suggest future updates to the goal hierarchy artifact.
* *(Optional)* A `DEPENDENCY_MODELING.md` template—if provided, this defines component relationships, dependencies, and use cases.

  * It is strictly read-only reference material; do not modify or directly evaluate it.
  * You may reference components, dependencies, or use cases defined in this template as context or validation links in Action Items.
  * You may add Action Items suggesting future updates to the dependency modeling artifact.

---

### Your Job

1. **Read** all provided Action Notes and Triggers.

2. **Update** the Action Schema:

   * Add new Action Items at the appropriate position.
   * Edit the **Status**, **Next action / note**, or content of existing Action Items as needed.
   * Mark items **Done ✅** if explicitly validated by a Trigger.
   * Mark items **Pending** if newly blocked or awaiting resolution.

3. **Uphold every rule** in the Action Schema specification:

   * Task descriptions ≤ 1 short sentence.
   * Status values exactly as defined.
   * **Next action / note** ≤ 20 words.
   * Include at least 1 Test-case / validation check per Action Item.
   * Use a valid **Tag** from the defined set for every item.

4. Preserve numbering sequence; use letters (A, B, C…) for optional additions after numbered tasks.

5. **Do not overwrite past Action Schemas.** Each Rotation must produce a new, separately versioned schema.

   > \:memo: **NOTE:** Because past Action Schemas must not be overwritten, managing Action Items using Canvas is strictly prohibited.

6. Return **only** the updated Action Schema table (with updated title/version line)—no narrative explanations or commentary.

---

### 🧾 Example

```markdown
MyActionList — v0.3

| Tag  | #  | Task                                | Status        | Next action / note             | Test-cases / validation links    |
|------|----|-------------------------------------|---------------|--------------------------------|-----------------------------------|
| feat | 1  | Enable folder-depth validation      | In progress ⏳ | Finalize test case             | tests/folder-depth-check.py      |
| docs | 2  | Write GOALS.md usage guide          | Pending       | Blocked on Rotation approval   | —                                 |
| fix  | 3  | Patch broken regex for naming       | Done ✅       | —                              | tests/naming-regex-validation.py |
| meta | A  | Optional: Rename COMPONENTS.md to GOALS.md | Done ✅       | Completed by Rotation v0.2     | commit-link-123abc               |
```

> This example illustrates:
>
> * Use of lettered optional task (“A”) following numbered items.
> * Multiple tags (`feat`, `docs`, `fix`, `meta`).
> * Correct use of all defined Status values.
> * Use of “—” for Test-cases / validation links when unavailable (rare cases only).
> * Snapshot version (`MyActionList — v0.3`) indicating a proper Rotation.
