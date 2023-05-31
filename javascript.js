function getComputerChoice(){
    const choice = ['rock','paper','scissors'];
    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();
    const outcome=[['rock', 'scissors'],['paper', 'rock'],['scissors', 'paper']];
    if (playerSelection === computerSelection){
        return`you draw!! the ${playerSelection} is equal to the ${computerSelection}`;

    } else if (playerSelection === outcome[0][0] && computerSelection === outcome[0][1]){
        return `you win the ${playerSelection} beats the ${computerSelection}`;
    } else if(playerSelection === outcome[1][0] && computerSelection === outcome[1][1]){
        return `you win the ${playerSelection} beats the ${computerSelection}`;
    } else if(playerSelection === outcome[2][0] && computerSelection === outcome[2][1]){
        return `you win the ${playerSelection} beats the ${computerSelection}`;
    } else if(playerSelection === outcome[0][1] && computerSelection === outcome[0][0]){
        return `you lose the ${computerSelection} beats the ${playerSelection}`;
    } else if(playerSelection === outcome[1][1] && computerSelection[1][0]){
        return `you lose the ${computerSelection} beats the ${playerSelection}`;
    } else if(playerSelection === outcome[2][1] && computerSelection === outcome[2][0]){
        return `you lose the ${computerSelection} beats the ${playerSelection}`;
    }else{
        return `you lose! ${computerSelection} beats the ${playerSelection}`;
    }
}

function game() {
    // Initialize the score.
    const playerScore = 0;
    const computerScore = 0;
  
    // Play 5 rounds.
    for (let i = 0; i < 5; i++) {
      // Get the player's choice.
      const playerSelection=prompt('choose : rock, paper, scissors:')
  
      // Get the computer's choice.
      const computerSelection = getComputerChoice();
  
      // Play a round.
      const result = playRound(playerSelection, computerSelection);
  
      // Update the score.
      if (result === "You Win!") {
        playerScore++;
      } else if (result === "you lose") {
        computerScore++;
      }
  
      // Display the results of the round.
      console.log(`Round ${i +1}: ${result}`);
    }
  
    // Display the winner.
    if (playerScore > computerScore) {
      console.log(`Congratulations! You won the game! Your score is ${playerScore} and the computer's score is ${computerScore}`);
    } else if (computerScore > playerScore) {
      console.log(`The computer won the game. Better luck next time! Your score is ${playerScore} and the computer's score is ${computerScore}`);
    } /*else {
      console.log(`It's a tie! Play again to see who the true winner is! Your score is ${playerScore} and the computer's score is ${computerScore}`);
    }*/
     // Display the score.
     console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
}
game();