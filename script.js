function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    var randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
  }


  function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        console.log("It's a draw.");
        return "draw"
    } else if((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return playerSelection;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return computerSelection;
    }
  }

  function game() {
    
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
     }
  }
  
  const playerSelection = "rock";

  game();
