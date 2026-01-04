function openFeatures() {
    let allElems = document.querySelectorAll('.elem')
    let allFullElems = document.querySelectorAll('.fullElem')
    let allFullElemsBackBtn = document.querySelectorAll('.back')
    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            console.log(elem.id)
            console.log(allFullElems[elem.id])
            allFullElems[elem.id].style.display = 'block'
        })
    })
    allFullElemsBackBtn.forEach(function (btn, id) {
        btn.addEventListener('click', function () {
            allFullElems[id].style.display = 'none'
        })
    })
}
openFeatures()

function todoList() {
    var currentTask = []

    if (localStorage.getItem('currentTask')) {
        currentTask = JSON.parse(localStorage.getItem('currentTask'))
        renderTask()
    } else {
        console.log('Task list is empty')
    }


    let form = document.querySelector('.addTask form')
    let taskInput = document.querySelector('.addTask form input')
    let taskDetailsInput = document.querySelector('.addTask form textarea')
    let taskCheckbox = document.querySelector('.addTask form #check')
    form.addEventListener('submit', function (dets) {
        dets.preventDefault()
        currentTask.push({
            tasks: taskInput.value,
            details: taskDetailsInput.value,
            imp: taskCheckbox.checked
        })
        renderTask()
        form.reset()
        location.reload()
    })

    function renderTask() {
        localStorage.setItem('currentTask', JSON.stringify(currentTask))
        let sum = ''
        var allTask = document.querySelector('.allTask')
        currentTask.forEach(function (elem, id) {
            sum += `<div class="task">
                        <h5>${elem.tasks}<span class=${elem.imp}>imp${id}</span></h5>
                        <button id=${id}>Mark as completed</button>
                    </div>`
        })
        allTask.innerHTML = sum;
    }
    var markCompletedBtn = document.querySelectorAll('.task button')
    console.log(markCompletedBtn)
    markCompletedBtn.forEach(function (btn, idx) {
        btn.addEventListener('click', function () {
            currentTask.splice(idx, 1)
            renderTask()
            console.log(idx)
            location.reload()
        })
    })

}