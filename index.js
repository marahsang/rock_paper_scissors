

let arr = ["rock", "paper", "scissors"]


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    return arr[randomNumber]
}
console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock";
 const computerSelection = getComputerChoice();
 console.log(playRound(playerSelection, computerSelection));


// let arr = [rock, paper, scissors]
// function playRound(playerSelection, getComputerChoice) {
// function getComputerChoice() {
//     let rand = Math.floor(Math.random()*3) + 1
//     return arr[rand]
// }

// } 
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));