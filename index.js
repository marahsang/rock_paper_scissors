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
    const gameArray = ['rock', 'paper', 'scissors'];
    const resultLog = document.querySelector('.result-log');

    userOptions.forEach(option => {
      option.addEventListener('click', function () {
        const movesLeft = document.querySelector('.movesleft');
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const randomPlay = Math.floor(Math.random() * 3);
        const computerChoice = gameArray[randomPlay];

        playRound(this.innerText, computerChoice);

        if (moves === 10) {
          endGame(userOptions, movesLeft);
        }
      });
    });

    const playRound = (playerSelection, computerSelection) => {
      const result = document.querySelector('.result');
      const playerScoreBoard = document.querySelector('.u-count');
      const computerScoreBoard = document.querySelector('.c-count');
      const logEntry = document.createElement('p');

      playerSelection = playerSelection.toLowerCase();
      computerSelection = computerSelection.toLowerCase();

      if (playerSelection === computerSelection) {
        result.textContent = 'Tie! Try Again!';
        logEntry.textContent = `Round ${moves}: Tie (${playerSelection} vs ${computerSelection})`;
      } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
      ) {
        userScore++;
        playerScoreBoard.textContent = userScore;
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        logEntry.textContent = `Round ${moves}: Win (${playerSelection} beats ${computerSelection})`;
      } else {
        computerScore++;
        computerScoreBoard.textContent = computerScore;
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        logEntry.textContent = `Round ${moves}: Loss (${computerSelection} beats ${playerSelection})`;
      }
      resultLog.appendChild(logEntry);
    };
  };

  const endGame = (userOptions, movesLeft) => {
    const chooseMove = document.querySelector('.move');
    const reloadBtn = document.querySelector('.reload');
    const result = document.querySelector('.result');

    userOptions.forEach(option => {
      option.style.display = 'none';
    });

    chooseMove.innerText = 'Game Over!';
    movesLeft.style.display = 'none';

    if (userScore > computerScore) {
      result.style.fontSize = '2rem';
      result.innerText = 'You Won The Game!';
      result.style.color = '#308D46';
    } else if (userScore < computerScore) {
      result.style.fontSize = '2rem';
      result.innerText = 'You Lost The Game!';
      result.style.color = 'red';
    } else {
      result.style.fontSize = '2rem';
      result.innerText = 'It\'s a Tie!';
      result.style.color = 'grey';
    }

    reloadBtn.innerText = 'Play Again';
    reloadBtn.style.display = 'block';
    reloadBtn.addEventListener('click', () => {
      restartGame();
    });
  };

  const restartGame = () => {
    userScore = 0;
    computerScore = 0;
    moves = 0;

    document.querySelector('.u-count').textContent = '0';
    document.querySelector('.c-count').textContent = '0';
    document.querySelector('.movesleft').innerText = 'Moves Left: 10';
    document.querySelector('.result').textContent = '';
    document.querySelector('.result-log').innerHTML = '';
    document.querySelector('.reload').style.display = 'none';

    const userOptions = document.querySelectorAll('.options button');
    userOptions.forEach(option => {
      option.style.display = 'inline-block';
    });

    document.querySelector('.move').innerText = 'Choose your move';
    document.querySelector('.movesleft').style.display = 'block';
  };

  playGame();
};

game();