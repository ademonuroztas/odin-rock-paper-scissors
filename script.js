function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    var randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
  }

console.log(computerPlay());