console.log("Rock Paper Scissor Game");

let computerScore = 0;
let userScore = 0;

function getComputerChoice() {
    let gameArray = ['rock', 'paper', 'scissors']
    let randomPlay = Math.floor(Math.random() * gameArray.length);
    return gameArray[randomPlay]
 }
function playRound() {
	let playerSelection = prompt('Choose Rock, Paper, or Scissors').toLowerCase();
	let computerSelection = getComputerChoice();
	
    if (playerSelection ==  computerSelection) {
        let result = "Tie! Try Again!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
        return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
     result = "You Lose! Paper beats rock!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
        return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        userScore++;
         result.textContent = "You Win! Rock beats scissors!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
        return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        userScore++;
     result = "You Win! Paper beats rock!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
        return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        let result = "You Lose! Scissors beats paper!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
        return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);        
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        let result = "You Lose! Rock beats scissors!";
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
        return(result + "\n" + "Your Choice: " + playerSelection + ". " + "Computer Choice: " + computerSelection);
        
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        userScore++;
        let result = "You Win! Scissors beats paper!"
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
    } else if(computerScore > userScore) {
        console.log("Game Over! You Lost! :(");
    }
}

function game() {
    console.log(playRound());
    if(userScore < 5 && computerScore < 5){
    	game();
    } else {
    	endGame();
    }
}


game();
