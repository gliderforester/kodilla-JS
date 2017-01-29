// plik scripts.js
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
  var addedName = allNames.push(newName);
} else {
      console.log('To imię jest już w tabeli');
}

console.log(allNames);
