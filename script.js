function getComputerChoice() {
    let x = Math.random();
    let choice = "";
    if (x<= 0.33) {
        choice = "Rock";
    }
    else if (x<=0.66 && x> 0.33 ) {
        choice = "Paper";
    }
    else if (x<=0.99 && x > 0.66){
        choice = "Scissor";
    }
    return choice;
}
let computerChoice = getComputerChoice();
console.log(computerChoice);