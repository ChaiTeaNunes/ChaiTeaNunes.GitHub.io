var squareCount = 10;
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
    for (var i = 0; i < squareCount + 2; i++) {
        squares.push([]);
        for (var j = 0; j < squareCount + 2; j++) {
            square = new Square((i - 2) * squareSize + (j % 2) * 2, (j - 2) * squareSize, ((i + (j % 2)) % 2) * 255);
            console.log(square.x + ", " + square.y);
            squares[i].push(square);
        }
    }
}

function drawSquares() {
    for (var i = 0; i < squares.length; i++) {
        for (var j = 0; j < squares[i].length; j++) {
            if (frameCount % (squareSize * 2) < squareSize) {
                squares[i][j].x += (j % 2) * 2;
            } else {
                squares[i][j].y += (i % 2) * 2;   
            }
            squares[i][j].draw();
            if (squares[i][j].x >= squareCount * squareSize + squareSize) {
                squares[i][j].x = -squareSize;
            }
            if (squares[i][j].y >= squareCount * squareSize + squareSize) {
                squares[i][j].y = -squareSize;   
            }
        }
    }
}

function setup () {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    background(255);
    angleMode(DEGREES);
    
    if (width >= height) {
        squareSize = Math.round(width / squareCount);
    } else {
        squareSize = Math.round(height / squareCount);
    }
    instantiateSquares();
}

function draw () {
    clear();
    drawSquares();
}
