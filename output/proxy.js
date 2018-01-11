'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ES6 Proxies in Action.
 *
 * Resource: http://www.zsoltnagy.eu/es6-proxies-in-practice/
 */

var Person =
/**
 * Default Constructor.
 *
 * Takes first name, last name, and age.
 *
 * @param {String} firstName
 * @param {String} lastName
 * @param {Number} age
 */
function Person(firstName, lastName, age) {
    _classCallCheck(this, Person);

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

// Instanciating Person class.


var john = new Person('John', 'Doe', 24);

// Defining handler with trap `get`.
var handler = {
    get: function get(target, key) {
        // Trap declaration, where target = john.
        console.log('john[' + key + '] was accessed'); // Prints the accessed key.
        return key in target ? // If key exists.
        target[key] : // Return the key.
        'key does not exist'; // else, returns custom message.
    }

    // Defining proxy with target `john`.
};var johnProxy = new Proxy(john, handler);

// Accessing the properties using the proxy.
console.log(johnProxy.firstName); // john[firstName] was accessed.john
console.log(johnProxy.occupation); // john[occupation] was accessed.key does not exist