var squareCount = 10.8;
var squareSize;
var squares = [];

var Square = function (x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.draw = function () {
        fill(this.color);
        rect(this.x, this.y, squareSize, squareSize);
    }
}

function instantiateSquares() {
    var square;
    for (var i = 0; i < squareCount; i++) {
        squares.push([]);
        for (var j = 0; j < squareCount; j++) {
            square = new Square(i * squareSize + (frameCount * (i % 2)), j * squareSize, ((i + (j % 2)) % 2) * 255);
            console.log(square.x + ", " + square.y);
            squares[i].push(square);
        }
    }
}

function drawSquares() {
    for (var i = 0; i < squares.length; i++) {
        for (var j = 0; j < squares[i].length; j++) {
            squares[i][j].draw();
        }
    }
}

function setup () {
    createCanvas(1080, 720);
    noStroke();
    background(255);
    angleMode(DEGREES);
    squareSize = width / squareCount;
    
    instantiateSquares();
}

function draw () {
    drawSquares();
}
