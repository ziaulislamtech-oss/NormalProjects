let highScore = localStorage.getItem('high-score') || 0
Number(highScore)
let main = document.querySelector('main')
console.log(main)
let highScoreEl = document.querySelector('.highScore span')
highScoreEl.innerHTML = highScore
console.log(highScore)
let scoreVal = 0
let score = document.querySelector('.score span')



const Xbutton = document.querySelector('.gameOver button')
const gameOverScreen = document.querySelector('.gameOver')
Xbutton.addEventListener('click', () => {
    gameOverScreen.style.display = 'none'
    snake.length = 0
})

let food = null;

function generateFood() {
    let x = Math.floor(Math.random() * rows)
    let y = Math.floor(Math.random() * cols)

    return food = { x, y }


}



let screenWidth = main.clientWidth
let screenHeight = main.clientHeight

const boxWidth = 50
const boxHeight = 50
let allBoxes = []

let direction = 'right'
let nextDirection = 'right'

let cols = Math.floor(screenWidth / boxWidth)
let rows = Math.floor(screenHeight / boxHeight)

console.log(`cols : ${cols} rows : ${rows}`)

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let box = document.createElement('div')
        box.classList.add('box')
        allBoxes[`${row}-${col}`] = box
        main.appendChild(box)
        
    }
}

const snake = [
    { x: 2, y: 4 },
]

function checkSelfCollision(newHead) {
    return snake.some(segment =>
        segment.x === newHead.x && segment.y === newHead.y
    )
}

generateFood()
function render() {
    Object.values(allBoxes).forEach((box) => {
        box.classList.remove('fill', 'food')


    })

    snake.forEach((segment, idx) => {
        allBoxes[`${segment.x}-${segment.y}`].classList.add('fill')
       
    })

    if (food) {
        allBoxes[`${food.x}-${food.y}`].classList.add('food')
    }
}


document.addEventListener("keydown", (e) => {
    if (e.key === 'ArrowUp' && direction !== 'down') nextDirection = 'up'
    else if (e.key === 'ArrowDown' && direction !== 'up') nextDirection = 'down'
    else if (e.key === 'ArrowLeft' && direction !== 'right') nextDirection = 'left'
    else if (e.key === 'ArrowRight' && direction !== 'left') nextDirection = 'right'
})

render()




function moveSnake() {
    direction = nextDirection
    let head = snake[0]
    let newHead = { ...head }

    if (direction === 'up') {
        newHead.x -= 1

    } else if (direction === 'left') {
        newHead.y -= 1

    } else if (direction === 'down') {
        newHead.x += 1

    } else if (direction === 'right') {
        newHead.y += 1

    }
    if (checkSelfCollision(newHead)) {
        clearInterval(gameLoop)
        gameOverScreen.style.display = 'flex'
        return
    }

    snake.unshift(newHead)
    if (GameOver(newHead)) {
        clearInterval(gameLoop)
        scoreVal = 0
        score.innerHTML = scoreVal


        gameOverScreen.style.display = 'flex'
        clearInterval(timerInterval)
        return
    }

    // Food Eating Logic
    if (food.x === newHead.x && food.y === newHead.y) {
        scoreVal += 1
        score.innerHTML = scoreVal
        console.log(scoreVal)

        // high score value check
        if (scoreVal > highScore) {
            highScore = scoreVal
            localStorage.setItem('high-score', highScore)
            highScoreEl.innerHTML = highScore
        }

        generateFood()

    } else {

        snake.pop()
    }

}
function GameOver(head) {
    // console.log(head)
    // up 
    if (head.x < 0) return true

    // bottom 
    if (head.x >= rows) return true

    // left
    if (head.y < 0) return true

    //right
    if (head.y >= cols) return true

    return false
}

let seconds = 0
let timerInterval = null
let timer = document.querySelector('.time h3')
timer.innerHTML = '00:00'

function satartTimer() {
    clearInterval(timerInterval)  // doubt kya es timerInteravl ki value brackets k bahar be yeha hogi to yaha hian?
    // console.log('timer interval',timerInterval)
    timerInterval = setInterval(() => { 
        seconds += 1
        let mins = Math.floor(seconds / 60)
        let secs = seconds % 60

        //formated
        let formated = String(mins).padStart(2, '0') + ':' +
            String(secs).padStart(2, '0')
        let timer = document.querySelector('.time h3')
        timer.innerHTML = formated
        console.log(timer)

    }, 1000)
}

satartTimer()

let gameLoop;


function restartGame() {
    gameLoop = setInterval(() => {
        moveSnake()
        render()

    }, 200);
    satartTimer()

}

let restartBtn = document.querySelector('.gameOver .restartBtn')
restartBtn.addEventListener('click', () => {

    gameOverScreen.style.display = 'none'
    snake.length = 1;
    snake[0] = {x:2,y:4}

    // direction 
    direction = 'right'
    nextDirection='right'

    scoreVal = 0
    score.innerHTML=scoreVal

    generateFood()

    clearInterval(timerInterval)
    
    seconds = 0
    // timer.innerHTML = '00:00'
   

    restartGame()
})



gameLoop = setInterval(() => {
    moveSnake()
    render()
}, 200);





