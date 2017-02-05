// plik scripts.js
var getBtn = document.getElementById('addElem'),
  getLst = document.getElementById('Lista'),
  liNumber = document.getElementsByTagName('li');

getBtn.addEventListener('click', function () {
  getLst.innerHTML += '<li>item ' +liNumber.length+'</li>';

});


