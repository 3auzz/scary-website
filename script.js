const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
const rows = 20;
const cols = 10;
const squareSize = 20;
let board = [];

function createBoard() {
    for (let r = 0; r < rows; r++) {
        board[r] = [];
        for (let c = 0; c < cols; c++) {
            board[r][c] = 0;
        }
    }
}

function drawSquare(x, y, color) {
    context.fillStyle = color;
    context.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
    context.strokeStyle = 'black';
    context.strokeRect(x * squareSize, y * squareSize, squareSize, squareSize);
}

function drawBoard() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c]) {
                drawSquare(c, r, 'blue');
            } else {
                drawSquare(c, r, 'white');
            }
        }
    }
}

// Инициализация игры
createBoard();
drawBoard();
