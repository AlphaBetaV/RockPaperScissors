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