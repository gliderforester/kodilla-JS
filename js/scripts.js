// plik scripts.js

function getTriangleArea(a, h) {
  if ((a <= 0) || (h <=0)) {
    return 'Nieprawidłowe dane';
  } else {
    return a * h/2;
      }
}
var triangle1Area = getTriangleArea(14,6);
var triangle2Area = getTriangleArea(7,8);
var triangle3Area = getTriangleArea(0,34);
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);




