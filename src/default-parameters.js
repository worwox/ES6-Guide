// ES6 permits default parameters.

// Discount Function.
function discount(price, discount = 0.1) { // Default discount = 10%
	console.log(price - price * discount);
}

// Call function.
discount (100);
