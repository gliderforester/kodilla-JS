// plik scripts.js

var a = prompt("podaj warość parametru a: ");
var b = prompt("podaj warość parametru b: ");
var value = ((a * a) + (2 * a * b) - (b * b));

console.log('Wynik działania to: ' + value);
alert('Wynik działania to: ' + value);

if (value > 0) {
  console.log('Wynik jest liczbą dodatnią');
  alert('Wynik jest liczbą dodatnią');
} else if (value < 0) {
  console.log('Wynik jest liczbą ujemną');
  alert('Wynik jest liczbą ujemną');
} else {
  console.log('Wynik jest zerem');
  alert('Wynik jest zerem');
}
