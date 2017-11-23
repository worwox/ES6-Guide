// Rest allows to take undetermined number of inputs.
// Spread splits single array into multiple items.

// Rest implementation.

// Array sum function.
function sum(...numbers) {
	return numbers.reduce((prev, current) => prev + current); // Arrow function used.
}

// Sum function call.
console.log(sum(1, 2, 4, 6)); // Add as much argument as you want.


// Spread implementation.

// 2 numbers sum function.
function sumSeparate(x,y) {
	return x + y;
}

// Array of numbers to be summed.
let num = [3, 5];

// Call separate sum function.
console.log(sumSeparate(...num));

// In case of multiple arguments keep
// rest arguments at the end. eg. sum(x, ...num)
