// event listeners
window.addEventListener("load", buildUI);
// restart.addEventListener("click", init);

// global variables
let ticTacApp = document.getElementById("app");
function clickMe(e) {
    console.log("you clicked " + e.target.id);
}

function buildUI() {
    
    var board = {
        id: "board",
        type: "div",
        listener: clickMe,
        parent: "app",
        classList: "container"
}
}
// var gameBoard = generateHTMLElement(board);
// console.log(board)
// }

// event listeners
window.addEventListener("load", buildUI);
// restart.addEventListener("click", init);

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








function startGame() {
    let box;
    let row;
    let col;
    let col1;
    let col2;
    for (let i = 0; i < 9; i++) {
        box = document.createElement("div");
        row = document.createElement("div");
        col = document.createElement("div");
        col1 = document.createElement("div");
        col2 = document.createElement("div");
        box.classList = "container";
        row.classList = "row-md border border-success";
        col.classList = "col-md-4 p-3 border-bottom border-subtle";
        col1.classList = "col-md-4 p-3 border-bottom border-subtle";
        col2.classList = "col-md-4 p-3 border-bottom border-subtle";
        // box.addEventListener("click", );
        ticTacApp.appendChild(box).appendChild(row).appendChild(col).appendChild(col1).appendChild(col2);
    }
}
startGame();


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