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
    2. clickable boxes RENDERED on UI FOR user input
    3. boxes fill with symbol according to which player clicks the box
    4. game end WHEN either symbol has 3 in a row or IF all boxes > 9
    5. UI DISPLAYS result
    6. restart button can either be visible the duration of the game or become visible after result is shown.
    
    END

**Functional**

// Variables

let buildUI = document.getElementById("app");
buildUI.forEach((block, index) => {
    block.addEventListener("click", ()=> {
        console.log(index);
    })
})

![tic tac toe board](/img/tictactoeboard.png)


ticTacToe object

// Functions
function rendUI() {
    DISPLAY header
    DISPLAY link to game rules
    ?? .map each block on the DOM
    DISPLAY restart BUTTON
}





// event listeners
window.addEventListener("load", rendUI());







**Object Oriented**

ticTacToe = {
    player: ,
    playerMove: ,
    currentPlayer: ,
    disabledSpaces: ,
    games: [],
    gameRules: ,
}