const taskTitle = document.getElementById("taskTitle");
const taskDetails = document.getElementById("taskDetails");
const taskColor = document.getElementById("taskColor");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Add task
addBtn.addEventListener("click", () => {
  if (taskTitle.value === "") {
    alert("Task title is required");
    return;
  }

  const task = {
    id: Date.now(),
    title: taskTitle.value,
    details: taskDetails.value,
    bgColor: taskColor.value
  };

  tasks.push(task);
  saveAndRender();

  taskTitle.value = "";
  taskDetails.value = "";
});

// Render tasks
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";
    div.style.background = task.bgColor;

    div.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.details}</p>
      <button onclick="editTask(${task.id})">Edit</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;

    taskList.appendChild(div);
  });
}

// Edit task
function editTask(id) {
  const task = tasks.find(t => t.id === id);

  const newTitle = prompt("Edit title", task.title);
  const newDetails = prompt("Edit details", task.details);

  if (newTitle !== null) task.title = newTitle;
  if (newDetails !== null) task.details = newDetails;

  saveAndRender();
}

// Delete task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveAndRender();
}

// Save + render
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
