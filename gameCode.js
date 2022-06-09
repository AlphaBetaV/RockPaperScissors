const hand = ["rock", "paper", "scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

let computerPlay = hand[getRandomInt(3)];

let playerSelection = "rock";
playerSelection = playerSelection.toLowerCase();

var validHand = false;
handValidator(playerSelection)

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

function result(playerSelection, computerPlay) {
    if (playerSelection == computerPlay) {
        console.log("tie game")
    }
    else if (playerSelection == hand[0] && computerPlay == hand[2]) {
        console.log("player wins")
    }
    else if (playerSelection == hand[1] && computerPlay == hand[0]) {
        console.log("player wins")
    }
    else if (playerSelection == hand[2] && computerPlay == hand[0]) {
        console.log("player wins")
    }
    else {
        console.log("computer wins")
    }

}

playRound(playerSelection, computerPlay)
console.log(`player played ${playerSelection}`)
console.log(`computer played ${computerPlay}`)