let arr = ['hellow i am Zia-Ul-Islam','I am a frontend developer, sheryian coding school is the best'];
let imgPath = ['./img/1.png','./img/2.png','./img/3.png','./img/4.png','./img/5.png','./img/6.png','./img/7.png','./img/8.png','./img/9.png','./img/10.png','./img/11.png'];
let main = document.querySelector('main');
let button = document.querySelector('button');
button.addEventListener('click',()=>{
    let div = document.createElement('div')
    let imgInDiv = document.createElement('img')
    let imgRNum = Math.floor(Math.random()*imgPath.length)
    console.log(imgRNum)
    imgInDiv.setAttribute('src',`${imgPath[imgRNum]}`)
    imgInDiv.style.width='70px'
    div.style.display='flex'
    div.style.alignItems='center'
    div.style.justifyContent='center'
    div.append(imgInDiv)
    console.log(imgInDiv)
    
    let c1= Math.floor(Math.random()*255);
    let c2= Math.floor(Math.random()*255);
    let c3= Math.floor(Math.random()*255);
    let pt= Math.floor(Math.random()*100);
    let pl= Math.floor(Math.random()*100);
    let R= Math.floor(Math.random()*360);
    console.log(imgRNum)
    div.style.width = '100px';
    div.style.height= '100px';
    div.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
    div.style.position ='absolute'
    div.style.top = `${pt}%`
    div.style.left = `${pl}%`
    div.style.rotate = `${R}deg`
    button.style.backgroundColor = `rgb(${c1},${c2},${c3})`


    
    main.append(div)
    
})