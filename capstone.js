var firstWord = new FiveGuesses ("weltschmerz");
// var secondWord = new FiveGuesses ("ennui");
// var thirdWord = new FiveGuesses ("platypus");
var secondCounter = 0;
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
					document.getElementById("result").innerHTML += "<h2>Correct!</h2>"
					guessEntered = true;
				}	
				else {
					document.getElementById("result").innerHTML += "<h2>Wrong, the word was " + word1 + "</h2>"
					guessEntered = true;
				}
				counter = 0;
			})
	}
	this.newGame = 
		document.getElementById("playagain").addEventListener("click", function (){
			secondCounter = secondCounter + 1;
			document.getElementById("wrongletters").innerHTML = "";
			document.getElementById("wordGuess").style.visibility = "hidden";
			document.getElementById("instructions").innerHTML = "Guess your first letter!"
			document.getElementById("result").innerHTML = "";
			if (secondCounter === 1) {
				document.getElementById("wordToGuess").innerHTML = '<h2>Word is Below:</h2><p><span class="letter e">e</span><span class="letter n">n</span><span class="letter n">n</span><span class="letter u">u</span><span class="letter i">i</span></p>'

			}
		})
	
}//ends object "FiveGuesses"


//Create an array of the declared object, make a for loop at the end of the function
//that declares the next object in the array. Add a method at the beginning of the
//object to reset everything.



