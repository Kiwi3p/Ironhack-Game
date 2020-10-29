const canvas = document.getElementById('game-board');
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

//divide up into seperate JS files around completion...
class Character {
  constructor(initialCol, initialRow) {
    this.col = initialCol;
    this.row = initialRow;
    this.direction = 'down';
    this.score = 0;

    const imagePaths = {
      left: 'images/main-char-left.png',
      up: 'images/main-char-up.png',
      right: 'images/main-char-right.png',
      down: 'images/main-char-down.png'
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
    if (
      (player.col === object.col && player.row - 1 === object.row) ||
      (player.col === object2.col && player.row - 1 === object2.row) ||
      (player.col === wall.col && player.row - 1 === wall.row) ||
      (player.col === wall2.col && player.row - 1 === wall2.row) ||
      (player.col === wall3.col && player.row - 1 === wall3.row) ||
      (player.col === wall4.col && player.row - 1 === wall4.row)
    ) {
      console.log('cant move');
    } else if (player.row > 0) {
      this.row--;
    }
    this.direction = 'up';
  }

  moveDown() {
    //If statement for boundaries
    if (
      (player.col === object.col && player.row + 1 === object.row) ||
      (player.col === object2.col && player.row + 1 === object2.row) ||
      (player.col === wall.col && player.row + 1 === wall.row) ||
      (player.col === wall2.col && player.row + 1 === wall2.row) ||
      (player.col === wall3.col && player.row + 1 === wall3.row) ||
      (player.col === wall4.col && player.row + 1 === wall4.row)
    ) {
      console.log('cant move');
    } else if (player.row < 9) 
      {
      this.row++;
      }
    this.direction = 'down';
  }

  moveLeft() {
    //If statement for boundaries
    if (
      (player.row === object.row && player.col - 1 === object.col) ||
      (player.row === object2.row && player.col - 1 === object2.col) ||
      (player.row === wall.row && player.col - 1 === wall.col) ||
      (player.row === wall2.row && player.col - 1 === wall2.col) ||
      (player.row === wall3.row && player.col - 1 === wall3.col) ||
      (player.row === wall4.row && player.col - 1 === wall4.col)
    ) {
      console.log('cant move');
    } else if (player.col > 0) 
      {
      this.col--;
      }
    this.direction = 'left';
  }

  moveRight() {
    //If statement for boundaries
    if (
      (player.row === object.row && player.col + 1 === object.col) ||
      (player.row === object2.row && player.col + 1 === object2.col) || 
      (player.row === wall.row && player.col + 1 === wall.col) ||
      (player.row === wall2.row && player.col + 1 === wall2.col) ||
      (player.row === wall3.row && player.col + 1 === wall3.col) ||
      (player.row === wall4.row && player.col + 1 === wall4.col)
    ) {
      console.log('cant move');
    } else if (player.col < 9) 
      { 
      this.col++;
      } 
    this.direction = 'right';
    
  }
}

const player = new Character(1, 1);

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
   // this.setRandomPosition();
    this.col = 3;
    this.row = 4;

    this.image = new Image();
    this.image.src = 'images/enemy-main.png'
  }

  setRandomPosition() {
    let foeArray = [this.moveUp, this.moveDown, this.moveRight, this.moveLeft];
    let movement = Math.floor(Math.random() * foeArray.length)
    console.log(movement)
    if(movement === 0) {
      this.moveUp()
    } else if(movement === 1) {
      this.moveDown()
    } else if(movement === 2) {
      this.moveRight()
    } else if(movement === 3) {
      this.moveLeft()
    }
    //this.col = Math.floor(Math.random() * tileCount);
    //this.row = Math.floor(Math.random() * tileCount);
  }

  moveUp() {
    console.log(this.row)
    //If statement for boundaries
    if (
      (this.col === object.col && this.row - 1 === object.row) ||
      (this.col === object2.col && this.row - 1 === object2.row) ||
      (this.col === wall.col && this.row - 1 === wall.row) ||
      (this.col === wall2.col && this.row - 1 === wall2.row) ||
      (this.col === wall3.col && this.row - 1 === wall3.row) ||
      (this.col === wall4.col && this.row - 1 === wall4.row)
    ) {
      console.log('cant move');
    } else  if (this.row > 0) //|| player.row != object.row) {//(player.row > object.row && player.col > foe.col || player.row < object.row && player.col < foe.col)){
      this.row--;
      //}
    this.direction = 'up';
  }

  moveDown() {
    console.log(this.row)

    //If statement for boundaries
    if (
      (this.col === object.col && this.row + 1 === object.row) ||
      (this.col === object2.col && this.row + 1 === object2.row) ||
      (this.col === wall.col && this.row + 1 === wall.row) ||
      (this.col === wall2.col && this.row + 1 === wall2.row) ||
      (this.col === wall3.col && this.row + 1 === wall3.row) ||
      (this.col === wall4.col && this.row + 1 === wall4.row)
    ) {
      console.log('cant move');
    } else if (this.row < 9) //|| player.row != object.row){//(player.row > object.row && player.col > foe.col || player.row < object.row && player.col < foe.col)) {
      this.row++;
      //}
    this.direction = 'down';
  }

  moveLeft() {
    console.log(this.col)

    //If statement for boundaries
    if (
      (this.row === object.row && this.col - 1 === object.col) ||
      (this.row === object2.row && this.col - 1 === object2.col) ||
      (this.row === wall.row && this.col - 1 === wall.col) ||
      (this.row === wall2.row && this.col - 1 === wall2.col) ||
      (this.row === wall3.row && this.col - 1 === wall3.col) ||
      (this.row === wall4.row && this.col - 1 === wall4.col)
    ) {
      console.log('cant move');
    } else if (this.col > 0) //|| player.col != object.col) {//(player.row > object.row && player.col > foe.col || player.row < object.row && player.col < foe.col)){
      this.col--;
      //}
    this.direction = 'left';
  }

  moveRight() {
    console.log(this.col)

    //If statement for boundaries
    if (
      (this.row === object.row && this.col + 1 === object.col) ||
      (this.row === object2.row && this.col + 1 === object2.col) ||
      (this.row === wall.row && this.col + 1 === wall.col) ||
      (this.row === wall2.row && this.col + 1 === wall2.col) ||
      (this.row === wall3.row && this.col + 1 === wall3.col) ||
      (this.row === wall4.row && this.col + 1 === wall4.col)
    ) {
      console.log('cant move');
    } else if (this.col < 9) //|| player.col != object.col) {//(player.row > object.row && player.col > foe.col || player.row < object.row && player.col < foe.col)){
      this.col++;
      //} 
    this.direction = 'right';
    
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


class Obstacle {
  constructor(initialCol, initialRow) {
    this.col = initialCol;
    this.row = initialRow;
    this.image = new Image();
    this.image.src = 'images/object1.png'
  }
}

const object = new Obstacle(2,4);
const object2 = new Obstacle(3,7);

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

class Wall {
  constructor(initialCol, initialRow) {
    this.col = initialCol;
    this.row = initialRow;
  }  
}

const wall = new Wall(3, 0);
const wall2 = new Wall(3,1);
const wall3 = new Wall(3,2);
const wall4 = new Wall(3,3);

function drawWall() {
  context.drawImage(
    wall.image,
    wall.col * tileSize,
    wall.row * tileSize,
    tileSize,
    tileSize
  );
}

function drawWall2() {
  context.drawImage(
    wall.image,
    wall.col * tileSize,
    wall.row * tileSize,
    tileSize,
    tileSize
  );
}

function drawWall3() {
  context.drawImage(
    wall.image,
    wall.col * tileSize,
    wall.row * tileSize,
    tileSize,
    tileSize
  );
}

function drawWall4() {
  context.drawImage(
    wall.image,
    wall.col * tileSize,
    wall.row * tileSize,
    tileSize,
    tileSize
  );
}

//secret Collect
class Treasure {
  constructor() {
    this.setRandomTreasure(); // to set `this.col` and `this.row`

    this.image = new Image();
    this.image.src = 'images/tps-report.png';
  }

  setRandomTreasure() {
    if(
      (this.col === object.col || this.row  === object.row) ||
      (this.col === object2.col && this.row  === object2.row) ||
      (this.col === wall.col && this.row  === wall.row) ||
      (this.col === wall2.col && this.row  === wall2.row) ||
      (this.col === wall3.col && this.row  === wall3.row) ||
      (this.col === wall4.col && this.row  === wall4.row)
    ) {
      console.log("treasure no go here") 
    } 
    this.col = Math.floor(Math.random() * tileCount);
    this.row = Math.floor(Math.random() * tileCount);
    
  }
}

const treasure = new Treasure();

function drawTreasure() {
  context.drawImage(
    treasure.image,
    treasure.col * tileSize,
    treasure.row * tileSize,
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
      //if (player.row > object.row && player.col > foe.col || player.row < object.row && player.col < foe.col)
      //{
      player.moveDown();
      //}
      break;
  }

  // Check if the user is on the foe... POTENTIAL COLLISON DATA SECTION, OR DEATH SECTION
  if (
    (player.row === foe.row && player.col === foe.col) ||
    (player.row === (foe.row - 1) && player.col === (foe.col - 1)) ||
    (player.row === (foe.row + 1) && player.col === (foe.col + 1))
    ) {
    alert("Game Over! Your boss found you. You must work on Saturday")  
    document.getElementById("dead").play();
    console.log('he got you');
    frames = 0;
    foeFrames = 0;
    player.score = 0;
    player.row = 1;
    player.col = 1;
    foe.setRandomPosition();
  } 
  
  if (player.row === treasure.row && player.col === treasure.col) {
    console.log("treasure here");
    document.getElementById("tps").play();
    player.score++;
    treasure.setRandomTreasure();
  }
  
  if (player.score === 5){
    document.getElementById("win").play();
    alert("Congrats! You got all of you work done before your boss could talk to you. You're ahead of your workload and don't have to come in on Saturday!")
    callSecondLevel();
  }
    
  if (foeFrames % 1 === 0){
    foe.setRandomPosition();
    // if foe.col < 
    //randomize direction
    //how many steps he 
    }

  //Collision detection
  function detectObject() {
    if (player.col === object.col && player.row === object.row || player.col === object2.col && player.row === object2.row) {
      console.log('player col', player.col, 'player row', player.row, 'object col', object.col, 'object row', object.row)
    } 
  }
  detectObject();

  //function for removing JS file
  function removeJs() {
    let divContent = document.getElementById('switch');
    divContent.innerHTML = '<script src="level-layouts/level3.js"></script>';
    window.open('level2.html');
    window.open('level2.js')
    //div display none
  }



  // Code for getting to next world
  if ((player.col === 9 && player.row === 4)||
      (player.col === 9 && player.row === 5)) {
    console.log("next level loading...")
    //Put logic here that switches out level1.js to level2.js
    //removeJs();
    callSecondLevel();
    //let link = document.getElementById('switch');
    //link.setAttribute("src", "../Ironhack-Game/level-layouts/level3.js");
  }


  // Draw everything
  drawEverything();
});
let frames = 0;
function drawEverything() {
  frames++;
//console.log(frames);
  context.clearRect(0, 0, width, height);
  context.font = "15px pixChicago";
  context.fillStyle = "#ff80aa";
  context.fillText(`TPS REPORTS: ${player.score}`, 310, 40);
  drawGrid();
  drawFoe();
  drawPlayer();
  drawObject();
  drawObject2();
  counter();
  drawTreasure();
}

let foeFrames = 0;
function counter(){
  foeFrames++;
  console.log(foeFrames);
}


setTimeout(drawEverything, 500);
