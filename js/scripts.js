// plik scripts.js

var getButtons = document.getElementsByClassName('button');
for (var n = 0; n < getButtons.length; n++) {
  function getButtonName(n) {
    return (getButtons[n].innerText);
  }
  console.log(getButtonName(n));
  alert(getButtonName(n));
}
