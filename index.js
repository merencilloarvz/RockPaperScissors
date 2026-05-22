let humanScore = 0;
let computerScore = 0;
let gameStarted = false;

document.getElementById("start-btn").addEventListener("click", startCountdown);

document.getElementById("rock").addEventListener("click", () => {
  if (!gameStarted) return;

  playGame("rock");
});

document.getElementById("paper").addEventListener("click", () => {
  if (!gameStarted) return;

  playGame("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
  if (!gameStarted) return;

  playGame("scissors");
});

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();

  const result = playRound(humanChoice, computerChoice);

  document.getElementById("result-text").textContent = result;

  updateScore();

  checkWinner();
}

function startCountdown() {
  gameStarted = false;

  let count = 3;

  const countdownText = document.getElementById("countdown");

  countdownText.textContent = count;

  const timer = setInterval(() => {
    count--;

    if (count > 0) {
      countdownText.textContent = count;
    } else if (count === 0) {
      countdownText.textContent = "GO!";
    } else {
      clearInterval(timer);

      countdownText.textContent = "";

      gameStarted = true;
    }
  }, 1000);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return `It's a tie! Both chose ${capitalize(humanChoice)}.`;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;

    return `You win! ${capitalize(
      humanChoice,
    )} beats ${capitalize(computerChoice)}.`;
  }

  computerScore++;

  return `Computer wins! ${capitalize(
    computerChoice,
  )} beats ${capitalize(humanChoice)}.`;
}

function updateScore() {
  document.getElementById("human-score").textContent = humanScore;

  document.getElementById("computer-score").textContent = computerScore;
}

function checkWinner() {
  if (humanScore === 5) {
    gameStarted = false;

    document.getElementById("result-text").textContent = "You won the game!";

    setTimeout(resetGame, 2000);
  } else if (computerScore === 5) {
    gameStarted = false;

    document.getElementById("result-text").textContent =
      "Computer won the game!";

    setTimeout(resetGame, 2000);
  }
}

function resetGame() {
  humanScore = 0;

  computerScore = 0;

  updateScore();

  document.getElementById("result-text").textContent =
    "Click Start to play again";

  document.getElementById("countdown").textContent = "";
}
