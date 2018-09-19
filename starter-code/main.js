/*
	Part 1: We have an array of people's ages, saved in the variable "ages".
	Write a for-loop that will print each of the elements to the console.
*/


var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];
for (var i = 1; i < ages.length; i++ ) {
	console.log(ages[i]);
}


/*
	Part 2: Let's create a new variable, "younger", which holds an empty array.
	Using a for-loop, populate the "younger" array with numbers from the "ages"
	array which are less than or equal to 20.

	Hint: Use the for-loop to go through each element in the "ages" array.

	Hint: Use the array.push() method to add an element to the end of an array.
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
 */

var younger = [];
for (i = 1; i <= 20; i++) {
  if (i <= 20) {
    console.log(younger.push(i));
  }
}



/*
	Part 3: We're comfortable going through an element from beginning to end, but let's
	flip this around. With the new "younger" array you created in the last part,
	print out the elements so that the last element is printed out first, and the
	first element is printed out last.

	Hint: What should the index for your for-loop be initialized to if we want to start
	at the end of the array?

	Hint: What would the conditional for your for-loop look like?
*/


var younger = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (i = younger[19]; i <= 20; i++) {
  if (i <= 20) {
    console.log(younger.reverse(i));
  }
}


/*
	Part 4: Now that you've finished the first 3 parts using a for-loop, repeat the same exercises
	(Part 1, Part 2, and Part 3) using a while-loop.
*/

/* while loop example:

var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}
*/

/*part4-1: We have an array of people's ages, saved in the variable "ages".
	Write a while-loop that will print each of the elements to the console.
*/

var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];
var i = 0;
while (i < ages.length) {
  i++;
  console.log(ages[i]);
}

/*part4-2: */

var younger = [];
i = 0
while (i <= 20) {
      i++;
  if (i <= 20) {
    console.log(younger.push(i));
  }
}

/*part4-3: */

var younger = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

x = younger.length - 1;
while(x >= 0) {
  console.log(younger[x]);
  x = x -1;
  }
  
/*
	Part 5: Create a function, getDayOfWeek, that will tell you what day of the week it is.
	For example, getDayOfWeek(1) would return "Monday", and getDayOfWeek(5) would return "Friday".
	An invalid day of the week should return the string, "Please enter a valid day of the week".

	Hint: Using a "switch" statement might result in cleaner code
EXAMPLE ======


var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}

*/

function dayOfWeek(number) {
  
switch(number) {
  case 1: 
    return 'Monday';
    break;
  case 2: 
    return 'Tuesday';
    break;
  case 3:
    return 'Wednesday';
    break;
  case 4: 
    return 'Thursday';
    break;
  case 5: 
    return 'Friday';
    break;
  case 6: 
    return 'Saturday';
    break;
  case 7: 
    return 'Sunday';
    break;
  default:
      return 'Dude, enter a valid day of the week!';
  }
}

dayOfWeek(7);



/*
	Bonus - Part 6: All this work is making me hungry. Let's create a new function, addPepperoniToPizza,
	that accepts an array of pizza ingredients. If the array of ingredients already contains
	pepperoni, then return the pizza ingredients without doing anything to it. If the array of
	ingredients does not contain pepperoni, then add pepperoni to the array and return it.

	For example, addPepperoniToPizza(['onions', 'olives', 'pineapple']) should return
	['onions', 'olives', 'pineapple', 'pepperoni'].

	And addPepperoniToPizza(['spinach', 'pepperoni', 'mushrooms']) should return
	['spinach', 'pepperoni', 'mushrooms'].

	Hint: Take a look at the array.indexOf() method. How can we use this to check if we have pepperoni
	in our array?
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
*/

function addPepperoniToPizza(toppingsArray){
  //look for pepporoni
  //array.indexOf() method will look for "pepperoni" (returns a -1 if not found)
  if(toppingsArray.indexOf('pepperoni') === -1 ) {
    toppingsArray.push('pepperoni');
    return toppingsArray;
    
  } else {
    return toppingsArray;
    
  }
}
addPepperoniToPizza(['sardines', 'anchovies', 'frogs legs', 'olives', 'pineapple']);
/* addPepperoniToPizza(['spinach', 'pepperoni', 'mushrooms']); */










