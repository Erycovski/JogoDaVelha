let board = ["", "", "", "", "", "", "", "", ""]
let playerTime = 0
let sybols = ["o", "x"]
let gameOver = false
let WinStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



function handleMove(position) {

    if (gameOver) {
        return
    }

    if (board[position] == '') {
        board[position] = sybols[playerTime]

        gamerOver = isWin()


        if (gameOver == false) {

            playerTime = (playerTime == 0) ? 1 : 0

        }


    }


    return gameOver;
}

function isWin() {

    for (let i = 0; i < WinStates.length; i++) {
        let seq = WinStates[i];
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {

            gameOver = true

            
        }
        
    }
}


     









