console.log("Rock Paper Scissor Game");
const game = () => {
let computerScore = 0;
let userScore = 0;
let moves = 0;
const playGame = () => {
 const rockBtn = document.querySelector('.rock');
 const paperBtn = document.querySelector('.paper');
 const scissorBtn = document.querySelector('.scissor');
 const userOptions = [rockBtn, paperBtn, scissorBtn];
 const gameArray = ['rock', 'paper', 'scissors']

 userOptions.forEach(option => {
     option.addEventListener('click', function () {

        const movesLeft = document.querySelector('.movesleft');
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const randomPlay = Math.floor(Math.random() * 3)
        const computerChoice = gameArray[randomPlay]

        playRound(this.innerText, computerChoice)

        if (moves == 10) {
            endGame(userOptions, movesLeft);
        }
     })
  })

}
 const playRound = (playerSelection, computerSelection) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.u-count');
        const computerScoreBoard = document.querySelector('.c-count');
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
      
        if (playerSelection ==  computerSelection) {
            result.textContent = "Tie! Try Again!"
            
        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            computerScore++;
            computerScoreBoard.textContent = computerScore
         result.textContent = "You Lose! Paper beats rock!"
            
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            userScore++;
            playerScoreBoard.textContent = userScore
             result.textContent.textContent = "You Win! Rock beats scissors!"
            
    
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            userScore++;
            playerScoreBoard.textContent = userScore
         result.textContent = "You Win! Paper beats rock!"

            
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerScore++;
            computerScoreBoard.textContent = computerScore
            result.textContent = "You Lose! Scissors beats paper!"
                    
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerScore++;
            computerScoreBoard.textContent = computerScore
            result.textContent = "You Lose! Rock beats scissors!";
            
            
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            userScore++;
            playerScoreBoard.textContent = userScore
            result.textContent = "You Win! Scissors beats paper!"
            
            
    
        } else {
            result.textContent = "You entered wrong  choice";
            computerScore++;
            computerScoreBoard.textContent = computerScore
            
        }
    }

    const endGame = (userOptions, movesLeft) => {
  
        const chooseMove = document.querySelector('.move');
        const reloadBtn = document.querySelector('.reload');
        const result = document.querySelector('.result');

        userOptions.forEach(option => {
            option.style.display = 'none';
        })
  
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
  
        if (userScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if (userScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }

    playGame()
}
game()
