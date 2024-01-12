

console.log("Rock Paper Scissor Game");

function getComputerChoice() {
  let gameArray = ["rock", "paper", "scissor"];
  let randomPlay = Math.floor(Math.random() * gameArray.length);
  return gameArray[randomPlay];
}

function playerRound(playerSelection, computerSelection)  {
  let result;
  if (playerSelection === computerSelection) {
    result = "Draw Match";
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
    
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = "You Lose ... 'Paper beats Rock'";
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
  } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
    result = "You Win!!! Rock breaks the scissor";
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = "Hurray you win!! Paper covers the rock";
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);

  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    result = "Oh no you lose.. Scissor cuts the paper";
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    result = "You lose .. Rock breaks the scissor";
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    result = "You win!! Scissor cut the paper";
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
  } else {
    result = "You entered wrong  choice";
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
  }
  return result;
}
const playerSelection = prompt('Choose Rock, Paper, or Scissors').toLowerCase();
const computerSelection = getComputerChoice()
console.log(playerRound(playerSelection, computerSelection))