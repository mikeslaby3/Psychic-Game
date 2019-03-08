// Creates an array that lists computer options a-z
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

// Creating variables to hold the number of wins, losses, guesses left, and guesses.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossedText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesText = document.getElementById("guesses-text");

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    console.log(event.key);

    var userGuess = event.key;

    console.log("checking if same", userGuess === computerGuess);

    if (userGuess === computerGuess) {
        wins++;
        resetForNextTurn();
    } else {
        guessesLeft--;
        console.log(guessesLeft);
        if (guessesLeft === 0) {
            resetForNextTurn();
            losses++;
        }
    } 

}

function resetForNextTurn () {
    guessesLeft = 9;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
}
