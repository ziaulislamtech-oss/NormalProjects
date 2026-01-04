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
allFullElemsBackBtn.forEach(function (btn,id) {
            btn.addEventListener('click', function () {
                allFullElems[id].style.display='none'
            })
        })