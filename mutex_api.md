# Prompt for API Agent: Add Mutex Module

You are tasked with extending an existing .NET WebAPI so that it can store and retrieve data produced by the **Mutex Buttons** app.
Follow these directives when writing the API implementation:

## 1. Database

1. Create a new table named `MutexEvents`.
2. Schema:
   - `Id` (int, primary key, identity)
   - `Timestamp` (datetime, not null)
   - `PanelOn` (bit, not null)
   - `SelectedInput` (nvarchar(50), nullable)
3. Each time a user toggles power or chooses a button, insert a row with the new state.

## 2. API Routes

Define the following routes under a `Mutex` controller namespace.

| Verb | Route | Purpose |
|-----|-------|---------|
| GET | `/api/mutex/state` | Returns the most recent `MutexEvents` record. |
| GET | `/api/mutex/history` | Returns all events ordered by newest first. |
| POST | `/api/mutex/state` | Accepts `{ panelOn: bool, selectedInput: string }` and inserts a new record. |

The POST request should be idempotent for unchanged state. Use dependency injection for the data context.

## 3. Module Integration

* Add a service class `MutexService` with methods to read the current state and append events.
* Register the service and controller in the existing WebAPI project.
* Ensure cross-origin requests are allowed for the Angular frontend.

---
This concludes the directives for the API Agent.
