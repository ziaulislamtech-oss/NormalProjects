// ====================
// 1. DOM ELEMENTS
// ====================
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskDetailsInput = document.getElementById('taskDetails');
const prioritySelect = document.getElementById('priority');
const addBtn = document.getElementById('addBtn');
const tasksList = document.getElementById('tasksList');
const taskCount = document.getElementById('taskCount');

// ====================
// 2. TASKS ARRAY (Data Storage)
// ====================
let tasks = [];

// ====================
// 3. FORM SUBMIT EVENT
// ====================
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    
    // Get form values
    const title = taskInput.value.trim();
    const details = taskDetailsInput.value.trim();
    const priority = prioritySelect.value;
    
    // Validate input
    if (!title) {
        alert('Please enter a task title!');
        taskInput.focus();
        return;
    }
    
    // Create task object
    const newTask = {
        id: Date.now(), // Unique ID using timestamp
        title: title,
        details: details || 'No details provided',
        priority: priority,
        showDetails: false,
        completed: false,
        createdAt: new Date().toLocaleString()
    };
    
    // Add to tasks array
    tasks.push(newTask);
    
    // Clear form
    taskForm.reset();
    prioritySelect.value = 'medium'; // Reset to default
    
    // Update UI
    updateTaskList();
    
    // Success message
    console.log('Task added:', newTask);
});

// ====================
// 4. UPDATE TASK LIST (Display)
// ====================
function updateTaskList() {
    // Clear current list
    tasksList.innerHTML = '';
    
    // Update task count
    taskCount.textContent = tasks.length;
    
    // If no tasks, show empty state
    if (tasks.length === 0) {
        tasksList.innerHTML = `
            <div class="empty-state">
                <p>📭 No tasks yet</p>
                <p>Add your first task above!</p>
            </div>
        `;
        return;
    }
    
    // Loop through tasks and create HTML
    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        tasksList.appendChild(taskElement);
    });
}

// ====================
// 5. CREATE TASK ELEMENT (Single Task)
// ====================
function createTaskElement(task) {
    // Create main task wrapper
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.id = task.id;
    
    // Priority color class
    const priorityClass = `priority-${task.priority}`;
    
    // Task HTML
    taskItem.innerHTML = `
        <div class="task-header">
            <div class="task-title">
                <span class="priority ${priorityClass}">
                    ${task.priority.toUpperCase()}
                </span>
                ${task.title}
            </div>
            <div class="task-actions">
                <button class="details-btn" data-id="${task.id}">
                    ${task.showDetails ? 'Hide' : 'Show'} Details
                </button>
                <button class="delete-btn" data-id="${task.id}">
                    Delete
                </button>
            </div>
        </div>
        <div class="task-details ${task.showDetails ? 'open' : ''}">
            <div class="details-content">
                <p><strong>Details:</strong> ${task.details}</p>
                <p><strong>Created:</strong> ${task.createdAt}</p>
            </div>
        </div>
    `;
    
    return taskItem;
}

// ====================
// 6. INITIAL SETUP
// ====================
function init() {
    console.log('Todo App Initialized!');
    updateTaskList();
}

// Start the app
init();