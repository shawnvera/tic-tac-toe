// event listeners
window.addEventListener("load", init);


// global variables
let ticTacApp = document.getElementById("app");
let btn;

let ticTacToe = {
    header: "Tic-Tac-Toe",
    classList: "text-center",
    currentPlayer: 0,
    playerX: 0,
    playerO: 1,
    playerT: null,
    gameBoard: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ],
}

// functions

//restart button
function restart() {
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

    // could I use a .forEach to simplify this?

    for (let i = 0; i < 3; i++) {

        row = document.createElement("div");

        col = document.createElement("div");
        col1 = document.createElement("div");
        col2 = document.createElement("div");

        row.classList = "row border border-dark";

        col.classList = "col-4 p-5 border border-dark";
        col1.classList = "col-4 p-5 border border-dark";
        col2.classList = "col-4 p-5 border border-dark";

        ticTacApp.appendChild(box);
        box.appendChild(row);
        row.appendChild(col);
        row.appendChild(col1);
        row.appendChild(col2);

        col.addEventListener("click", clickMe, { once: true });
        col1.addEventListener("click", clickMe, { once: true });
        col2.addEventListener("click", clickMe, { once: true });
    }

    btn = document.createElement("div");
    btn.classList = "btn p-3 btn-primary";
    btn.textContent = "Restart";
    ticTacApp.appendChild(btn);
    btn.addEventListener("click", restart);
}

function clickMe(e) {
    if(col==="clicked"){
        col.display = ticTacToe.currentPlayer;
    currentPlayer = 1;
    ticTacToe.gameBoard.push = e.target;
    console.log(ticTacToe.gameBoard);

}
}


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