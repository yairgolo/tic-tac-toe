const headtext = document.querySelector("#head");
const palyerBord = document.querySelector("#player");
const table = document.querySelector("table");
const cells = document.querySelectorAll("td");

let currentPlayer = "❌";
let gameActive = true;


const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function checkWinner() {
    return winningCombos.some(combo => {
        const [a, b, c] = combo;
        const cellsArray = Array.from(cells);
        return cellsArray[a].textContent &&
            cellsArray[a].textContent === cellsArray[b].textContent &&
            cellsArray[a].textContent === cellsArray[c].textContent;
    });
}

function checkDraw() {
    return Array.from(cells).every(cell => cell.textContent !== "");
}

function resetGame() {
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "❌";
    gameActive = true;
    palyerBord.textContent = `Current Player: ${currentPlayer}`;
}

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (!cell.textContent && gameActive) {
            cell.textContent = currentPlayer;

            if (checkWinner()) {
                palyerBord.textContent = `Player ${currentPlayer} wins! Click any cell to restart`;
                gameActive = false;
                setTimeout(() => {
                    const playAgain = confirm("Play again?");
                    if (playAgain) resetGame();
                }, 1000);
                return;
            }

            if (checkDraw()) {
                palyerBord.textContent = "It's a draw! Click any cell to restart";
                gameActive = false;
                setTimeout(() => {
                    const playAgain = confirm("Play again?");
                    if (playAgain) resetGame();
                }, 1000);
                return;
            }

            currentPlayer = currentPlayer === "❌" ? "⭕" : "❌";
            palyerBord.textContent = `Current Player: ${currentPlayer}`;
        } else if (!gameActive) {
            resetGame();
        }
    });
});


palyerBord.textContent = `Current Player: ${currentPlayer}`;


