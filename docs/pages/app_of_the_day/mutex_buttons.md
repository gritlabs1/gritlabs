# Mutex Buttons App

### Try It Now

To test the **Mutex Buttons App** yourself and see the functionality in action, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Mutex Buttons App</button>

<!-- Modal -->
<div id="mutex_buttonsModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="../../_static/apps/mutex_buttons/mutex_buttons.html" title="Mutex Buttons App"></iframe>
  </div>
</div>

### Overview

The **Mutex Buttons App** is a lightweight, interactive web application designed to help users manage content specific to its purpose. It persists data locally using the browser's `localStorage`, eliminating the need for a backend.

### Features

- **Add Items:** Input and save entries locally.
- **Mark Items as Completed:** Toggle the state of each entry.
- **Delete Items:** Remove entries permanently.
- **Persistent Storage:** Utilizes `localStorage` for data retention.

### Purpose

Demonstrates Codex's ability to generate complete, deployable web applications with client-side storage and minimal setup.

### How It Works

1. **Adding Items:** Enter text and click "Add"; the entry is saved to `localStorage`.
2. **Marking Completed:** Click the checkbox to toggle the completed state, which persists across reloads.
3. **Deleting Items:** Click the delete icon to remove the entry from the list and storage.

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
