# Smart JS Tasks App

### Try It Now

To test the **Smart JS Tasks App** yourself and see the functionality in action, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Smart JS Tasks App</button>

<!-- Modal -->
<div id="smart-js-tasksModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="../../_static/apps/smart-js-tasks/smart-js-tasks.html" title="Smart JS Tasks App"></iframe>
  </div>
</div>

### Overview

The **Smart JS Tasks App** is a lightweight, interactive web application designed to manage tasks via a backend service. It persists data server-side, surviving browser cache clears.

### Features

- **Add Tasks:** Create a task with a required title and optional description.
- **View Tasks:** Display all tasks stored on the server.
- **Edit Tasks:** Update a task's title or description.
- **Delete Tasks:** Remove tasks from the backend.

### Purpose

This app showcases a step up from the 7/6 Task List demo by storing data on the server rather than in `localStorage`. Anyone can view and modify tasks—no login required.

### How It Works

1. **Listing Tasks:** On load, the app fetches tasks from `/tasks/list` and displays them.
2. **Adding Tasks:** Enter a title and optional description, then click "Add" to send a POST request to `/tasks/create`.
3. **Editing Tasks:** Each task has an Edit button that triggers a prompt and updates the entry with a PUT request.
4. **Deleting Tasks:** Remove a task with the Delete button, which calls the DELETE endpoint.

<script>
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("smart-js-tasksModal");
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
#smart-js-tasksModal {
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
