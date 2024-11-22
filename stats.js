const victoryCountX = document.getElementById("victoryCountX");
const victoryCountO = document.getElementById("victoryCountO");
const defeatCountX = document.getElementById("defeatCountX");
const defeatCountO = document.getElementById("defeatCountO");
const totalGamesCount = document.getElementById("totalGamesCount");

let victoriesX = 0;
let victoriesO = 0;
let defeatsX = 0;
let defeatsO = 0;
let totalGames = 0;

function updateStats(winner) {
  if (winner === "X") {
    victoriesX++;
    victoryCountX.textContent = victoriesX;
    defeatsO++;
    defeatCountO.textContent = defeatsO;
  } else if (winner === "O") {
    victoriesO++;
    victoryCountO.textContent = victoriesO;
    defeatsX++;
    defeatCountX.textContent = defeatsX;
  }
  incrementTotalGames();
}

function incrementTotalGames() {
  totalGames++;
  totalGamesCount.textContent = totalGames;
}
