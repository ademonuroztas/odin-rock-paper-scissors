let playerScore = 0;
let computerScore = 0;
let round = 1;

const playerScoreText = document.querySelector('#player-score');
const computerScoreText = document.querySelector('#computer-score');
const winner = document.querySelector('#winner');


function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  var randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection === 'rock' ||
    playerSelection === 'paper' ||
    playerSelection === 'scissors'
  ) {
    if (playerSelection === computerSelection) {
      return "It's a draw.";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      playerScore++;
      playerScoreText.innerHTML = `Your score: ${playerScore}`;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      computerScore++;
      computerScoreText.innerHTML = `Computer score: ${computerScore}`;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  } else {
    return 'Invalid input. Please select one of three: Rock | Paper | Scissors';
  }
}

const container = document.querySelector('#container');

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach((button) =>
  button.addEventListener('click', function () {
    if(computerScore < 5 && playerScore < 5) { 
      const h3 = document.createElement('h3');
      h3.textContent = `Round ${round++}: ${playRound(button.dataset.choice, computerPlay())}`;
      container.appendChild(h3);
    } else {
      const h1 = document.createElement('h1');
      if(playerScore > computerScore){
        h1.textContent = `You win the game!!!`;
      } else if (computerScore > playerScore) {
        h1.textContent = `Computer wins the game.`;
      } else {
        h1.textContent = `Draw.`;
      }
      winner.appendChild(h1);
    }
  })
);

