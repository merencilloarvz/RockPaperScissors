let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = (
    prompt("Enter your choice (rock, paper, or scissors): ") || ""
  ).toLowerCase();
  return choice;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win ${capitalize(humanChoice)} beats ${capitalize(computerChoice)} +1 point added to your total of ${humanScore}!`;
  } else {
    computerScore++;
    return `Computer wins ${capitalize(computerChoice)} beats ${capitalize(humanChoice)} +1 point added to computer total of ${computerScore}!`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);

    console.log(result);

    alert(
      `${result}\n\nCurrent Score - \nYou: ${humanScore}\nComputer: ${computerScore}`,
    );
  }

  if (humanScore > computerScore) {
    alert("You won the game!");
  } else if (computerScore > humanScore) {
    alert("Computer won the game!");
  } else {
    alert("The game is a tie!");
  }
}

playGame();
