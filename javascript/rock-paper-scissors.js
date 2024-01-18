/*
Psuedocode:
Get string input from user.
Format string input to be case-insensitive
getComputerChoice function:
   Generate a random number from 1-3: 1 = rock, 2 = paper, 3 = scissors
playRound function:
   Takes 2 arguments: playerChoice and computerChoice and plays a game of rock paper scissosrs
   Needs to account for ties
game function:
Initalize counter var
Call playRound function 5 times and updates counter var
Reports a winnwer or loser at the end
*/

function getPlayerChoice() {
   let playerChoice = prompt("Pick: Rock, Paper, Scissors");
   playerChoice = playerChoice.toLowerCase();

   if (playerChoice === "rock" || playerChoice ==="paper" || playerChoice === "scissors") {
      return playerChoice;
   }
   else {
      console.log("Invalid input.");
   }
}

function getComputerChoice() {
   let computerChoice;
   let randomNum = Math.floor(Math.random() * 3);
   switch (randomNum) {
      case 0: 
         computerChoice = "rock";
         break;
      case 1:
         computerChoice = "paper";
         break;
      case 2:
         computerChoice = "scissors";
         break;
   }
   return computerChoice;
}