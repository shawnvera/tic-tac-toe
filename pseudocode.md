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
    The program will remember the user's symbols
    The program will remember the location of user symbols on the tic tac toe board
    The program will remember the players
    The program will remember whose the current player
    The program will remember which spaces have been clicked by the user(s)
    The program will remember past games
    The program will remember the game rules

*VARIABLES:*

INIT

    1. renderUI FOR user on the page load
    2. clickable boxes RENDERED on UI FOR user input
    3. boxes fill with symbol according to which player clicks the box
    4. game end when either symbol has 3 in a row or if all boxes are used
    5. UI displays result
    6. reset start button can either be visible for the duration of the game or become visible after result is shown.
    
    END

**Functional**











**Object Oriented**