

console.log("Rock Paper Scissor Game");
let computerScore = 0;
let userScore = 0;
function getComputerChoice() {
  let gameArray = ["rock", "paper", "scissor"];
  let randomPlay = Math.floor(Math.random() * gameArray.length);
  return gameArray[randomPlay];
}

function playerRound(playerSelection, computerSelection)  {
  let result;
  if (playerSelection === computerSelection) {
    result = "Draw Match";
    result += '\n'
    result += " Your Score: " + userScore
    result += '\n'
    result += " Computer Score: " + computerScore
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
    
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = "You Lose ... 'Paper beats Rock'";
    computerScore++;
        result = "You Lose! Paper beats rock!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
  } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
    result = "You Win!!! Rock breaks the scissor";
    computerScore++;
         result = "You Lose! Paper beats rock!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = "Hurray you win!! Paper covers the rock";
    computerScore++;
         result = "You Lose! Paper beats rock!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);

  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    result = "Oh no you lose.. Scissor cuts the paper";
    computerScore++;
        result = "You Lose! Paper beats rock!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    result = "You lose .. Rock breaks the scissor";
    computerScore++;
        result = "You Lose! Paper beats rock!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    result = "You win!! Scissor cut the paper";
    computerScore++;
        result = "You Lose! Paper beats rock!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
  } else {
    result = "You entered wrong  choice";
    computerScore++;
        result = "You Lose! Paper beats rock!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
    return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
  }
}

function endGame() {
    if (userScore > computerScore) {
        console.log("Game Over! You Win! :)");
    } else if (computerScore > userScore) {
        console.log("Game Over! You Lost! :(");
    }
}

function game() {
    const playerSelection = prompt('Choose Rock, Paper, or Scissors').toLowerCase();
        const computerSelection = getComputerChoice()
        console.log(playerRound(playerSelection, computerSelection))
    if(userScore < 5 && computerScore < 5){
    	game();
    }
    else{
    	endGame();
    }
}

game()