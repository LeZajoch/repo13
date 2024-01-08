let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.dataset.index;

    if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
        } else if (!board.includes('')) {
            alert("It's a draw!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}