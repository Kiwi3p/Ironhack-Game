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