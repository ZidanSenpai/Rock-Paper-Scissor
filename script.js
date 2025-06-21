function getComputerChoice() {
    let x = Math.random();
    let choice = "";
    if (x<= 0.33) {
        choice = 1;
    }
    else if (x<=0.66 && x> 0.33 ) {
        choice = 2;
    }
    else if (x<=0.99 && x > 0.66){
        choice = 3;
    }
    return choice;
}
function getHumanChoice() {
    let x = prompt("Enter your choice: rock, paper, scissor");
    let y = x.toLowerCase();
    if (y == "rock") {
        return 1;
    }
    else if(y=="paper"){
        return 2;
    }
    else if(y=="scissor"){
        return 3;
    }
    else return 4;
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice == 1 && computerChoice == 2) {
        console.log("Rock was beaten by Paper, You Lose!");
    }
    else if(humanChoice == 1 && computerChoice == 3){
        console.log("Rock beats Paper, You Win!");
    }
    else if(humanChoice == computerChoice){
        console.log("You both chose the same, It's a tie");
    }
    else if(humanChoice == 2 && computerChoice == 1){
        console.log("Paper beats Rock, You Win!");
    }
    else if(humanChoice == 2 && computerChoice == 3){
        console.log("Paper was beaten by Scissors, You Lose!");
    }
    else if(humanChoice == 3 && computerChoice == 1){
        console.log("Scissor was beaten by Rock, You Lose!");
    }
    else if(humanChoice == 3 && computerChoice == 2){
        console.log("Scissor beat Paper, You win!");
    }
}
playRound(getHumanChoice(), getComputerChoice());
