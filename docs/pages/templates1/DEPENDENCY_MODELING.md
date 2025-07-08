# Dependency Modeling

---

## 📌 Overview

Grit Labs uses explicit **Dependency Modeling** to structure relationships between reusable **Components**, aligning closely with specific goals or tasks. The level of detail and what to include in the modeling are intentionally selective, emphasizing clarity and relevance rather than exhaustive coverage.

---

## 📐 Core Concepts

#### Component

* Reusable building block.
* May represent a physical object, concept, or functional unit.

#### Dependency

* Represents a relationship where understanding or implementing a dependent component requires another component (its dependency).

#### Relationships

* Always directional "depends-on" relationships.
* Explicitly defined; no implied hierarchies.

---

## 📚 Database Structure

#### Component Catalog

* Stores all unique Components.
* No self-references permitted.

#### Component Dependencies

* Records explicit dependency relationships between components, using two foreign-key columns:

  * `DependentComponentId` (formerly `ParentComponentId`)
  * `DependencyComponentId` (formerly `ChildComponentId`)
* Each row says “*this* component depends on *that* component.”

---

## 🔗 Entity Relationship Overview

<div class="mermaid" style="text-align: center; ">
erDiagram
    ComponentCatalog ||--o{ ComponentDependencies : "DependentComponentId"
    ComponentCatalog ||--o{ ComponentDependencies : "DependencyComponentId"
    ComponentDependencies ||--o{ EntryPoints : "ComponentDependenciesId"
    EntryPoints ||--o{ UseCases : "EntryPointsId"
    UseCases ||--o{ ApplicationCases : "UseCaseId"
</div>

---

## 🎯 Entry Points

* Only select dependencies act as entry points.
* Entry points link directly to Use Cases.

---

## 🚩 Use Cases

* Describe what a "Product" type Component does.
* Associated explicitly with entry-point components.
* Provide justification for the existence of Components.

---

## ✅ Application Cases

* Practical demonstrations of Use Cases.
* Include clearly defined problems and corresponding solutions.
* Serve as validation examples.

---

## 📦 Component Dependency Types

Each dependency recorded in `ComponentDependencies` has an explicitly defined dependency type:

#### White-box

* Complete knowledge of internal workings (recursive dependencies).
* Fully documented dependency relationships.
* Explicitly understood dependent relationships.

#### Black-box

* Zero knowledge of internal component workings.
* Dependency relationship documented.
* No dependent relationships documented.

#### Product

* Partial knowledge of internal workings, specific to supporting particular Use Cases.
* Dependency relationships fully documented.
* Dependent relationships exist only within the defined Use Case scope.

---

## 🌲 Dependency Trees and Reusability

* Components form explicit dependency trees—logical hierarchies represented in the `ComponentDependencies` table.
* The `ComponentCatalog` centralizes each component definition, allowing the same component to appear in many trees.
* Trees live entirely in `ComponentDependencies`; no in-code hierarchy or hard-wired containment.
* When you update a component in `ComponentCatalog`, every logical tree that includes it is updated automatically.
* **Terminology:** we avoid “parent”/“child” (which imply ownership) and instead say:

  * **Dependent component**: the component that relies on another
  * **Dependency component**: the component being relied upon

---

## 🔄 Alignment with Goals and Actions

* Components and dependencies explicitly align with goals (`GOALS.md`) and Action Items (`ACTION_SCHEMA.md`).
* Dependency modeling evolves iteratively through Rotations (`DIRECTIVE.md`).
* Validation via Use Cases and Application Cases directly supports Action Item completion and goal verification.
