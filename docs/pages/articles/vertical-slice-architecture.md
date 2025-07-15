# 🧩 Vertical Slice Architecture

**Vertical Slice Architecture** is an alternative to traditional layered architectures, where features are developed as **end-to-end slices** that cut through all architectural layers. Instead of organizing code by technical concerns (like "Controllers", "Services", or "Repositories"), vertical slicing organizes the system by **business features** or **use cases**.

Much of the popularity of Vertical Slice Architecture stems from the work of **Jimmy Bogard**, particularly through his blog posts, conference talks, and his open-source library [MediatR](https://github.com/jbogard/MediatR). His approach to structuring apps around features — not layers — has shaped how many modern .NET applications are built today.

This guide explores what vertical slice architecture is, how it differs from conventional architectures, and how to implement it effectively.

---

## 🗂️ 1. What is Vertical Slice Architecture?

In vertical slice architecture, each **feature** (or use case) is treated as a self-contained unit with all the code it needs to function:

* API endpoint or UI handler
* Input validation
* Application logic
* Domain interaction
* Persistence and response shaping

> Each slice is an independent "vertical" through the stack, from input to persistence.

#### Key Principle:

> Organize code by **behavior**, not by technical roles.

---

## 🆚 2. Vertical Slice vs Layered Architecture

| Aspect       | Layered Architecture                                    | Vertical Slice Architecture    |
| ------------ | ------------------------------------------------------- | ------------------------------ |
| Organization | By technical concerns (e.g., service layer, controller) | By feature or use case         |
| Coupling     | High coupling between layers                            | Low coupling between slices    |
| Reusability  | Code reuse via shared layers                            | Favoring focused, scoped reuse |
| Testing      | Requires heavy mocking                                  | Easy to test feature slices    |
| Scalability  | Can get bloated as app grows                            | Scales by adding slices        |

> 💡 Vertical slice architecture is often simpler, cleaner, and more focused for small to medium systems or individual services.

---

## 📦 3. Anatomy of a Vertical Slice

A typical vertical slice includes:

* **Request Handler**: Entry point (e.g., controller or mediator handler)
* **Request DTO / Command**: Incoming data
* **Validator**: Optional input validation logic
* **Domain Interaction**: Business logic, aggregates, domain services
* **Persistence**: Data retrieval or saving
* **Response DTO**: Outgoing response model

> Tools like MediatR (in .NET) or command/query dispatchers make vertical slices easier to organize.

---

## ✨ 4. Benefits of Vertical Slice Architecture

* **Separation by Behavior**: Improves focus and navigability
* **Reduced Coupling**: Each slice owns its logic and dependencies
* **Improved Testability**: Can test full behavior without infrastructure setup
* **Faster Onboarding**: Easier for new devs to follow a single feature
* **Adaptability**: Slices can evolve independently

---

## ❌ 5. Drawbacks and Trade-offs

* **Perceived Duplication**: Shared logic may be repeated across slices
* **Scaling Can Get Messy**: Without conventions, project can become disorganized
* **Harder to Enforce Cross-cutting Concerns**: Logging, caching, and metrics must be handled carefully
* **Risk of Feature Silos**: Teams may duplicate patterns inconsistently

> 🧠 Good conventions and tooling can minimize these drawbacks.

---

## 🛠️ 6. Implementation Tips

1. **Group by feature folder**, not by layer

   * e.g., `Features/Checkout/PlaceOrder.cs`, `Features/User/RegisterUser.cs`
2. **Use CQRS** to separate commands (writes) and queries (reads)
3. **Favor composition** over inheritance or shared base classes
4. **Inject only what you need** — keep slice dependencies minimal
5. **Treat each slice as independently testable**
6. **Build cross-cutting concerns as decorators or middleware**

---

## 📌 7. When to Use Vertical Slice Architecture

Vertical slice architecture shines in:

* **Microservices or modular monoliths**
* **Greenfield projects**
* **Feature-driven teams**
* **CQRS-based systems**

Avoid using it if:

* You have a highly shared domain model and complex inter-feature logic
* You're heavily reliant on legacy frameworks expecting layered conventions

---

## 🧠 Final Thoughts

Vertical Slice Architecture helps you build **maintainable, scalable, and testable applications** by aligning your codebase around **features**, not layers. It works especially well for modern systems where **domain logic is distributed** and the cost of over-engineering layered boundaries outweighs the benefits.

> “Thin slices deliver full value.” — Vertical architecture isn’t just efficient, it’s aligned with how users see your app.

