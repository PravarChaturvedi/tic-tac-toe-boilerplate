document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const message = document.getElementById('message');
    const button = document.getElementById('button');
    let currentPlayer = 'X';
    let moves = 0;
    let board = ['', '', '', '', '', '', '', '', ''];

    // Function to check for a winner
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        if (moves === 9) {
            return 'tie';
        }

        return null;
    }

    // Function to handle box click
    function handleClick(event) {
        const index = event.target.id - 1;
        if (board[index] === '') {
            board[index] = currentPlayer;
            event.target.textContent = currentPlayer;
            moves++;
            const winner = checkWinner();
            if (winner) {
                if (winner === 'tie') {
                    message.textContent = "It's a tie!";
                } else {
                    message.textContent = `${winner} wins!`;
                }
                button.style.display = 'block';
                
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }


    

    // Event listeners
    boxes.forEach(box => {
        box.addEventListener('click', handleClick);
    });

    button.addEventListener('click', resetGame);
});
