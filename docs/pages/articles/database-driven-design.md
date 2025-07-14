# 📊 A Database-Driven Design

While Domain-Driven Design (DDD) puts the business domain at the center of software modeling, **Database-Driven Design (DBDD)** flips the perspective: the structure and behavior of the application are **modeled around the database schema**. This approach is common in legacy systems, CRUD-heavy applications, and teams that prioritize data persistence and reporting.

This article explores what Database-Driven Design is, its benefits and drawbacks, key architectural patterns, when (and when not) to use it, and how it can coexist with Domain-Driven Design.

---

## 🤝 1. What is Database-Driven Design?

In Database-Driven Design, the **relational database schema** becomes the source of truth. Application logic is designed **around tables**, foreign key constraints, and SQL queries. Object models are usually generated or manually mapped to match the schema.

> In essence, the database comes first, and the application adapts to it.

---

## ✨ 2. Benefits

#### 2.1 Simpler for CRUD-heavy Applications

* For apps with heavy **Create, Read, Update, Delete** operations, DBDD allows quick iteration.
* Ideal for **admin panels**, **reporting tools**, and **data dashboards**.

#### 2.2 Easier to Onboard

* Developers and analysts can often understand the system by reading the schema.
* Aligns well with SQL-centric teams.

#### 2.3 Strong Data Integrity

* Heavily uses **normalized schemas**, **foreign keys**, and **stored procedures** to enforce rules.
* Validations often live in the database.

#### 2.4 Better for Data Warehousing and Reporting

* Schema-first designs are easier to integrate with BI tools, ETL pipelines, and reporting engines.

---

## ⚠️ 3. Drawbacks 

#### 3.1 Rigid and Inflexible

* Application changes often require **database migrations**.
* Schema changes can cause cascading changes in code, making refactoring painful.

#### 3.2 Anemic Domain Model

* Business logic ends up in service layers or stored procedures, not the model itself.
* Leads to **procedural code** with poor encapsulation.

#### 3.3 Coupling to Persistence

* Objects are tightly bound to table structures, making **testing and abstraction difficult**.
* Violates the **Separation of Concerns** principle.

#### 3.4 Poor Fit for Complex Business Logic

* Modeling aggregates, business rules, or workflows around tables leads to scattered logic.
* Hard to implement concepts like **ubiquitous language** or **bounded contexts**.

---

## ⚙️ 4. Key Patterns 

#### 4.1 Table-Centric Modeling

* Tables map directly to classes or structs.
* Foreign keys become object references.

#### 4.2 Stored Procedures for Logic

* Business rules and workflows are encoded into SQL stored procedures.
* Reduces duplication, but makes testing and version control harder.

#### 4.3 ORM-First Development

* Tools like Hibernate, EF Core, or Sequelize are used to auto-generate models.
* Migrations often driven by schema diffs.

#### 4.4 Repository as Table Wrapper

* Repositories act more like **table access utilities**, with minimal domain understanding.
* Methods like `findAll()`, `save()`, and `deleteById()` dominate.

---

## 📝 5. When to Use Database-Driven Design

DBDD is not inherently bad — it shines in certain contexts:

* **Data-centric applications**: Admin dashboards, reporting systems, CMSs
* **Simple CRUD apps**: Systems with little to no business logic
* **Legacy environments**: Where the schema already exists and can’t change easily
* **Tight SQL workflows**: Apps that rely heavily on performant queries or direct BI consumption

> ✉️ Tip: In reporting or warehouse-focused systems, the schema *is* the domain.

---

## ❌ 6. When NOT to Use DBDD

Avoid when:

* You're modeling **complex business processes**, decisions, or rules
* You want **encapsulated domain models** with behavior
* Your system will evolve rapidly and needs **loose coupling** between layers
* You're planning for **microservices** or **modular architectures**

---

## 🔧 7. Transitioning to Domain-Centric Thinking

Many teams start with DBDD and eventually hit its limits. Signs it's time to evolve:

* Logic duplication across services
* Difficulty testing due to database-heavy coupling
* Increasing complexity in workflows and state transitions

> Start small: encapsulate logic into domain services, introduce aggregates, and isolate bounded contexts.

---

## ⚖️ 8. Can DBDD and DDD Be Used Together?

Yes — DBDD and DDD *can* coexist when each is used in its appropriate layer and role.

#### 8.1 Different Layers, Different Priorities

* Use **DDD** in the domain and application layers where business logic lives.
* Use **DBDD** in the infrastructure and persistence layers to model storage and reporting.

> Example: A rich `Order` aggregate can be stored using a normalized SQL schema, with translation layers in between.

#### 8.2 Gradual Adoption with Anti-Corruption Layers

* In legacy systems, wrap the database schema with an ACL so that domain logic evolves independently.
* This allows a progressive transition from DBDD to DDD.

#### 8.3 Combine for Read/Write Optimization (CQRS)

* Use **DDD** for commands and complex workflows.
* Use **DBDD** for simple read models or reporting views.

#### 8.4 Apply DBDD to Generic Subdomains

* Use DBDD in parts of the system like authentication, logging, or permissions.
* Focus DDD modeling efforts on the **Core Domain**.

> ⚠️ Avoid forcing domain models to map 1:1 to schemas. Let the domain model reflect business needs; let the database support it.

---

## 🤔 Final Thoughts

Database-Driven Design remains a useful and pragmatic approach for **data-centric systems**. It excels in predictable CRUD scenarios but struggles with **evolving business logic** and **domain complexity**.

It can coexist with Domain-Driven Design when applied intentionally. Use **DBDD for persistence and reporting** layers, and **DDD for modeling core business logic and workflows**.

> "If the schema is the source of truth, your app is only as smart as your tables."
