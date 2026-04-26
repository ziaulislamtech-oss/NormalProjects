let allColumns = document.querySelectorAll('.column')
let dragElemnt = null
const AddNewTaskBtn = document.querySelector('header .addNewTaskBtn')
const newTaskWindow = document.querySelector('.board .overlay')
const cancleTaskButton = document.querySelector('.actions #cancelBtn')
const CreateTaskBtn = document.querySelector('.actions #createBtn')
// localStorage.clear()

let tasks = JSON.parse(localStorage.getItem('tasks')) || []


let allTasks = document.querySelectorAll('.task')
let allTaskDiv = document.querySelector('.allTasks')

let tasArray = []
const themeButtons = document.querySelectorAll('.theme-btn') // theme buttons selector

renderTasks()
initThemeSwitcher() // initialize theme switcher

// Open New Task Window Logic
function openNewTaskWindow() {
    AddNewTaskBtn.addEventListener('click', () => {
        newTaskWindow.classList.toggle('hidden')
    })
    cancleTaskButton.addEventListener('click', () => {
        newTaskWindow.classList.toggle('hidden')


    })
}
openNewTaskWindow()


// Drag And Drop Logic
function dragAndDropFunctionility() {
    allColumns.forEach(col => {
        // console.log(col.task)
        col.addEventListener("dragover", (e) => {
            e.preventDefault(); // 🔥 VERY IMPORTANT

            col.classList.add('dragOver')

        });

        col.addEventListener('dragleave', (e) => {

            col.classList.remove('dragOver')

        })

        col.addEventListener('drop', () => {

            let id = dragElemnt.dataset.id;

            let task = tasks.find(t => t.id == id);

            if (task) {
                task.status = col.id;
            }

            saveTasks();
            renderTasks();

            col.classList.remove('dragOver')
        })

        let CurrentTasks = col.querySelectorAll('.task')
        CurrentTasks.forEach((task) => {
            task.addEventListener('dragstart', (e) => {

                dragElemnt = task
                task.classList.add('dragging')

            })

            task.addEventListener('dragend', (e) => {
                dragElemnt = null
                 task.classList.remove('dragging')
            })
        })
    });



}

// Create Task Logic
function createNewTask() {
    const taskInput = document.querySelector('.modal #taskTitle')
    const taskDetails = document.querySelector('.modal #taskDesc')


    if (taskInput.value !== "") {

        let newTask = {
            id: Date.now(),
            title: taskInput.value,
            desc: taskDetails.value,
            status: 'todo'
        }

        tasks.push(newTask)
        saveTasks()
        renderTasks()

        taskInput.value = ""
        taskDetails.value = ""
        newTaskWindow.classList.toggle('hidden')


    }

}

CreateTaskBtn.addEventListener('click', (e) => {
    createNewTask()
})

// Saving Task To Local Storage

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Theme switcher logic: apply theme and save current selection.
function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('selectedTheme', theme)

    themeButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.theme === theme)
    })
}

function initThemeSwitcher() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default'
    applyTheme(savedTheme)

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            applyTheme(button.dataset.theme)
        })
    })
}


// update count login

function updateCount() {
    let todoCount = tasks.filter(t => t.status === "todo").length;
    let progressCount = tasks.filter(t => t.status === "progress").length;
    let doneCount = tasks.filter(t => t.status === "done").length;

    document.querySelector('#todo .count').innerHTML = todoCount
    document.querySelector('#progress .count').innerHTML = progressCount
    document.querySelector('#done .count').innerHTML = doneCount

}

// Rendering Task Logic
function renderTasks() {
    // 🔥 CLEAR ALL COLUMNS FIRST
    document.querySelectorAll('.allTasks')
        .forEach(c => c.innerHTML = "");
    tasks.forEach((task) => {
        let div = document.createElement('div')
        div.className = 'task'
        div.draggable = true
        div.dataset.id = task.id   // 🔥 (important for drag later)


        div.innerHTML = `
        <h2>${task.title}</h2>
        <p>${task.desc}</p>
        <button class='deleteBtn'>Delete</button>
        `

        //drage Event 
        div.addEventListener('dragstart', (e) => {
            dragElemnt = div

        })
        div.addEventListener('dragend', () => {
            dragElemnt = null
        })

        // delete Function

        div.querySelector('.deleteBtn')
            .addEventListener('click', (e) => {

                deleteTask(task.id)
            })



        document.querySelector(`#${task.status} .allTasks`).appendChild(div);

    })

    updateCount()
}


function deleteTask(taskId) {
    let el = document.querySelector(`[data-id="${taskId}"]`);

    if (el) {
        el.classList.add("removing");

        setTimeout(() => {
            tasks = tasks.filter(t => t.id !== taskId);
            saveTasks();
            renderTasks();
        }, 250);
    }
}


dragAndDropFunctionility()




