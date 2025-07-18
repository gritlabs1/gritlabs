# AGENTS.md — Articles Agent Manifest

This file defines prompt-executable behaviors for the `articles/` directory.

---

## Scope

These rules apply only within the `articles/` folder. They govern navigation ordering for article entries in `docs/mkdocs.yml`.

---

## Execution Rules

An LLM managing the navigation menu must:

- Sort articles listed in `docs/mkdocs.yml` under the **Articles** section by commit date, newest first and oldest last.
- Ensure the article **The Fragile Genius of LLMs** remains the third item listed under the **Articles** section of `docs/mkdocs.yml`.
- Articles must not contain `<h3>` HTML heading tags. Replace any detected `<h3>` elements with `<h4>`.

---

## Notes

- Do not rename `articles/the_fragile_genius_of_llms.md`.
- Count menu entries from top to bottom when validating its position.
- Articles must display Unicode characters directly rather than using escape
  sequences. Ensure saved files use UTF-8 encoding so emoji and other symbols
  appear correctly.
