console.log('todo ap starting ....')
// localStorage.clear()
let taskArr = JSON.parse(localStorage.getItem('task')) || []

const form = document.querySelector('.form form');
const taskInput = document.querySelector('#taskInput');
const allTasksContainer = document.querySelector('.allTasks');

function createTaskOnScreen(task) {
    const wrapper = document.createElement('div');
    wrapper.className = 'wraper';
    
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.style.backgroundColor = task.color;
    
    const h2 = document.createElement('h2');
    h2.textContent = task.title;
    
    const span = document.createElement('span');
    span.textContent = ' imp';
    h2.appendChild(span);
    
    const btns = document.createElement('div');
    btns.className = 'btns';
    
    const detailsBtn = document.createElement('button');
    detailsBtn.className = 'detailsBtn';
    detailsBtn.textContent = 'Details';
    
    const completedBtn = document.createElement('button');
    completedBtn.className = 'completedBtn';
    completedBtn.textContent = 'Completed';
    
    btns.appendChild(detailsBtn);
    btns.appendChild(completedBtn);
    
    taskDiv.appendChild(h2);
    taskDiv.appendChild(btns);
    
    const taskDetailsDiv = document.createElement('div');
    taskDetailsDiv.className = 'taskDetails';
    
    const p = document.createElement('p');
    p.textContent = task.details || 'No details provided';
    taskDetailsDiv.appendChild(p);
    
    wrapper.appendChild(taskDiv);
    wrapper.appendChild(taskDetailsDiv);
    
    allTasksContainer.appendChild(wrapper);
}
window.addEventListener('DOMContentLoaded',function(){
    taskArr.forEach(function(task){
        createTaskOnScreen(task)
    })

})
// STEP 2: COMPLETE TASK WITH DETAILS
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 1. Get ALL values
    const taskTitle = taskInput.value.trim();
    const taskDetails = document.querySelector('#details').value.trim();
    const taskColor = document.querySelector('#tskBgColor').value;
    let task = {
        taskId:Date.now,
        title:taskTitle,
        details : taskDetails,
        color : taskColor
    }
    // 2. Check if empty
    if (!taskTitle) {
        alert('Please enter a task title!');
        taskInput.focus();
        return;
    }
    createTaskOnScreen(task)
    // save to local storage
    saveTaskToLocalStorage(task)
    
    // 5. Clear form
    taskInput.value = '';
    document.querySelector('#details').value = '';
    document.querySelector('#tskBgColor').value = '#f1f2f6';
    
    console.log('✅ Task added:', {
        title: taskTitle,
        details: taskDetails,
        color: taskColor
    });
});

// Add this after form event listener
allTasksContainer.addEventListener('click', function(e) {
    // Handle Details Button
    if (e.target.classList.contains('detailsBtn')) {
        console.log('🔍 Details button clicked');
        
        const wrapper = e.target.closest('.wraper');
        const detailsDiv = wrapper.querySelector('.taskDetails');
        
        // Toggle visibility
        detailsDiv.classList.toggle('open');
        
        // Change button text
        e.target.textContent = detailsDiv.classList.contains('open') 
            ? 'Hide' 
            : 'Details';
    }
});

function saveTaskToLocalStorage(task){
    taskArr.push(task)
    localStorage.setItem('task',JSON.stringify(taskArr))
}