let firstLevel = document.getElementById('first-level');
let secondLevel = document.getElementById('second-level');
let thirdLevel = document.getElementById('third-level');
let getRidJs = document.getElementById('no-js');

//First level playing
firstLevel.style.display = 'block';
secondLevel.style.display = 'none';
thirdLevel.style.display = 'none';
//Second level playing
function callSecondLevel() {
  firstLevel.style.display = 'none';
  secondLevel.style.display = 'block';
  thirdLevel.style.display = 'none';
  firstLevel.innerHTML = '';
}
//Adventure playing
function callThirdLevel() {
  firstLevel.style.display = 'none';
  secondLevel.style.display = 'none';
  thirdLevel.style.display = 'block';
  secondLevel.innerHTML = '';
  getRidJs.innerHTML = '';
}