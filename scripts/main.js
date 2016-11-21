var squareCount = 10;
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
        clear();
        fill(this.color);
        rect(this.x, this.y, squareSize, squareSize);
    }   
}

function draw () {
    var square;
    for (var i = 0; i < squareCount; i++) {
        for (var j = 0; j < squareCount; j++) {
            square = new Square(i * squareSize, j * squareSize, ((i + (j % 2)) % 2) * 255);
            square.draw();
        }
    }
    
}
