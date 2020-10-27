let moves = 3;

let row = 4;
let col = 4;

let target = Math.floor(Math.random() * moves);

function moveLeft() {
    return col--
}

function moveRight() {
    return col++
}

function moveUp() {
    return row--
}

function moveDown() {
    return Row++
}


if (target = 0) {
    moveLeft();
} else if (target = 1) {
    moveRight();
} else if (target = 2) {
    moveDown();
} else if (target = 3) {
    moveUp();
}

console.log(target);
console.log(row);
console.log(col);


