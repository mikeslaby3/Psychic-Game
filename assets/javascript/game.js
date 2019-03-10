// Creates an array that lists computer options a-z
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

// Creating variables to hold the number of wins, losses, guesses left, and guesses.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerPick);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    console.log(event.key);

    var userPick = event.key;

    var aToZKey = false;
    for (let index = 0; index < computerChoices.length; index++) {
        if (userPick === computerChoices[index]) {
            aToZKey = true;
        }   
    }

    if (aToZKey == true) {
        guesses.push(userPick);

        console.log("checking if same", userPick === computerPick);
    
        if (userPick === computerPick) {
            wins++;
            resetForNextTurn();
            guesses = [];
            alert("You guessed correctly! It was " + userPick)
        } else {
            guessesLeft--;
            console.log(guessesLeft);
            if (guessesLeft === 0) {
                resetForNextTurn();
                losses++;
                guesses = [];
                alert("You Lose!")
            }
        } 
    
        document.getElementById("wins-text").textContent = wins;
        document.getElementById("losses-text").textContent = losses;
        document.getElementById("guesses-left-text").textContent = guessesLeft;
        document.getElementById("guesses-text").textContent = guesses;
    
    
    }
    
    // This function resets the game following a win or loss
    function resetForNextTurn () {
        guessesLeft = 9;
        computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerPick);
    }
    }


