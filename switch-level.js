let introPage = document.getElementById('start-game');
let firstLevel = document.getElementById('first-level');
let secondLevel = document.getElementById('second-level');
let thirdLevel = document.getElementById('third-level');
let getRidJs = document.getElementById('no-js');

//intro screen playing
introPage.style.display = 'block';
firstLevel.style.display = 'none';
secondLevel.style.display = 'none';
thirdLevel.style.display = 'none';

//First level playing
function callFirstLevel() {
introPage.style.display = 'none';
firstLevel.style.display = 'block';
secondLevel.style.display = 'none';
thirdLevel.style.display = 'none';
}
//Adventure level playing
function callSecondLevel() {
  introPage.style.display = 'none';  
  firstLevel.style.display = 'none';
  secondLevel.style.display = 'block';
  thirdLevel.style.display = 'none';
  //firstLevel.innerHTML = '';
}
//Possible third level playing
function callThirdLevel() {
  introPage.style.display = 'none'; 
  firstLevel.style.display = 'none';
  secondLevel.style.display = 'none';
  thirdLevel.style.display = 'block';
  //secondLevel.innerHTML = '';
  //getRidJs.innerHTML = '';
}

function callRestart(){
    introPage.style.display = 'block';
    firstLevel.style.display = 'none';
    secondLevel.style.display = 'none';
    thirdLevel.style.display = 'none';
    
}

document.getElementById('start-button').onclick = () => {
    callFirstLevel();
}

document.getElementById('restart-button').onclick = () => {
    frames = 0;
    foeFrames = 0;
    player.score = 0;
    player.row = 1;
    player.col = 1;
    foe.setRandomPosition();
    callRestart();
}