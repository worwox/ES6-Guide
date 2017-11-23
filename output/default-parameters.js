"use strict";

// ES6 permits default parameters.

// Discount Function.
function discount(price) {
	var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
	// Default discount = 10%
	console.log(price - price * discount);
}

// Call function.
discount(100);