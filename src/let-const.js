// 'let' and 'const'
function showMyName( bool ) {
	if ( bool ) {
		let goodName = 'Saqib';
		console.log( goodName ); // Saqib.
	} else {
		console.log( goodName ); // error.
	}
}

showMyName( false );
