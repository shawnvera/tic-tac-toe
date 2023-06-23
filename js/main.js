// event listeners
window.addEventListener("load", init);


// global variables
let ticTacApp = document.getElementById("app");
let btn;
let xTurn = true;
let correctCombination;

let ticTacToe = {
    header: "Tic-Tac-Toe",
    classList: "text-center",
    gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    clicks: 0
}

// functions

//restart button
function restart() {
    // replace with init
    // reset the init
    // blank out .innerHTML = ""
    location.reload();
}

function init() {
    let box;
    let row;
    let col;
    let col1;
    let col2;
    let h1;
    let h2;

    h1 = document.createElement("div");
    h2 = document.createElement("h2");
    h1.classList = "text-center"
    h1.textContent = ticTacToe.header;
    ticTacApp.appendChild(h2);
    h2.appendChild(h1);

    box = document.createElement("div");
    box.classList = "box p-5 border border-dark";
    ticTacApp.appendChild(box);
    row = document.createElement("div");
    row.classList = "row border border-dark";
    box.appendChild(row);
    // could I use a .forEach to simplify this?

    for (let i = 0; i < 9; i++) {
        col = document.createElement("div");
        col.classList = "col-4 p-5 border border-dark text-center";
        col.id = 1;
        col.addEventListener("click", clickMe, { once: true });
        row.appendChild(col);
    }



    btn = document.createElement("div");
    btn.classList = "btn p-3 btn-primary";
    btn.textContent = "Restart";
    ticTacApp.appendChild(btn);
    btn.addEventListener("click", restart);
}

function clickMe(e) {
    const currentBox = e.target;
    // set to 0
    let num;
    let displayTurn = document.createElement("div");
    num += 1;
    ticTacToe.clicks++
    console.log(ticTacToe.clicks);
    currentBox.innerText = "X"
    displayTurn.textContent = "Player's turn " + currentBox.innerText;
    if (!xTurn) {
        currentBox.innerText = "O"
        displayTurn.textContent = "Player's turn " + currentBox.innerText;
    }
    xTurn = !xTurn
    ticTacToe.gameBoard[e.target.id];
    console.log(num);

    ticTacApp.appendChild(displayTurn);
}

let winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]] // loop thru a grouping of indexes

for (let i = 0; i = winConditions.length; i++) {
    if (ticTacToe.gameBoard[winConditions[i][0]] + ticTacToe.gameBoard[winConditions[i][1]] + ticTacToe.gameBoard[winConditions[i][2]]) {
        displayTurn.textContent = currentBox.innerText + " wins the game!";
    } else if (ticTacToe.clicks === 8) {
        displayTurn.textContent = "Tie!";
    }
}
// loop thru winging condition loop thru win[i]
// sum = winConditions[i][0] +








/*  ticTacApp.forEach((block, index) => {
      block.addEventListener("click", () => {
          console.log(index);
      })
  })
}
*/

//objects
/*
ticTacToe = {
    board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
],
gameBoard = document.createElement("div");

    playerX: 1,
    playerO: 0,
    playerMove: the block that either player X or player O clicked,
    currentPlayer: ,
    disabledSpaces: IF disabled spaces = 9 THEN tie,
    games: [],
    gameRules: document.createElementNS("https://www.exploratorium.edu/explore/puzzles/tictactoe#:~:text=Rules%20for%20Tic%2DTac%2DToe&text=Players%20take%20turns%20putting%20their,game%20ends%20in%20a%20tie.", "a");
    header: let header1 = document.createElement("<h1>");
    let ticTac = document.createTextNode("Tic-Tac-Toe game");
    header1.appendChild(ticTac),
    restart: init,

}
*/

// Functions
//initializes the UI on window load

// function initUI() {
//     buildUI;
//     DISPLAY header state - ticTacToe.header;
//     DISPLAY link to game rules from state - ticTacToe.gameRules;
//     ?? .map each block on the DOM
//     DISPLAY restart BUTTON from state
//
// function generateHTMLElement(board) {
//     let element = document.createElement(board.type);
//     element.classList = board.classList;
//     if (board.id) {
//         element.id = board.id;
//     }
//     if (board.parent) {
//         board.parent.appendChild(element);
//     }
//     if (board.listener) {
//         element.addEventListener('click', board.listener);
//     }
//     if (board.style) {
//         element.style = board.style;
//     }
//     return element;
// }
// var gameBoard = generateHTMLElement(board);
// console.log(board)
// }

// function buildUI() {

//     var board = {
//         id: "board",
//         type: "div",
//         listener: clickMe,
//         parent: "app",
//         classList: "container"
//     }
// }