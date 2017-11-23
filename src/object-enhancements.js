// Object enhancement introduces objects shorthand notations
// and objects destructuring.

// Return person object.
function getPerson() {
	let name = 'Saqib';
	let age = 20;

	// Object shorthands.
	return { // Instead of ...{ name: name, age: age ...
		name,
		age,
		greet() { // Instead of greet: function(){...
			return `${this.name} says Hello!`;
		},
	};
}

// Function call.
console.log(getPerson().name);
console.log(getPerson().greet());

// Objects destructuring.

// Get a person object.
let person = getPerson();
// Destructure it.
let { age , name } = person;
// Print it.
console.log(name);

// Using objects destructuring in functions.
function foo({name, age}){
	console.log(`${name} is ${age} years old!`);
}

// Call foo.
foo(getPerson());
