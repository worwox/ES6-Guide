'use strict';

// Array of chocolates.
var chocolates = ['Dairy Milk', 'Kit Kat', 'Mars', 'Toblerone', 'Galaxy'];

// Print each item.
chocolates.forEach(function (chocolate) {
  return console.log(chocolate);
});

// Time to check map function.
console.log('Map works with arrow like a charm! ;)');

// Mapping with ' is delicious'.
var praiseChocolate = chocolates.map(function (chocolate) {
  return chocolate + ' is delicious';
});
// Print praiseChocolate.
console.log(praiseChocolate);