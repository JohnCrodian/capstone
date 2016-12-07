// Question 1 (I mostly remembered my solution from class and was able to finish this in 5 minutes) 

var arr = [3, 3, 3] //array declared

function stringy (){ 
	for (i = 0; i < arr.length; i++) { //standard for loop to traverse the array
		if (i % 2 === 0) { //checks if the position in the array is even, or 0
			console.log(1) //logs 1 to console if so
		}
		else {
			console.log(0) //logs 0 to console if positon in array is odd.
		}
	}
}

//Question 2. I got this to work in 20 minutes exactly. If you go to the console and type "flipped.reverse()"
//it should give the correct answer. Ran out of time trying to get it to run on its own.

var int = "348597" //integer defined
var flipped = []	//empty array to push result to

function backwards () {
	for (var i = 0; i < int.length; i++) { //standard for loop to traverse the array
		var digit = int.charAt(i); //"charAt" treats values in a string like positions in an array.
									//This might have been useful in question 4 had I remembered it.
		flipped.push(digit);		//pushes the single integers from the string into the empty array
	}
	console.log(flipped.reverse());//Supposed to log the reversed array to the console. Works if you do it yourself.
}

//Question 3. 

var result = [0, 1]; //sets the array and gives the first two values

function fib () {

	for (i = 1; i < 20; i++) { 
	//for loop starts at the second position of the array and traverses up to the second position.
	var num = result[i] + result[i-1]; 
	//declares a new variable that adds the value of the array position to the value of the position before it.
	result.push(num);
	//pushes the sum to the array
	}
}


//Question 4 //Took a really long time getting the user input thing to work.

function checkCoupon () {
document.getElementById("submit").addEventListener("click", function () { //adds event listener for submit button
	var expire = document.getElementById("userExpiration").value; //sets variable "expire" to user input
	console.log(expire.length); //I was trying to find a way to get the value at the end of the string
								// without knowing how long the string was in order to check the year. As far as I got.
})

}

checkCoupon()
