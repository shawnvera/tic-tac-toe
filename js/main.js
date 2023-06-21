//variables

let buildUI = document.getElementById("app");
buildUI.forEach((block, index) => {
    block.addEventListener("click", ()=> {
        console.log(index);
    })
})

//objects
ticTacToe = {
    player: player X or player O,
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


// Functions
//initializes the UI on window load
function initUI() {
    buildUI;
    DISPLAY header state - ticTacToe.header;
    DISPLAY link to game rules from state - ticTacToe.gameRules;
    ?? .map each block on the DOM
    DISPLAY restart BUTTON from state
}


// event listeners
window.addEventListener("load", rendUI());