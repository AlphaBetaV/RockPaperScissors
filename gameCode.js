/*

const hand = ["rock", "paper", "scissors"];
var playerWins = 0
var computerWins = 0
let computerPlay;
let playerSelection;
var validHand;

for (y = 0; y < 5; y++) {

    computerPlay = hand[getRandomInt(3)];

    playerSelection = prompt("Type rock, paper, or scissors")
    playerSelection = playerSelection.toLowerCase();

    validHand = false;
    handValidator(playerSelection)

    playRound(playerSelection, computerPlay)
    console.log(`player played ${playerSelection}`)
    console.log(`computer played ${computerPlay}`)

    console.log(`player wins are ${playerWins}, computer wins are ${computerWins}`)
}

if (playerWins == computerWins)
    console.log("The result of the whole game is a tie")
else if (playerWins > computerWins)
    console.log("The player wins the whole game")
else console.log("The computer wins the whole game")

function playRound(playerSelection, computerPlay) {
    if (playerSelection === "") {
        console.log("Undefined")
    }
    else if (!validHand) {
        console.log("Pick a valid hand")
    }
    else {
        result(playerSelection, computerPlay)
    }
}

function handValidator(playerSelection) {
    for (x = 0; x < 3; x++)
        if (playerSelection == hand[x])
            validHand = true;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function result(playerSelection, computerPlay) {
    if (playerSelection == computerPlay) {
        console.log("tie game")
    }
    else if (playerSelection == hand[0] && computerPlay == hand[2]) {
        console.log(`You win ${playerSelection} beats ${computerPlay}`)
        playerWins++;
    }
    else if (playerSelection == hand[1] && computerPlay == hand[0]) {
        console.log(`You win ${playerSelection} beats ${computerPlay}`)
        playerWins++;
    }
    else if (playerSelection == hand[2] && computerPlay == hand[0]) {
        console.log(`You win ${playerSelection} beats ${computerPlay}`)
        playerWins++;
    }
    else {
        console.log(`You lose ${computerPlay} beats ${playerSelection}`)
        computerWins++;
    }

}

*/

/* New design criteria

In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
For now, remove the logic that plays exactly five rounds.
Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.logs into DOM methods.
Display the running score, and announce a winner of the game once one player reaches 5 points.
*/

// setting up the variables to be called
const buttons = document.querySelectorAll('button');
const hand = ["rock", "paper", "scissors"]
var playerScore = 0
var computerScore = 0

// used random numbers to get a random computer played hand
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

// checks to see whether a win, tie, or loss happened
function roundWinner(playerHand, computerHand) {
    //player wins with rock
    if (playerHand === 'rock' && computerHand === 'scissors') {
        updateText(playerHand, computerHand, 1)
    }
    // player wins with paper
    else if (playerHand === 'paper' && computerHand === 'rock') {
        updateText(playerHand, computerHand, 1)

    }
    // player wins with scissors
    else if (playerHand === 'scissors' && computerHand === 'paper') {
        updateText(playerHand, computerHand, 1)

    }
    // tie game for player and computer
    else if (playerHand === computerHand) {
        updateText(playerHand, computerHand, 2)

    }
    // computer wins with whatever
    else {
        updateText(playerHand, computerHand, 0)

    }
}

// separated match results from updating score because I thought it'd be easier to shrink the amount of info in this function
function updateText (hand1, hand2, outcome) {
    if (outcome == 2) {
        x = document.getElementsByClassName('player')
        x[0].innerText ='player chose: '+hand1
        y = document.getElementsByClassName('computer')
        y[0].innerText = 'computer chose  '+hand2
        z = document.getElementsByClassName('outcome')
        z[0].innerText = 'tie round'
    }
    else if (outcome) {
        x = document.getElementsByClassName('player')
        x[0].innerText ='player chose: '+hand1
        y = document.getElementsByClassName('computer')
        y[0].innerText = 'computer chose  '+hand2
        z = document.getElementsByClassName('outcome')
        z[0].innerText = 'player wins'
        updateScore(1)
    }
    else {
        x = document.getElementsByClassName('player')
        x[0].innerText ='player chose: '+hand1
        y = document.getElementsByClassName('computer')
        y[0].innerText = 'computer chose  '+hand2
        z = document.getElementsByClassName('outcome')
        z[0].innerText = 'computer wins'
        updateScore(0)
    }
}

function updateScore(boolean) {
    // case if player wins
    if (boolean) {
        x = document.getElementsByClassName('varPlayer')
        playerScore++
        x[0].innerText = playerScore.toString()
    }
    // case if computer wins
    else {
        y = document.getElementsByClassName('varComputer')
        computerScore++
        y[0].innerText = computerScore.toString()
    }
    if (playerScore == 5 || computerScore == 5) {
        endGame()
    }
}

// resets the game by reloading the page after x amount of seconds to make this easier to build
function endGame() {
    // case for if player wins
    if (playerScore == 5) {
        x = document.getElementsByClassName('winner')
        x[0].innerText = 'Congratulations, you have won. This game will restart in 5 seconds. Good luck on your next game'
    }
    // case for if computer wins
    else {
        x = document.getElementsByClassName('winner')
        x[0].innerText = 'The opposite of congratulations, you have lost. This game will restart in 5 seconds. Good luck on your next game'
    }
    setTimeout(() => location.reload(), 5000)
}

// initiates each round based button clicks
function playRound(e) {
    playerSelection = this.id
    computerSelection = hand[getRandomInt(3)];
    roundWinner(playerSelection, computerSelection)
}

// captures button clicks and starts the game
buttons.forEach(button => button.addEventListener('click', playRound, {
    capture: false,
}));

//computerPlay = hand[getRandomInt(3)];
//playerSelection = prompt("Type rock, paper, or scissors")
//playerSelection = playerSelection.toLowerCase();
//validHand = false;
//handValidator(playerSelection)
//playRound(playerSelection, computerPlay)
//console.log(`player played ${playerSelection}`)
//console.log(`computer played ${computerPlay}`)
//console.log(`player wins are ${playerWins}, computer wins are ${computerWins}`)