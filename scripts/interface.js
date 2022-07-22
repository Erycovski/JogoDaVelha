document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener('click', handlerClick)
    })
})

function handlerClick(event) {

    let square = event.target
    let position = square.id
    let playerName = ''

    if (playerTime == 0) {
        playerName = "berinjela"
    } else {
        playerName = "CarinhaSafada"
    }

    if (handleMove(position)) {
        setTimeout(() => {
            alert(`O Jogo Acabou! - o Vencedor foi ${playerName}`)
            let restart = document.getElementById('restart')
            restart.innerHTML = "<h1>RESTART</h1>"
          
        }, 10);
    }
    updateSquare(position)
}

function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let sybol = board[position]
    square.innerHTML = `<div class ='${sybol}'></div>`
}







