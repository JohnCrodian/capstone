var counter = 0

function ThreeGuesses() {
	this.clickCounter = document.getElementById("submit1").addEventListener("click", function(){
	counter = counter + 1;
		})

	this.guesses = document.getElementById("submit1").addEventListener("click", function () {
	var word1 = "weltschmerz"
	var guess1 = document.getElementById("guess").value;
	var letter1 = word1.includes(guess1);
	if (letter1 == true) {
	 var showGuess = document.getElementsByClassName(guess1);
	 document.getElementById("instructions").innerHTML = "YES, " + guess1 + " is in the funky word";
	 for (i = 0; i < showGuess.length; i++) {
	 	showGuess[i].style.visibility = "visible";
	 }
	 
	}
	else {
	 	document.getElementById("instructions").innerHTML="Sorry, that letter is not in the word"
	 }
	if (counter === 5) {
		document.getElementById("wordGuess").style.visibility = "visible";
	}
	lastGuess();
	document.getElementById("guess").value = "";
	
})

	function lastGuess () {
			document.getElementById("submit2").addEventListener("click", function () {
			var word1 = "weltschmerz"
			var wordGuess = document.getElementById("finalguess").value;
			console.log(wordGuess);
				if (wordGuess == word1) {
					alert("Correct");
				}
				else {
					alert("Wrong");
				}
			})	
		}

}//ends object "ThreeGuesses"


var wordGame = new ThreeGuesses ();

