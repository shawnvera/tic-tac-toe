**Procedural**

BEGIN

WHO - player 1 and player 2

WHAT - tic tac toe game board 

WHEN - n/a

WHERE -n/a 

WHY - for entertainment and coding practice 

HOW - by using vanilla Javascript, HTML, and CSS

*MoSCoW*

    Must have
        - game board UI
        - symbols for each player
        - must let the user know who's turn it is currently
        - game tiles should only be clickable once
        - game should display game result
        - restart (reset button)
        - user places one symbol on block per turn
        - game continues until all blocks are full or player has achieved win criteria
        - only have a single <div id="app"></div> in the index.html

    Should have
        - keep track of number of games won by X and O
        - add a link to rules, display in model
        
    Could have
        - record of player wins
        - create an AI that can "learn" how to play to win
        - turn into Connect Four
        - recreate Go

    Won't have
        - login credentials

*STATE:*

    The program will remember the default game board
    The program will remember the user's symbols / players
    The program will remember the location of user symbols on the tic tac toe board
    The program will remember whose the current player
    The program will remember which spaces have been clicked by the user(s)
    The program will remember past games
    The program will remember the game rules

*VARIABLES:*

    players = could these be the symbols as well? Like player 1 is "X" and player 2 is "O"
    player move
    current player
    disabled spaces
    games
    game rules


INIT

    1. renderUI FOR user on the WINDOW LOAD
        1a. clickable boxes RENDERED on UI FOR user input
    2. boxes fill with symbol according to which player clicks the box
    3. game end WHEN either symbol has 3 in a row or IF all boxes > 9
        3a. win condition, IF 3 of the same player symbols === in a row
        3b. tie condition, IF all spaces are used and no player symbols === 3 in a row
    4. UI DISPLAYS result
    5. restart button can either be visible the duration of the game OR || become visible after result is shown.
    
    END

**Functional**

// Variables

// this will create each molecule on the board. It should record each click with an index

// how to build the UI??? 
let buildUI = document.getElementById("app");
buildUI.forEach((block, index) => {
    block.addEventListener("click", ()=> {
        console.log(index);
    })
})

//image of what the game board should look like
![tic tac toe board](/img/tictactoeboard.png)

ticTacToe object {
    can the majority of the variables be in state here?
    Use methods for majority of the function as well?
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







**Object Oriented**

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