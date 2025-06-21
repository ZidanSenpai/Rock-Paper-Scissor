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
function getHumanChoice() {
    let choice = "";
    let x = prompt("Enter your choice: 1- rock 2- paper 3- Scissor");
    if (x == 1) {
        return "Rock";
    }
    else if(x==2){
        return "Paper";
    }
    else if(x==3){
        return "Scissor";
    }
    else return "Invalid option";
}
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
console.log(humanChoice);
