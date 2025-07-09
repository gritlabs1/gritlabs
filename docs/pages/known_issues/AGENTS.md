# AGENTS.md — Known Issues Agent Manifest

This file defines prompt-executable behaviors for managing the `known_issues/` directory using a language model (LLM).

---

## Scope

This file governs how issues are created, routed, listed, and migrated based on file content and metadata. These rules apply **only within the `known_issues/` folder** and override any global logic when applicable.

---

## Execution Rules

An LLM working in this folder must:

- Read this `AGENTS.md` before modifying `index.md`, `archived_known_issues.md`, or any issue detail file (`YYYY/MM/NNNNN.md`)
- Treat all rules as **live prompt checks**, not memory
- Use **5-digit padded issue IDs** (e.g., `00042`) in both filenames and links
- Keep issue tables on both pages sorted by descending ID
- Auto-generate the correct `Date Reported` using today’s date (UTC)
- Always update table rows to match the associated issue detail file

---

## ✅ Status Types

Valid status values:

- `Open`
- `In Progress`
- `Resolved`
- `Won’t Fix`

No other status values may be used.

---

## 🆕 When Adding a New Issue

When a user says **“Add an issue”**, the LLM should:

1. Assign the next available **padded ID** (e.g., if `00042` is highest, assign `00043`)
2. Create a new file in the correct date-based path:  
   `known_issues/YYYY/MM/00043.md`  
   using today’s UTC date
3. Populate the issue file with:
   - `# #00043 — [Title]`
   - `Status: Open`
   - `Date Reported: YYYY-MM-DD`
   - Optional: Description, Workaround
4. Add a corresponding row to `index.md`, sorted by descending ID

---

## 📋 Prompt Rules Summary

Issue tables in both `index.md` and `archived_known_issues.md` must use this column order:

```markdown
| ID       | Title                          | Status      | Date Reported | Notes / Workaround |
|----------|--------------------------------|-------------|---------------|--------------------|
```

### Issue Table Synchronization

| Rule ID | Trigger Condition | Target Action |
|---------|-------------------|----------------|
| **K-001** | A table row in `index.md` does not match its corresponding file in `YYYY/MM/NNNNN.md` | Rewrite the table row to match the issue detail file. |

---

### Archive Migration

| Rule ID | Trigger Condition | Target Action |
|---------|-------------------|----------------|
| **K-002** | An issue in `index.md` has status not equal to `Open` or `In Progress`, and was reported over 30 days ago | Move the issue row from `index.md` to `archived_known_issues.md`. |

---

## Notes

- Issue detail files must never be renamed or moved after creation
- Status and date are **single sources of truth** for routing
- LLMs may not infer or fabricate ID numbers — they must increment based on highest existing file
