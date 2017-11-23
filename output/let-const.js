'use strict';

// 'let' and 'const'
function showMyName(bool) {
	if (bool) {
		var _goodName = 'Saqib';
		console.log(_goodName); // Saqib.
	} else {
		console.log(goodName); // error.
	}
}

showMyName(false);