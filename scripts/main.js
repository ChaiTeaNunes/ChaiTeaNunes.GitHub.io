var squareCount;
var squareSize;

class Square {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    
    draw() {
        push();
        fill(color);
        rect(this.x, this.y, size, size);
        pop();
    }
}

function setup() {
    createCanvas(1080, 720);
    noStroke();
    background(255);
    angleMode(DEGREES);
    squareSize = width / squareCount;
}

function draw() {
    var square = new Square(0, 0, 0);
}
