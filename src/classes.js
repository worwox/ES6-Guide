// ES6 introduces classes notation that support
// static methods and considered first class
// citizens i.e. can be passed to the functions.
// Getters setters are also allowed.

// User class declaration.
class User {
	// Default constructor.
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}

	// Name getter
	get currName() {
		return this.name;
	}

	// Static register function.
	static register(...args){
		return new User(...args);
	}

	// Change email function.
	changeEmail(newEmail) {
		this.email = newEmail;
	}
}

// Create User object.
let user = User.register('Saqib', 'me@saqibameen.com');
user.changeEmail('hello@saqibameen.com');
console.log(user.email);

// Checking getter.
console.log(user.currName);

// Function that takes class as argument.
function log(user) {
	console.log(user.name, user.email);
}

// Calling log function.
log ( new User('Saqib', 'me@saqibameen.com'));
