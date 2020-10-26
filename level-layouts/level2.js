const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;
const tileCount = 10;
const tileSize = width / tileCount;

//Put grid here for later
function drawGrid() {
  context.lineWidth = 3;

  // Draw the vertical lines
  for (let x = 0; x <= height; x += tileSize) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    //context.stroke();
  }

  // Draw the horizontal lines
  for (let y = 0; y <= width; y += tileSize) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    //context.stroke();
  }
}


class Character {
  constructor(initialCol, initialRow) {
    this.col = initialCol;
    this.row = initialRow;
    this.direction = 'down';

    const imagePaths = {
      left: 'images/businessman-LEFT.png',
      up: 'images/businessman-UP.png',
      right: 'images/businessman-RIGHT.png',
      down: 'images/businessman-DOWN.png'
    };

    //saving images in character
    this.images = {};

    //loop images
    for (let direction in imagePaths) {
      this.images[direction] = new Image();
      this.images[direction].src = imagePaths[direction];
    }
  }

  moveUp() {
    //If statement for boundaries
    if (player.row > 0) { //|| player.row != object.row) {//(player.row > object.row && player.col > foe.col || player.row < object.row && player.col < foe.col)){
      this.row--;
      }
    this.direction = 'up';
  }

  moveDown() {
    //If statement for boundaries
    if (player.row < 9) {//|| player.row != object.row){//(player.row > object.row && player.col > foe.col || player.row < object.row && player.col < foe.col)) {
      this.row++;
      }
    this.direction = 'down';
  }

  moveLeft() {
    //If statement for boundaries
    if (player.col > 0) {//|| player.col != object.col) {//(player.row > object.row && player.col > foe.col || player.row < object.row && player.col < foe.col)){
      this.col--;
      }
    this.direction = 'left';
  }

  moveRight() {
    //If statement for boundaries
    if (player.col < 9) {//|| player.col != object.col) {//(player.row > object.row && player.col > foe.col || player.row < object.row && player.col < foe.col)){
      this.col++;
      }
    this.direction = 'right';
    
  }
}

const player = new Character(4, 5);

function drawPlayer() {
  context.drawImage(
    player.images[player.direction],
    player.col * tileSize,
    player.row * tileSize,
    tileSize,
    tileSize
  );
}
  

//enemy code goes here
class Foe {
  constructor() {
    this.setRandomPosition();

    this.image = new Image();
    this.image.src = 'images/boss-up.png'
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * tileCount);
    this.row = Math.floor(Math.random() * tileCount);
  }

  moveFoe(){
    
  }
}

const foe = new Foe();

function drawFoe() {
  context.drawImage(
    foe.image,
    foe.col * tileSize,
    foe.row * tileSize,
    tileSize,
    tileSize
  );


}


class Object {
  constructor(initialCol, initialRow) {
    this.col = initialCol;
    this.row = initialRow;
    this.image = new Image();
    this.image.src = 'images/object1.png'
  }
}

const object = new Object(4,3);
const object2 = new Object(5,3);

function drawObject() {
  context.drawImage(
    object.image,
    object.col * tileSize,
    object.row * tileSize,
    tileSize,
    tileSize
  );
}

function drawObject2() {
  context.drawImage(
    object2.image,
    object2.col * tileSize,
    object2.row * tileSize,
    tileSize,
    tileSize
  );
}



//start not enemy code
document.addEventListener('keydown', event => {
  event.preventDefault();//stops moving screen

  switch (event.keyCode) {
    case 37:
      //if (player.row > object.row && player.col > foe.col || player.row < object.row && player.col < foe.col)
      //{
      player.moveLeft();
      //}
      break;
    case 38:
      //if (player.row > object.row && player.col > foe.col || player.row < object.row && player.col < foe.col)
      //{
      player.moveUp();
      //}
      break;
    case 39:
      //if (player.row > object.row && player.col > foe.col || player.row < object.row && player.col < foe.col)
      //{
      player.moveRight();
      //}
      break;
    case 40:
      //if (detectObject())
      //{
      player.moveDown();
      //}
      break;
  }

  // Check if the user is on the foe... POTENTIAL COLLISON DATA SECTION, OR DEATH SECTION
  if (player.row === foe.row && player.col === foe.col) {
    frames = 0;
    player.row = 6;
    player.col = 4;
    foe.setRandomPosition();
  } 
  
    
  if (frames % 2 === 1){
    foe.setRandomPosition();
    }

  //Collision detection
  function detectObject() {
    if (player.col === object.col && player.row === object.row) {
      console.log("Object here");
      
    }
  }
  detectObject();

  // Code for getting to next world
  if (player.col === 9 && player.row === 4) {
    console.log("next level loading...")
    document.getElementById('game-board-2').style.display = 'block';
  }


  // Draw everything
  drawEverything();
});
let frames = 0;
function drawEverything() {
  frames++;
console.log(frames);
  context.clearRect(0, 0, width, height);
  drawGrid();
  drawFoe();
  drawPlayer();
  drawObject();
  drawObject2();
}

setTimeout(drawEverything, 500);
