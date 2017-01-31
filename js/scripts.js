// plik scripts.js

var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var textAfter = text.replace('Papugi', animal.toUpperCase());

console.log(textAfter.slice(0, (textAfter.length/2)));
