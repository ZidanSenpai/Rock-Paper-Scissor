const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
rock.classList.toggle("toggled");
paper.classList.toggle("toggled");
paper.classList.toggle("toggled");

function getComputerChoice() {
    let x = Math.random();
    if (x <= 0.33) return 1;
    else if (x <= 0.66) return 2;
    else return 3;
}

function getHumanChoice() {
    rock.addEventListener("click", ()=>{
        return 1;
    })
    paper.addEventListener("click", ()=>{
        return 2;
    })
    scissor.addEventListener("click", ()=>{
        return 3;
    })
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 1 && computerChoice == 2) {
        console.log("Rock was beaten by Paper, You Lose!");
        computerScore++;
    } else if (humanChoice == 1 && computerChoice == 3) {
        console.log("Rock beats Scissors, You Win!");
        humanScore++;
    } else if (humanChoice == computerChoice) {
        console.log("You both chose the same, It's a tie");
    } else if (humanChoice == 2 && computerChoice == 1) {
        console.log("Paper beats Rock, You Win!");
        humanScore++;
    } else if (humanChoice == 2 && computerChoice == 3) {
        console.log("Paper was beaten by Scissors, You Lose!");
        computerScore++;
    } else if (humanChoice == 3 && computerChoice == 1) {
        console.log("Scissors was beaten by Rock, You Lose!");
        computerScore++;
    } else if (humanChoice == 3 && computerChoice == 2) {
        console.log("Scissors beat Paper, You Win!");
        humanScore++;
    }
}

const play = document.getElementById("play");
play.addEventListener("click", () => {
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Human Score:", humanScore, "Computer Score:", computerScore);
});
