const gameBoard = document.getElementById("gameBoard");
const message = document.getElementById("message");

let board = Array(9).fill(null);
let currentPlayer = "X";

function createBoard() {
  gameBoard.innerHTML = ""; // Limpia el tablero
  board.forEach((_, index) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = index;
    cell.addEventListener("click", handleMove);
    gameBoard.appendChild(cell);
  });
}

function handleMove(event) {
  const cell = event.target;
  const index = cell.dataset.index;

  if (board[index] || checkWinner()) return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWinner()) {
    message.textContent = `¡${currentPlayer} gana!`;
    updateStats(currentPlayer); // Actualiza estadísticas
    return;
  }

  if (board.every(cell => cell)) {
    message.textContent = "¡Es un empate!";
    incrementTotalGames(); // Empate también suma al total
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  return winningCombos.some(combo =>
    combo.every(index => board[index] === currentPlayer)
  );
}

function resetGame() {
  board = Array(9).fill(null);
  currentPlayer = "X";
  message.textContent = "";
  createBoard();
}

createBoard();
