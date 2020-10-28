
const newCanvas = document.getElementById('game-board2');



const context2 = newCanvas.getContext('2d');


const foe2 = new Foe();

function drawFoe2() {
  console.log("foe2 loaded");
  context2.drawImage(
    foe2.image,
    foe2.col * tileSize,
    foe2.row * tileSize,
    tileSize,
    tileSize
  );


}

const player2 = new Character(4, 5);

function drawPlayer2() {
  console.log("player2 loaded");
  context2.drawImage(
    player2.images[player.direction],
    player2.col * tileSize,
    player2.row * tileSize,
    tileSize,
    tileSize
  );
}

drawEverything2();


function drawEverything2() {

//console.log(frames);
  context2.clearRect(0, 0, width, height);
  drawGrid();
  drawFoe2();
  drawPlayer2();
}