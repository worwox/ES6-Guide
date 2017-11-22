'use strict';

// 'let' and 'const' are just replacement of 'var'
// with the fact that they have block scope, while
// 'var' has function scope.
// 'let' and 'const' are different in the sense that
// 'const' can't be re-assigned, while 'let' can be.
// REMEMBER: const is not immutable.

// Simple function to explain 'var' & 'const'.
function showMyName(bool) {
	if (bool) {
		var _goodName = 'Saqib';
		_goodName = 'Ali'; // 'var' allow this while 'const' doesn't.
		console.log(_goodName); // Saqib.
	} else {
		console.log(goodName); // Error, even if const is used.
	}
}
// Function Call.
showMyName(true);

// Time to show 'const' isn't immmutable.
console.log('const and immutablity');

// Creating const obj.
var myName = {
	firstName: 'Saqib',
	lastName: 'Khan'
	// Printing const.
};console.log(myName);

// Modifying const.
myName.lastName = 'Ameen';

// Printing const.
console.log(myName);