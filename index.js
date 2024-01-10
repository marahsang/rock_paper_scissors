let gameArray = ["rock", "paper", "scissors"]
function getComputerChoice() {
  let randomPlay = Math.floor(Math.random()*gameArray.length)
  return gameArray[randomPlay]
}
console.log(getComputerChoice())

function playerRound(playerSelection, computerSelection) {
  let result
   if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = "You Lose ... 'Paper beats Rock'";
    
  } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
    result = "You Win!!! Rock beats the scissor";
    
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = "Hurray you win!! Paper covers the rock";

  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    result = "Oh no you lose.. Scissor cuts the paper";
  
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    result = "You lose .. Rock beats the scissor";
    
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    result = "You win!! Scissor cut the paper";
    
  } else {
    result = "You entered wrong  choice";
  }
  return result;
}

const playerSelection = "rock"
const computerSelection = getComputerChoice()
console.log(playerRound(playerSelection, computerSelection));