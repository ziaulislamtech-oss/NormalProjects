let taskInput = document.querySelector('input[type="text"]')
let taskDetails = document.querySelector('textarea')
let taskColor  = document.querySelector('#tskBgColor')
let addBtn = document.querySelector('#addTskBtn')
let allTasks = document.querySelector('.allTasks')
let form = document.querySelector('form')
// console.log(form.innerHTML)

form.addEventListener('submit',function(e){
    e.preventDefault()
    addTask()
    form.reset()

})

function addTask(){
   if(taskInput.value === ""){
    alert('Please Enter a task')
    return
   }

    // main Div
    let div = document.createElement('div')
    div.classList.add('task')
    let h2 = document.createElement('h2')
    h2.textContent= taskInput.value
    let span = document.createElement('span')
    span.textContent = 'imp'
    h2.appendChild(span)

//  Buttons Div
    let btnDiv = document.createElement('div')
    btnDiv.classList.add('btns')
    let detailsBtn =document.createElement('button')
    detailsBtn.textContent = 'Details'
    detailsBtn.type = 'button'
    let completeBtn= document.createElement('button')
    completeBtn.textContent = 'Completed'
    completeBtn.type = 'button'
    btnDiv.appendChild(detailsBtn)
    btnDiv.appendChild(completeBtn)

// Details Div    
    let DetailsDiv = document.createElement('div')
    DetailsDiv.classList.add('taskDetails')

   
// Details Div p 
   let p = document.createElement('p')
   p.textContent=taskDetails.value
   DetailsDiv.appendChild(p)

//  div backgorund color 
   let bgColor = taskColor.value.trim() !== "" ? taskColor.value : "#f1f2f6";
   div.style.backgroundColor = bgColor;


// appending childs in Div   
   div.appendChild(h2)
   div.appendChild(btnDiv)
   div.appendChild(DetailsDiv)

// Appending Div in AllTask
   allTasks.appendChild(div)
   detailsBtn.addEventListener('click',()=>{
    console.log(detailsBtn)
   })
}
