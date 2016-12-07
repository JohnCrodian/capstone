var firstGame = new FiveGuesses ("weltschmerz", "ennui", "platypus");
// var secondWord = new FiveGuesses ("ennui");
// var thirdWord = new FiveGuesses ("platypus");
var secondCounter = 0;
var counter = 0;
var score = 0;

function FiveGuesses(word1, word2, word3) {


	this.clickCounter = document.getElementById("submit1").addEventListener("click", function(){
	counter = counter + 1;
		})

	this.guesses = document.getElementById("submit1").addEventListener("click", function () {
	if (secondCounter == 0) {
		var word = word1;
	}
	if (secondCounter == 1) {
		var word = word2;
	}
	if (secondCounter == 2) {
		var word = word3;
	}
	var guess1 = document.getElementById("guess").value;

	var letter1 = word.includes(guess1);
	if (letter1 == true) {
	 var showGuess = document.getElementsByClassName(guess1);
	 document.getElementById("instructions").innerHTML = "YES, " + guess1 + " is in the funky word";
	 for (i = 0; i < showGuess.length; i++) {
	 	showGuess[i].style.visibility = "visible";
	 }
	 score = score + 100;
	 document.getElementById("wrongletters").innerText += guess1 + ", ";
	 document.getElementById("score").innerHTML = "Score:" + score;
	}
	else {
	 	document.getElementById("instructions").innerHTML="Sorry, " + guess1 + " is not in the word"
		document.getElementById("wrongletters").innerText += guess1 + ", ";	 
	 }
	if (counter === 5) {
		document.getElementById("guessBox1").style.visibility = "hidden";
		document.getElementById("wordGuessInstructions").innerText="You're out of letter guesses. Guess the word";
	}
	document.getElementById("guess").value = "";
	
})

this.guessTheWord = 
			document.getElementById("submit2").addEventListener("click", function () {
			if (secondCounter == 0) {
				var word = word1;
			}
			if (secondCounter == 1) {
			var word = word2;
			}
			if (secondCounter == 2) {
				var word = word3;
			}
			var guessEntered = false;
			var wordGuess = document.getElementById("finalguess").value;
				if (wordGuess === word) {
					document.getElementById("result").innerHTML += "<h2>Correct!</h2>"
					if (counter === 0) {
						score = score + 1000000;
					}
					if (counter === 1) {
						score = score + 1000;
					}
					if (counter === 2) {
						score = score + 750;
					}
					if (counter === 3) {
						score = score + 500;
					} 
					if (counter === 4) {
						score = score + 250;
					}
					if (counter === 5) {
						score = score + 100;
					}
				document.getElementById("score").innerHTML = "Score: " + score;
				}	
				else {
					score = score - 500;
					document.getElementById("result").innerHTML += "<h2>Wrong, the word was " + word + "</h2>"
					document.getElementById("score").innerHTML = "Score: " + score;
				}
				counter = 0;
			})

	this.newGame = 
		document.getElementById("playagain").addEventListener("click", function (){
			secondCounter = secondCounter + 1;
			document.getElementById("wrongletters").innerHTML = "";
			document.getElementById("wordGuessInstructions").innerHTML = "If you think you know the word, guess it below";
			document.getElementById("finalguess").value = "";
			document.getElementById("instructions").innerHTML = "Guess your first letter!"
			document.getElementById("result").innerHTML = "";
			document.getElementById("guessBox1").style.visibility = "visible";
			if (secondCounter === 1) {
				document.getElementById("wordToGuess").innerHTML = '<h2>Word is Below:</h2><p><span class="borderbox"><span class="letter e">e</span></span><span class="borderbox"><span class="letter n">n</span></span><span class="borderbox"><span class="letter n">n</span></span><span class="borderbox"><span class="letter u">u</span></span><span class="borderbox"><span class="letter i">i</span></span></p>'

			}
			if (secondCounter === 2) {
				document.getElementById("wordToGuess").innerHTML = '<h2>Word is Below:</h2><p><span class="borderbox"><span class="letter p">p</span></span><span class="borderbox"><span class="letter l">l</span></span><span class="borderbox"><span class="letter a">a</span></span><span class="borderbox"><span class="letter t">t</span></span><span class="borderbox"><span class="letter y">y</span></span><span class="borderbox"><span class="letter p">p</span></span><span class="borderbox"><span class="letter u">u</span></span><span class="borderbox"><span class="letter s">s</span></span></p>'

			}
		})
	
}//ends object "FiveGuesses"


//Create an array of the declared object, make a for loop at the end of the function
//that declares the next object in the array. Add a method at the beginning of the
//object to reset everything.



