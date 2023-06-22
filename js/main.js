// event listeners
window.addEventListener("load", buildUI());
// restart.addEventListener("click", init());

//variables

function buildUI() {
    let ticTacApp = document.getElementById("app");
    let boxes = document.createElement("table");
    document.body.appendChild(boxes);




    /*  ticTacApp.forEach((block, index) => {
          block.addEventListener("click", () => {
              console.log(index);
          })
      })
  }
  */

    function startGame() {
        let box;
        for (let i = 0; i < 9; i++) {
            box = document.createElement("div");
            box.addEventListener("box");
            CSSContainerRule.appnedChild(box);
        }
    }

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
/*
function initUI() {
    buildUI;
    DISPLAY header state - ticTacToe.header;
    DISPLAY link to game rules from state - ticTacToe.gameRules;
    ?? .map each block on the DOM
    DISPLAY restart BUTTON from state
}
*/}