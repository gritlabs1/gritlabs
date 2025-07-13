# The Fragile Genius of LLMs

---

### Introduction: The Paradox of LLMs

LLMs are among the most powerful tools in today’s digital toolkit. They translate languages, write essays, summarize books, brainstorm marketing ideas, generate code—and yes, analyze bank statements. But they come with a fundamental flaw that often goes under-discussed: **inconsistent accuracy**. When it comes to deterministic tasks, like computing total balances from years of financial data or categorizing expenses, LLMs can be surprisingly effective—**until they aren't.**

---

### Use Case 1: Uploading Years of Bank Records

Let’s say you feed an LLM several years' worth of bank transactions in tabular format. You ask it: *“What’s my total net inflow or current balance?”*

On a good day, it will:
- Correctly parse the table,
- Distinguish credits from debits,
- Exclude fees or non-cash entries,
- And return an accurate total.

But ask again—maybe after tweaking the prompt slightly, or without changing it at all—and you might get a different number. Why?

Because LLMs are **stochastic by design**. Unlike spreadsheets or Python scripts, which are built for reproducibility and verifiability, LLMs are trained to be *plausible*, not always precise.

---

### Use Case 2: Categorizing Expenses

Expense categorization plays more to an LLM's strengths:
- Understanding contextual nuances of vendors and descriptions.
- Learning your custom category labels from a few examples.
- Providing natural-language rationales for classification.

In this domain, LLMs often outperform traditional rules-based systems.

**But the moment you combine classification + aggregation, the cracks show again:**
- Totals for the same category may vary across runs.
- Hidden errors (like double-counting, missed rows, incorrect joins) might be introduced without explanation.
- Even worse: you might not realize it's wrong until much later, because the answers still *look* good.

---

### The Achilles' Heel: Auditing and Verifiability

If you ask: *“Why did you get this number?”* or *“Which rows did you include in this category?”*—you may get a nice-sounding answer, but not a verifiable trace.

This is the *non-determinism problem*: unlike Excel or SQL, you can’t reliably **audit** the LLM’s process. There’s no call stack. No function trace. Just the illusion of logic.

You’re left wondering:
- Was the error in classification?
- In aggregation?
- Or was the prompt just misunderstood?

You may need to re-run the task multiple times, check results manually, or add redundant layers of verification—ironically defeating the productivity boost you sought.

---

### Stability vs. Stochasticity: The Human Need for Certainty

Humans don’t just prefer stability—we *depend* on it. Our decisions, our predictions, and our institutions are built on unshakable foundations:

- The sun rises in the east.

- 1 + 1 = 2.

- 87 days from now is a deterministic date on the calendar.

These are *axioms*.

And in accounting and finance, we extend this same demand for certainty. Auditing is rooted in **immutability**: source documents, ledgers, balance sheets, and receipts that can be independently verified. They’re not subjective, probabilistic, or interpretive.

But LLMs are the opposite. They’re **black boxes** trained on probabilistic reasoning, not axiomatic logic. You can’t peek inside and trace the steps like you can with a spreadsheet. You can’t always know why they answered one way or another.

This creates an existential tension: **LLMs simulate understanding**, but financial auditing depends on *provable truth*.

When it comes to tax reports, compliance audits, investor statements, or fraud detection—"I think the model got it right this time" isn’t good enough. What matters is: **can it get it right every time, and prove how?**

---

### Where We Go From Here

To responsibly deploy LLMs in data-sensitive contexts, we need:

1. **Deterministic wrappers**: Tools like LangChain, Guardrails, or DSPy that constrain generation pathways or enforce schemas.
2. **Hybrid pipelines**: Use LLMs for classification or reasoning, and hand off the aggregation to traditional code or spreadsheet engines.
3. **Transparent logs**: Capturing and storing intermediate steps for every inference run.
4. **Human-in-the-loop verification**: Especially in high-risk settings.

---

### Conclusion: Amazing… with a Caveat

LLMs are miraculous, but not magical. Their strength lies in reasoning, language, and pattern recognition—not numerical accuracy or repeatability.

Until they become **auditable** and **reliable at scale**, they’re best used in partnership with deterministic systems—not as replacements.

Because in the end, a black box can never be an audit trail.

