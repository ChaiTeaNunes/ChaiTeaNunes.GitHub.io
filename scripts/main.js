var squareCount;
var squareSize;

var Square = function (x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

Square.prototype = {
    draw: function () {
        push();
        fill(color);
        rect(this.x, this.y, size, size);
        pop();
    }   
}

function setup () {
    createCanvas(1080, 720);
    noStroke();
    background(255);
    angleMode(DEGREES);
    squareSize = width / squareCount;
}

function draw () {
    var square = new Square(0, 0, 0);
    square.draw();
}
