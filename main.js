var inquirer = require('inquirer');
var Letter = require('./letter.js')
var game = require ('./game.js');


var word = game.selectWord();
var selectedWord = word.word;
var letters = [];
for (var i = 0; i < selectedWord.length; i++) {
	letters.push(new Letter (selectedWord.charAt(i)));
}

var guessesLeft = 10;
makeGuess();

function makeGuess() {
	displayWord();
	inquirer.prompt({name: "letter", message: "Please guess a letter:"}).then(function(answer) {
		if (word.checkLetter(answer.letter, letters) == true) {
			console.log ("Good Guess");
		}

		else {
			guessesLeft --;
			if (guessesLeft > 0) {
				console.log("Incorrect. You have " + guessesLeft + " guesses left.");
			}
		
		else {
			console.log("Incorrect. Game over.");
		}

		}

		if (word.checkIfSolved(letters) == false) {
			if (guessesLeft > 0) {
				makeGuess();
			}
		}

		else {
			displayWord();
			console.log("You win!");
		}
 	}); 
}

function displayWord() {
	var displayedWord = "";
	for (var i = 0; i < letters.length; i++) {
		displayedWord += letters[i].printLetter();
		displayedWord += " ";
	}

	console.log(displayedWord);

}