# AGENTS.md — Known Issues Agent Manifest

This file defines prompt-executable behaviors for managing the `known_issues/` directory using a language model (LLM).

---

## Scope

This file governs how issues are routed, listed, and migrated based on file content and metadata. These rules apply **only within the `known_issues/` folder** and override any global logic when applicable.

---

## Execution Rules

An LLM working in this folder should:

- Read this `AGENTS.md` before modifying `index.md`, `archived_known_issues.md`, or issue detail files
- Treat all rules as **live prompt checks**, not memory
- Enforce formatting consistency with Markdown tables and filenames
- Use 5-digit padded issue IDs (e.g., `00042`) in all listings and links
- Keep issue tables on both pages sorted by descending ID

---

## 📋 Prompt Rules Summary

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

- Do not modify the file paths of issue detail pages — only update listings.
- All issue IDs must remain 5-digit padded and chronologically sortable.
