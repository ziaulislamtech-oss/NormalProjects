window.addEventListener('load',function(){

    let savedTasks = loadTaskFromStorage

    savedTasks.forEach(function(task){
        showTasksOnScreen(task.title,task.details,task.color)
    })

    function showTasksOnScreen(taskTitle,taskDetails,taskColor){
        // Create wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'wraper';

    // Create task div
    const task = document.createElement('div');
    task.className = 'task';
    task.style.backgroundColor = taskColor; // Color parameter use kiya

    // Create h2 element
    const h2 = document.createElement('h2');
    h2.textContent = taskTitle; // Title parameter use kiya

    // Create span element
    const span = document.createElement('span');
    span.textContent = 'imp';
    h2.appendChild(span);

    // Create btns div
    const btns = document.createElement('div');
    btns.className = 'btns';

    // Create Details button
    const detailsBtn = document.createElement('button');
    detailsBtn.classList.add('detailsBtn');
    detailsBtn.textContent = 'Details';

    // Create Completed button
    const completedBtn = document.createElement('button');
    completedBtn.classList.add('completedBtn');
    completedBtn.textContent = 'Completed';

    // Append buttons to btns div
    btns.appendChild(detailsBtn);
    btns.appendChild(completedBtn);

    // Append h2 and btns to task div
    task.appendChild(h2);
    task.appendChild(btns);

    // Create taskDetails div
    const taskDetailsDiv = document.createElement('div');
    taskDetailsDiv.className = 'taskDetails';

    // Create paragraph element
    const p = document.createElement('p');
    p.textContent = taskDetails; // Details parameter use kiya
    taskDetailsDiv.appendChild(p);

    // Append task and taskDetails to wrapper
    wrapper.appendChild(task);
    wrapper.appendChild(taskDetailsDiv);
    
    // Add to screen
    allTasks.appendChild(wrapper);

    }
})

let form = document.querySelector('.form')
let taskInput = document.querySelector('#taskInput')
let textArea = document.querySelector('#details')
let colorInput = document.querySelector('#tskBgColor')
let taskAddBtn = document.querySelector('#addTskBtn')
// console.log(taskAddBtn)
let allTasks = document.querySelector('.allTasks')
let arr = [];
function saveTaskToLocalStorage(taskTitle,taskDetials,taskColor){

    let allTasks = JSON.parse(localStorage.getItem('myTasks')|| [])

    let newTask = {
        title : taskTitle, 
        details : taskDetials,
        color : taskColor
    }
    allTasks.push(newTask)

    localStorage.setItem('myTasks',JSON.stringify(allTasks))
    console.log(`task saved to local storage ${newTask}`)
}

function loadTaskFromStorage(){
    let savedTasks = localStorage.getItem('myTasks')
    if(savedTasks){
        return JSON.parse(savedTasks);
    }
    else{
        console.log('no tasks available')
    }
}



form.addEventListener('submit', function (dets) {
    dets.preventDefault()
    saveTaskToLocalStorage(taskInput.value,textArea.value,colorInput.value)
    showTasksOnScreen(taskInput.value,textArea.value,colorInput.value)
    
    taskInput.value=''
    textArea.value=''
    addTask()

})
function addTask() {

    // Create wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'wraper';

    // Create task div
    const task = document.createElement('div');
    task.className = 'task';
    task.style.backgroundColor = colorInput.value

    // Create h2 element
    const h2 = document.createElement('h2');
    h2.textContent = taskInput.value;

    // Create span element
    const span = document.createElement('span');
    span.textContent = 'imp';

    // Append span to h2
    h2.appendChild(span);

    // Create btns div
    const btns = document.createElement('div');
    btns.className = 'btns';

    // Create Details button
    const detailsBtn = document.createElement('button');
    detailsBtn.classList.add('detailsBtn')
    detailsBtn.textContent = 'Details';

    // Create Completed button
    const completedBtn = document.createElement('button');
    completedBtn.classList.add('completedBtn')
    completedBtn.textContent = 'Completed';

    // Append buttons to btns div
    btns.appendChild(detailsBtn);
    btns.appendChild(completedBtn);

    // Append h2 and btns to task div
    task.appendChild(h2);
    task.appendChild(btns);

    // Create taskDetails div
    const taskDetails = document.createElement('div');
    taskDetails.className = 'taskDetails';

    // Create paragraph element
    const p = document.createElement('p');
    p.textContent = textArea.value;

    // Append paragraph to taskDetails div
    taskDetails.appendChild(p);

    // Append task and taskDetails to wrapper
    wrapper.appendChild(task);
    wrapper.appendChild(taskDetails);
    allTasks.appendChild(wrapper)

    // Now you can append wrapper to your document
    // For example: document.body.appendChild(wrapper);

    //
}

allTasks.addEventListener('click', function (e) {
    if (e.target.classList.contains('detailsBtn')) {
        console.log('button clicked')

        const wraper = e.target.closest('.wraper');
        if(!wraper){
            console.log(`wraper not found`)
            return
        }
        let detailsDiv =  wraper.querySelector('.taskDetails')
       detailsDiv.classList.toggle('open')

       e.target.textContent = detailsDiv.classList.contains('open') ? 'Hide' : 'Details'
    }

    if(e.target.classList.contains('completedBtn')){
       
        let wraper = e.target.closest('.wraper')
        if(wraper){
            let taskDiv = wraper.querySelector('.task')
            taskDiv.style.textDecoration = 'line-through'
            e.target.textContent = 'Done'
            e.target.disable = true
            
            setTimeout(function(){
                wraper.remove()
            },500)
        }
    }
})
