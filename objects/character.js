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
      if (player.col != object.col){
        this.col++;
      }  
      this.direction = 'right';
      
    }
  }