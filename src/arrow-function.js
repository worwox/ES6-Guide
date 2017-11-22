// In forEach loop, function(param1, index, arr)... is
// replaced by (param1, index, arr) => ....

// Array of chocolates.
let chocolates = ['Dairy Milk', 'Kit Kat', 'Mars', 'Toblerone', 'Galaxy'];

// If you pass one parameter i.e omit index or arr,
// then you may omit brackets around parameters,
// e.g if use chocolates only, ....(chocolate => ....

// Print each item.
chocolates.forEach((chocolate,index) => console.log(chocolate,index));

// Time to check map function.
console.log('Map works with arrow like a charm! ;)');

// Mapping with ' is delicious'.
let praiseChocolate = chocolates.map( chocolate => chocolate + ' is delicious' );
// Print praiseChocolate.
console.log(praiseChocolate);

// Time to check 'this' thing ;).
console.log("Let's check 'this' thing");

// In JS, in function of forEach, 'this' returns
// undefined, if not passed as argument. While in
// arrow function, it returns array that is being
// traversed.

// Person class.
class Person {
	// Constructor with favorite places array.
	constructor(favPlaces = ['Lahore']) {
		this.favPlaces = favPlaces;
	}

	// Log all favPlaces of person.
	log() {
		this.favPlaces.forEach(() => console.log(this)); // () assumes no argument is passed.
	}
}

// Time to check.
new Person().log(); // Person obj.

