let humanChoice = 0;
let humanScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const playBtn = document.getElementById("play");
const result = document.getElementById("result");

const playerScoreText = document.querySelector(".Player-score p");
const computerScoreText = document.querySelector(".Computer-score p");

// Remove selection from all buttons
function clearSelection() {
    rock.classList.remove("selected");
    paper.classList.remove("selected");
    scissor.classList.remove("selected");
}

// Add click listeners to choice buttons
rock.addEventListener("click", () => {
    clearSelection();
    rock.classList.add("selected");
    humanChoice = 1;
});

paper.addEventListener("click", () => {
    clearSelection();
    paper.classList.add("selected");
    humanChoice = 2;
});

scissor.addEventListener("click", () => {
    clearSelection();
    scissor.classList.add("selected");
    humanChoice = 3;
});

// Generate computer choice
function getComputerChoice() {
    let x = Math.random();
    if (x <= 0.33) return 1;
    else if (x <= 0.66) return 2;
    else return 3;
}

// Play one round
function playRound(human, computer) {
    if (human === 0) {
        result.textContent = "Please select Rock, Paper, or Scissors!";
        return;
    }

    let message = "";

    if (human === computer) {
        message = "It's a tie!";
    } else if (
        (human === 1 && computer === 3) ||
        (human === 2 && computer === 1) ||
        (human === 3 && computer === 2)
    ) {
        message = "You Win!";
        humanScore++;
    } else {
        message = "You Lose!";
        computerScore++;
    }

    // Update result and scores
    result.textContent = message;
    playerScoreText.textContent = `Player Score: ${humanScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
}

// Play button click
playBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
