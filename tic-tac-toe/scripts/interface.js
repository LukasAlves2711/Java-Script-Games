let squares = document.querySelectorAll(".square")

let score = document.querySelectorAll(".score")
let scoreO = 0
let scoreX = 0
let scoreOX = 0

document.addEventListener('DOMContentLoaded', () => {


    squares.forEach((square) => {

        square.addEventListener('click', handleClick)
    })

})

function handleClick(event) {

    let square = event.target
    let postion = square.id


    if (handleMove(postion)) {

        setTimeout(resetGame, 1000)

        updateResult(playerTime)


    } else if ((countTurn0 >= 5 || countTurn1 >= 5) && !gameOver) {

        scoreOX++
        score[2].innerHTML = +scoreOX
        setTimeout(resetGame, 1000)
    }
    updateSquares()

}

function updateResult(playerTime) {

    playerTime == 0 ? scoreO++ : scoreX++;
    score[0].innerHTML = +scoreO
    score[1].innerHTML = +scoreX

}



function resetGame() {

    reset()
    squares.forEach((square) => {

        square.innerHTML = ''

    })
    updateSquares()
}


function updateSquares() {

    squares.forEach((square) => {

        let postion = square.id
        let symbol = board[postion]

        if (symbol != '') {
            square.innerHTML = `<div class ='${symbol}''></div>`
        }
    })

}