# Kanban Board App

### Try It Now

To test the **Kanban Board App** yourself and see the functionality in action, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Kanban Board App</button>

<!-- Modal -->
<div id="kanban-boardModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="../../_static/apps/kanban-board/kanban-board.html" title="Kanban Board App"></iframe>
  </div>
</div>

### Overview

The **Kanban Board App** is a simple yet powerful task management tool that lets you organize work across three columns: **To Do**, **In Progress**, and **Done**. Tasks can be added quickly and dragged between columns as their status changes. All data is stored in the browser using `localStorage` so your board persists across sessions.

### Features

- **Add Tasks:** Enter a description and press **Add** to create a new task in the **To Do** column.
- **Drag and Drop:** Move tasks between columns to track progress.
- **Persistent Storage:** The board state is saved in `localStorage`.

### Purpose

Demonstrates Codex's ability to build a more sophisticated application with drag-and-drop interaction and persistent client-side data.

### How It Works

1. **Create Tasks:** Type a task description and click **Add**. The task appears in the **To Do** column.
2. **Move Tasks:** Drag a task card to a different column to update its status.
3. **Reload:** Refreshing the page restores your tasks from `localStorage`.

<script>
// Modal behavior (same as landing page)
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("kanban-boardModal");
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
/* Same styles as other JavaScript of the Day modals */
#kanban-boardModal {
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
  max-width: 800px;
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
