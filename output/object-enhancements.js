'use strict';

// Object enhancement introduces objects shorthand notations
// and objects destructuring.

// Return person object.
function getPerson() {
	var name = 'Saqib';
	var age = 20;

	// Object shorthands.
	return { // Instead of ...{ name: name, age: age ...
		name: name,
		age: age,
		greet: function greet() {
			// Instead of greet: function(){...
			return this.name + ' says Hello!';
		}
	};
}

// Function call.
console.log(getPerson().name);
console.log(getPerson().greet());

// Objects destructuring.

// Get a person object.
var person = getPerson();
// Destructure it.
var age = person.age,
    name = person.name;
// Print it.

console.log(name);

// Using objects destructuring in functions.
function foo(_ref) {
	var name = _ref.name,
	    age = _ref.age;

	console.log(name + ' is ' + age + ' years old!');
}

// Call foo.
foo(getPerson());