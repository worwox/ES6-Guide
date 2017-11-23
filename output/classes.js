'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ES6 introduces classes notation that support
// static methods and considered first class
// citizens i.e. can be passed to the functions.
// Getters setters are also allowed.

// User class declaration.
var User = function () {
	// Default constructor.
	function User(name, email) {
		_classCallCheck(this, User);

		this.name = name;
		this.email = email;
	}

	// Name getter


	_createClass(User, [{
		key: 'changeEmail',


		// Change email function.
		value: function changeEmail(newEmail) {
			this.email = newEmail;
		}
	}, {
		key: 'currName',
		get: function get() {
			return this.name;
		}

		// Static register function.

	}], [{
		key: 'register',
		value: function register() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return new (Function.prototype.bind.apply(User, [null].concat(args)))();
		}
	}]);

	return User;
}();

// Create User object.


var user = User.register('Saqib', 'me@saqibameen.com');
user.changeEmail('hello@saqibameen.com');
console.log(user.email);

// Checking getter.
console.log(user.currName);

// Function that takes class as argument.
function log(user) {
	console.log(user.name, user.email);
}

log(new User('Saqib', 'me@saqibameen.com'));