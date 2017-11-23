// Array of chocolates.
let chocolates = ['Dairy Milk', 'Kit Kat', 'Mars', 'Toblerone', 'Galaxy'];

// Print each item.
// If you pass one parameter i.e omit index or arr,
// then you may omit brackets around parameters,
// e.g if use chocolates only, ....(chocolate => ....
chocolates.forEach((chocolate,index) => console.log(chocolate,index));

// Time to check map function.
console.log('Map works with arrow like a charm! ;)');

// Mapping with ' is delicious'.
let praiseChocolate = chocolates.map( chocolate => chocolate + ' is delicious' );
// Print praiseChocolate.
console.log(praiseChocolate);

