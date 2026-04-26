let board = document.querySelector('.board ')

let boardWidth = board.clientWidth;
let boardHeight = board.clientHeight;
console.log(`width : ${boardWidth} : height : ${boardHeight}`)
// console.log(boardWidth)


const blockWidth = 80;
const blockHeigth = 80;

const blocks = []
const snake = [
    { x: 1, y: 3 },

]

let direction = 'down'

const cols = Math.floor(boardWidth / blockWidth)
const rows = Math.floor(boardHeight / blockHeigth)
console.log(`cols : ${cols} rows : ${rows}`)
let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement('div')
        block.classList.add('block')
        board.appendChild(block)
        block.innerHTML = `${row} ${col}`
        blocks[`${row}-${col}`] = block
    }
}

let head = null;
function render() {
    snake.forEach((segment,idx)=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove('fill')
    })

    if (direction === 'left') {
       head = { x: snake[0].x, y: snake[0].y - 1 }

   } else if (direction === 'right') {
       head = { x: snake[0].x, y: snake[0].y + 1 }
   } else if (direction === 'up') {
       head = { x: snake[0].x - 1, y: snake[0].y }
   } else if (direction === 'down') {
       head = { x: snake[0].x + 1, y: snake[0].y }
   }
   
   snake.unshift(head)
   snake.pop()
   
   snake.forEach((segment, idx) => {
       blocks[`${segment.x}-${segment.y}`].classList.add('fill')
   })

    blocks[`${food.x}-${food.y}`].classList.add('food')

   




}
render()

const snamkeGame = setInterval(() => {
    if (head.x < 0 || head.x >= rows || head.y >= cols || head.y < 0) {
        alert('Game over')
        clearInterval(snamkeGame)
    }

    render()
}, 500);


addEventListener("keydown", (event) => {
    // console.log(event.key)

    if (event.key == 'ArrowDown') {
        direction = 'down'
        console.log(direction)
    } else if (event.key == 'ArrowLeft') {
        direction = 'left'
        console.log(direction)
    } else if (event.key == 'ArrowUp') {
        direction = 'up'
        console.log(direction)
    } else if (event.key === 'ArrowRight') {
        direction = 'right'
        console.log(direction)
    }
})

