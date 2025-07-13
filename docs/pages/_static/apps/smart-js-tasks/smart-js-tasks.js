const titleInput = document.getElementById('task-title');
const descInput = document.getElementById('task-desc');
const addBtn = document.getElementById('add-task');
const listEl = document.getElementById('task-list');
const errorEl = document.getElementById('error');

async function fetchTasks() {
    try {
        const resp = await fetch('/tasks/list');
        if (!resp.ok) throw new Error('Failed to load tasks');
        const tasks = await resp.json();
        renderTasks(tasks);
    } catch (err) {
        showError(err.message);
    }
}

function renderTasks(tasks) {
    listEl.innerHTML = '';
    tasks.forEach(t => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = `${t.title} ${t.description ? '- ' + t.description : ''}`;
        li.appendChild(span);
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit';
        editBtn.dataset.taskId = t.id;
        editBtn.addEventListener('click', startEdit);
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'delete';
        delBtn.addEventListener('click', () => deleteTask(t.id));
        li.appendChild(editBtn);
        li.appendChild(delBtn);
        listEl.appendChild(li);
    });
}

function startEdit(e) {
    const id = e.currentTarget.dataset.taskId;
    editTask(id);
}

async function createTask() {
    const title = titleInput.value.trim();
    const description = descInput.value.trim();
    if (!title) return showError('Title is required');
    try {
        const resp = await fetch('/tasks/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description })
        });
        if (!resp.ok) throw new Error('Failed to create task');
        titleInput.value = '';
        descInput.value = '';
        await fetchTasks();
    } catch (err) {
        showError(err.message);
    }
}

async function editTask(id) {
    const newTitle = prompt('Edit title');
    if (newTitle === null) return; // cancel
    const newDesc = prompt('Edit description');
    try {
        const resp = await fetch(`/tasks/${id}/details`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: newTitle, description: newDesc })
        });
        if (!resp.ok) throw new Error('Failed to update task');
        await fetchTasks();
    } catch (err) {
        showError(err.message);
    }
}

async function deleteTask(id) {
    if (!confirm('Delete this task?')) return;
    try {
        const resp = await fetch(`/tasks/${id}/details`, {
            method: 'DELETE'
        });
        if (!resp.ok) throw new Error('Failed to delete task');
        await fetchTasks();
    } catch (err) {
        showError(err.message);
    }
}

function showError(msg) {
    errorEl.textContent = msg;
    setTimeout(() => { errorEl.textContent = ''; }, 3000);
}

addBtn.addEventListener('click', createTask);

document.addEventListener('DOMContentLoaded', fetchTasks);
