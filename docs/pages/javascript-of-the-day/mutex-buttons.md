# Mutex Buttons App

### Try It Now

To test the **Mutex Buttons App** yourself and see the functionality in action, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Mutex Buttons App</button>

<!-- Modal -->
<div id="mutex_buttonsModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="../../static/apps/mutex-buttons/mutex-buttons.html" title="Mutex Buttons App"></iframe>
  </div>
</div>

### Overview

The **Mutex Buttons App** is a lightweight web interface that mimics a small control panel. A power button enables or disables the four input buttons, and the app remembers your selection using the browser's `localStorage`.

### Features

- **Power Toggle:** Disables or enables the button panel.
- **Mutually Exclusive Buttons:** HDMI, VGA, HDMI Audio, and 1/8" Audio—with only one active at a time.
- **Status Message:** Clearly shows the current selection or that the panel is off.
- **Persistent State:** Remembers power state and selected button across reloads.

### Purpose

Demonstrates Codex's ability to generate small, stateful web applications with client-side storage and interactive UI.

### How It Works

1. **Powering On/Off:** Click the Power button to toggle the panel. When off, all buttons are disabled.
2. **Selecting Inputs:** With power on, choose any button to activate it. Selecting a new one deselects the previous.
3. **State Persistence:** Both power state and active selection are saved in `localStorage` and restored on page load.

<script>
// Modal behavior (same as landing page)
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("mutex_buttonsModal");
  const openBtn = document.getElementById("openModalButton");
  const closeBtn = document.getElementById("closeModal");
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
</script>

<style>
/* Use the same styles as defined for the landing page modal and button, adjusting the modal ID selector accordingly. */
#mutex_buttonsModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
#modalContent {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 90%;
  max-width: 600px;
}
#modalContent iframe {
  width: 100%;
  height: 70vh;
  border: none;
}
#closeModal {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
}
.cta-btn {
  background-color: #ff9800;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
.cta-btn:hover {
  background-color: #e68900;
}
</style>


* * *
