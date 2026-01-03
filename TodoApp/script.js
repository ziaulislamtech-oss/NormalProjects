let TodoList = document.querySelector('.todo-list')
let todoInput = document.querySelector('#todo-input')
let addTskBtn = document.querySelector('#addTask')
let deletBtn = document.querySelector('#removeTask')
addTskBtn.addEventListener('click',function(){
    let task = document.createElement('h2')
    task.innerText = todoInput.value;
    TodoList.appendChild(task)
})
deletBtn.addEventListener('click',function(){
    TodoList.removeChild
})