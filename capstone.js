var firstWord = new FiveGuesses ("weltschmerz");
// var secondWord = new FiveGuesses ("ennui");
// var thirdWord = new FiveGuesses ("platypus");
var counter = 0;


function FiveGuesses(word) {
	this.clickCounter = document.getElementById("submit1").addEventListener("click", function(){
	counter = counter + 1;
		})

	this.guesses = document.getElementById("submit1").addEventListener("click", function () {
	var word1 = word;
	var guess1 = document.getElementById("guess").value;
	var letter1 = word1.includes(guess1);
	if (letter1 == true) {
	 var showGuess = document.getElementsByClassName(guess1);
	 document.getElementById("instructions").innerHTML = "YES, " + guess1 + " is in the funky word";
	 for (i = 0; i < showGuess.length; i++) {
	 	showGuess[i].style.visibility = "visible";
	 }
	 document.getElementById("wrongletters").innerText += guess1 + ", ";
	}
	else {
	 	document.getElementById("instructions").innerHTML="Sorry, " + guess1 + " is not in the word"
		document.getElementById("wrongletters").innerText += guess1 + ", ";	 
	 }
	if (counter === 5) {
		document.getElementById("wordGuess").style.visibility = "visible";
	}
	lastGuess()
	document.getElementById("guess").value = "";
	
})

	function lastGuess () {
			document.getElementById("submit2").addEventListener("click", function () {
			var guessEntered = false;
			var word1 = word;
			var wordGuess = document.getElementById("finalguess").value;
				if (wordGuess == word1) {
					document.getElementById("wordGuess").innerHTML="<h2>Correct!</h2> <br><button id='playAgain'>Play a New Word</button>";
					guessEntered = true;
				}	
				else {
					document.getElementById("wordGuess").innerHTML="<h2>Wrong, the word was " + word1 + "</h2> <br><button id='playAgain'>Play a New Word</button>"
					guessEntered = true;
				}
				counter = 0;
			})

		}
	
}//ends object "FiveGuesses"


//Create an array of the declared object, make a for loop at the end of the function
//that declares the next object in the array. Add a method at the beginning of the
//object to reset everything.



