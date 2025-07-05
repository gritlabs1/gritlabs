# Goals

---

## 🎯 Goal-Oriented Structure Overview

```plaintext
[Mission]
   └─ 1..* [Goals]
           └─ 0..* [Sub-goals (recursive)]
                    └─ 1..* [Acceptance Tests]
```

### Structure Definitions

* **Mission**: Top-level objective that defines overall purpose, including a clear mission statement.
* **Goals**: Intermediate, clearly defined objectives derived from the mission.
* **Sub-goals**: Goals broken down recursively until actionable and verifiable.
* **Acceptance Tests**: Concrete validation artifacts demonstrating sub-goal fulfillment.

---

## 🚩 Defining Missions and Goals

* A **mission** must include a concise **mission statement**.
* Each **goal/sub-goal** must contain a clear, actionable **goal statement**.

**Example YAML:**

```yaml
mission:
  id: articles-by-grit-labs
  statement: Deliver structured, collaborative, and LLM-compatible documentation.
  goals:
    - id: folder-validation
      statement: Ensure folder structures validate automatically.
      status: in-progress
      shouldWeDoThisScore: 9
      acceptanceTests:
        - tests/folder-depth-check.py
      subGoals:
        - id: naming-conventions
          statement: Ensure folders adhere to naming regex.
          status: complete
          acceptanceTests:
            - tests/naming-regex-validation.py
```

---

## 📌 Goal Status Definitions

| Status        | Meaning                                               |
| ------------- | ----------------------------------------------------- |
| `proposed`    | Defined but not started.                              |
| `in-progress` | Actively being refined or implemented.                |
| `complete`    | Fully implemented and validated via acceptance tests. |
| `dropped`     | Explicitly discontinued and no longer pursued.        |

---

## 🔗 Defining Dependencies

Goals may explicitly declare dependencies on other goals:

**Example YAML:**

```yaml
goals:
  - id: oauth-integration
    statement: Allow users to authenticate via OAuth.
    dependencies:
      - user-authentication-basic
      - api-endpoints-defined
```

---

## 📐 Goal Decomposition Logic

Goals clearly specify their decomposition logic:

* **AND**: Requires completion of all sub-goals.
* **OR**: Requires completion of any sub-goal.

**Example YAML:**

```yaml
goals:
  - id: folder-validation
    type: AND
    subGoals:
      - id: naming-conventions
      - id: folder-depth-rules
```

---

## 🔁 Versioning & Rotations

* Goals evolve iteratively through **rotations**.
* Each versioned snapshot explicitly captures the current state of goals and acceptance tests.

---

## 📦 Acceptance Tests

* Clearly demonstrate goal completion.
* Every actionable (leaf-level) sub-goal requires at least one acceptance test.

---

## 🗃️ Goal Summary Table *(Optional)*

| Goal                      | Depends On              | Status      |
| ------------------------- | ----------------------- | ----------- |
| OAuth Authentication      | User Login, API Defined | proposed    |
| Folder Naming Conventions | —                       | complete    |
| Folder Validation         | Folder Naming, Depth    | in-progress |

---

## 🧠 Evolution Phases of Goals

| Phase        | Description                                |
| ------------ | ------------------------------------------ |
| Initial      | Mission defined; goals not yet detailed.   |
| Mid-progress | Goals and sub-goals actively refined.      |
| Final        | Goals fully defined with acceptance tests. |
| Complete     | Goals completely validated and documented. |
