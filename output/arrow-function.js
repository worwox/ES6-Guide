'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// In forEach loop, function(param1, index, arr)... is
// replaced by (param1, index, arr) => ....

// Array of chocolates.
var chocolates = ['Dairy Milk', 'Kit Kat', 'Mars', 'Toblerone', 'Galaxy'];

// If you pass one parameter i.e omit index or arr,
// then you may omit brackets around parameters,
// e.g if use chocolates only, ....(chocolate => ....

// Print each item.
chocolates.forEach(function (chocolate, index) {
	return console.log(chocolate, index);
});

// Time to check map function.
console.log('Map works with arrow like a charm! ;)');

// Mapping with ' is delicious'.
var praiseChocolate = chocolates.map(function (chocolate) {
	return chocolate + ' is delicious';
});
// Print praiseChocolate.
console.log(praiseChocolate);

// Time to check 'this' thing ;).
console.log("Let's check 'this' thing");

// In JS, in function of forEach, 'this' returns
// undefined, if not passed as argument. While in
// arrow function, it returns array that is being
// traversed.

// Person class.

var Person = function () {
	// Constructor with favorite places array.
	function Person() {
		var favPlaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['Lahore'];

		_classCallCheck(this, Person);

		this.favPlaces = favPlaces;
	}

	// Log all favPlaces of person.


	_createClass(Person, [{
		key: 'log',
		value: function log() {
			var _this = this;

			this.favPlaces.forEach(function () {
				return console.log(_this);
			}); // () assumes no argument is passed.
		}
	}]);

	return Person;
}();

// Time to check.


new Person().log();