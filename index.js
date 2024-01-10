let gameArray = ["rock", "paper", "scissors"]
function getComputerChoice() {
  let randomPlay = Math.floor(Math.random()*gameArray.length)
  return gameArray[randomPlay]
}
console.log(getComputerChoice())

function playerRound(playerSelection, computerSelection) {
  let result
  player = playerSelection.toLowerCase()
   if (player === 'rock' && computerSelection === 'paper') {
    result = "You Lose ... 'Paper beats Rock'";
    
  } else if (player === 'rock' && computerSelection === 'scissors') {
    result = "You Win!!! Rock beats the scissors";
    
  } else if (player === 'paper' && computerSelection === 'rock') {
    result = "Hurray you win!! Paper covers the rock";

  } else if (player === 'paper' && computerSelection === 'scissors') {
    result = "Oh no you lose.. Scissors cuts the paper";
  
  } else if (player === 'scissors' && computerSelection === 'rock') {
    result = "You lose .. Rock beats the scissors";
    
  } else if (player === 'scissors' && computerSelection === 'paper') {
    result = "You win!! Scissors cut the paper";
    
  } else {
    result = "You entered wrong  choice";
  }
  return result;
}

const playerSelection = "ScIssoRs"
const computerSelection = getComputerChoice()
console.log(playerRound(playerSelection, computerSelection));