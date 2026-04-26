let allAppsElement = document.querySelectorAll('.app')
let allAppsFullPages = document.querySelectorAll('.fullpage')
console.log(allAppsFullPages)

allAppsElement.forEach((elem,idx)=>{
    elem.addEventListener('click',()=>{
        allAppsFullPages[idx].style.display = 'block'
       const closeBtn = allAppsFullPages[idx].querySelector('.back')
       closeBtn.addEventListener('click',()=>{
        allAppsFullPages[idx].style.display = 'none'
       })

    })
})
