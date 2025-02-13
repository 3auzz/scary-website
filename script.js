const board = document.getElementById('board');
const rows = 8;
const cols = 8;

function createBoard() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell', (r + c) % 2 === 0 ? 'light-cell' : 'dark-cell');
            if ((r + c) % 2 !== 0 && r < 3) {
                const piece = document.createElement('div');
                piece.classList.add('piece', 'black-piece');
                cell.appendChild(piece);
            } else if ((r + c) % 2 !== 0 && r > 4) {
                const piece = document.createElement('div');
                piece.classList.add('piece');
                cell.appendChild(piece);
            }
            board.appendChild(cell);
        }
    }
}

// Инициализация игры
createBoard();
