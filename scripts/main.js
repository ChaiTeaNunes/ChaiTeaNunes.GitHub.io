var squareCount;
var squareSize;

var Square = function (x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function setup () {
    createCanvas(1080, 720);
    noStroke();
    background(255);
    angleMode(DEGREES);
    squareSize = width / squareCount;
}

Square.prototype = {
    draw: function () {
        push();
        fill(this.color);
        rect(this.x, this.y, squareSize, squareSize);
        pop();
    }   
}

function draw () {
    var square = new Square(frameCount, frameCount, 0);
    square.draw();
}
