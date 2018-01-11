/**
 * ES6 Proxies in Action.
 *
 * Resource: http://www.zsoltnagy.eu/es6-proxies-in-practice/
 */

class Person {
    /**
     * Default Constructor.
     *
     * Takes first name, last name, and age.
     *
     * @param {String} firstName
     * @param {String} lastName
     * @param {Number} age
     */
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

// Instanciating Person class.
let john = new Person('John', 'Doe', 24);

// Defining handler with trap `get`.
let handler = {
    get: (target, key) => { // Trap declaration, where target = john.
        console.log(`john[${key}] was accessed`); // Prints the accessed key.
        return key in target ? // If key exists.
            target[key] : // Return the key.
            'key does not exist'; // else, returns custom message.
    }
}

// Defining proxy with target `john`.
let johnProxy = new Proxy(john, handler);

// Accessing the properties using the proxy.
console.log(johnProxy.firstName); // john[firstName] was accessed.john
console.log(johnProxy.occupation); // john[occupation] was accessed.key does not exist