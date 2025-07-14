# 🌌 Domain-Driven Design

Domain-Driven Design (DDD) is more than just a collection of design patterns. It’s a mindset, a collaboration philosophy, and a set of architectural tools to model complex software around the **business domain**.

This guide covers the **core strategic and tactical patterns** you need to implement effective DDD architecture — from high-level team boundaries to low-level modeling decisions.

---

## 🚧 1. Strategic Building Blocks

Strategic DDD focuses on **organizational and architectural structure** — how to align software boundaries with business reality.

### 1.1 Bounded Contexts

A *bounded context* defines a **semantic boundary** within which a particular domain model applies. Different bounded contexts can use the same terms to mean different things.

**Why it matters**:

* Prevents model bloat and ambiguity
* Enables **autonomy** and **team ownership**
* Helps with modularization and scaling

> 💡 Example: The term “Order” might mean a customer purchase in the E-commerce context, but a stock trade in the Trading context.

---

### 1.2 Ubiquitous Language

Inside each bounded context, developers and domain experts **use the same terminology** — in conversation, code, and documentation.

**Why it matters**:

* Reduces misunderstandings
* Keeps the model aligned with business concepts
* Makes code self-explanatory

> 🧐 Tip: Refactor code to reflect evolving domain terms, not just technical optimizations.

---

### 1.3 Subdomains

Not all parts of the system are equally important.

* **Core Domain**: The differentiator. Where your competitive advantage lives.
* **Supporting Subdomains**: Necessary helpers, e.g., inventory or user management.
* **Generic Subdomains**: Commodity services like payment processing or authentication.

**Why it matters**:

* Helps **prioritize engineering effort**
* Guides decisions about in-house vs. third-party solutions

---

### 1.4 Context Mapping

Defines the **relationships** between different bounded contexts.

**Patterns** include:

* **Customer/Supplier**: One context depends on another’s interface
* **Conformist**: A downstream team must conform to an upstream model
* **Anti-Corruption Layer**: Protects a clean internal model from a polluted external one
* **Shared Kernel**: Shared parts of the model with explicit coordination

> 🧹 Tip: Context mapping is essential in microservices and multi-team orgs.

---

## ⚙️ 2. Tactical Design Patterns

Once you've defined your bounded contexts, DDD provides **tactical tools** to model the internals.

### 2.1 Entities

Objects with:

* A **distinct identity** (not just data)
* Lifecycle and state changes over time

> Example: A `User` has an `id`, can update email or status, and lives across system operations.

---

### 2.2 Value Objects

* **Immutable**
* No identity
* Defined by their value

> Example: `Money(currency, amount)` or `Address(street, city, zip)`
> If two value objects have the same data, they’re considered equal.

---

### 2.3 Aggregates and Aggregate Roots

Aggregates are **clusters of related entities and value objects** that are treated as a single unit of consistency.

* Only the **Aggregate Root** is accessible to the outside world.
* Invariants are enforced within the aggregate boundary.

> Example: An `Order` aggregate may contain `OrderLines`, but all updates go through `Order`.

---

### 2.4 Domain Services

Some domain logic doesn’t fit into a single entity or value object.

Domain services:

* Contain **pure domain logic**
* Are **stateless**
* Operate on domain entities

> Example: `CurrencyConverterService` that applies domain rules to convert prices.

---

### 2.5 Repositories

Repositories **abstract the persistence layer**, providing access to aggregates without leaking data storage concerns.

* Should return full aggregate roots
* Should use **domain terms** in their interface

> Example: `OrderRepository.findById(orderId)` — not `select * from orders where id = ?`.

---

### 2.6 Factories

Factories handle **complex creation logic** when constructors are insufficient.

* Ensure objects are created in valid states
* Useful for aggregates with multiple invariants

> Example: `OrderFactory.createWithInitialLineItems(...)`

---

### 2.7 Domain Events

Domain events **capture significant business occurrences**.

* Use **past-tense naming** (`OrderShipped`, `UserRegistered`)
* Decouple logic (e.g., send email when order ships)
* May trigger workflows in other bounded contexts

> 🔄 Events are central to eventual consistency and reactive systems.

---

## 📼 3. Architectural Implications

### 3.1 Layered Architecture

Typical layering in DDD:

* **Application Layer**: Orchestrates tasks, invokes domain logic
* **Domain Layer**: Core business logic — entities, services, aggregates
* **Infrastructure Layer**: Messaging, persistence, external systems

> 🔒 Keep domain logic independent of infrastructure. It should be testable in isolation.

---

### 3.2 Anti-Corruption Layers (ACL)

ACLs sit at the **boundary between contexts** to **translate models** and protect your internal domain from leaking in external constraints or inconsistencies.

> Think of them like **adapters or translators** between contexts.

---

### 3.3 Integration and Messaging

In modern systems (microservices, event-driven), DDD aligns well with asynchronous messaging:

* Bounded contexts can **emit domain events**
* Others **subscribe and react**, enabling eventual consistency
* Message brokers (e.g. Kafka, RabbitMQ) facilitate this interaction

---

## 🤔 Final Thoughts

Domain-Driven Design isn’t just about patterns — it’s about **collaborative modeling, clarity, and alignment** between business and code.

✅ Use **strategic DDD** to break complexity into manageable, modular, and team-aligned chunks.
✅ Use **tactical DDD** to model each context faithfully and maintainably.
✅ Architect your system with **separation of concerns**, **event-driven thinking**, and **language that reflects the domain**.

> “If you’re not modeling, you’re not doing DDD.” — Eric Evans
