# Prompt for UI Agent: Mutex Buttons in Angular

Build a new Angular frontend that faithfully reproduces the **Mutex Buttons** app currently found in the `JavaScript of the Day` section. The layout, button labels, and power toggle behavior must remain the same, but the app should be styled using Angular components to look more polished.

## 1. Preserve Existing Behaviors

- Power button toggles the entire button panel on and off.
- Four input buttons (HDMI, VGA, HDMI Audio, 1/8" Audio) act as a mutually exclusive set.
- Status text reflects whether the panel is off or which input is active.
- Use `localStorage` to keep `panelOn` and `selectedInput` so the state persists offline.

## 2. Integrate Real API

- Connect to the endpoints defined in `mutex_api.md`:
  - `GET /api/mutex/state`
  - `GET /api/mutex/history`
  - `POST /api/mutex/state`
- After each local state change, send a POST request to record the event.
- On app start, load the current state from the API and fall back to `localStorage` if unreachable.

## 3. Angular Structure

- Create a single module named `MutexModule` containing:
  - `MutexComponent` for the UI layout and interactions.
  - `MutexService` for HTTP calls and local storage sync.
- Template layout mirrors the existing HTML: a header with a power button, a two-column grid of input buttons, and a status paragraph beneath.
- Apply Angular styling (e.g., Angular Material or your own SCSS) for a cleaner look while keeping the button positions and modal-like container.

## 4. Additional Notes

- Ensure keyboard accessibility for the buttons.
- Handle API errors gracefully and continue using local storage when offline.

---
This concludes the directives for the UI Agent.
