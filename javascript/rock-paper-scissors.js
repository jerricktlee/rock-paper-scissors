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

function playRound(playerSelection, computerSelection) {
   switch (playerSelection) {
      case "rock":
         if (computerSelection === "rock") {
            return "You Tied! Rock ties with Rock";
         }
         else if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
         }
         else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
         }
      break;
      case "paper":
         if (computerSelection === "rock") {
            return "You Win! Paper beats Rock";
         }
         else if (computerSelection === "paper") {
            return "You Tied! Paper ties with Paper";
         }
         else if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
         }
      break;
      case "scissors":
         if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
         }
         else if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
         }
         else if (computerSelection === "scissors") {
            return "You Tied! Scissors ties with Scissors";
         }
      break;
   }
}

// function game() {
//    let playerWinCount = 0;
//    let computerWinCount = 0;
//    let winner;

//    let playerSelection = getPlayerChoice();
//    let computerSelection = getComputerChoice();
//    let result = playRound(playerSelection, computerSelection);
//    if (result.includes("Win")) {
//       playerWinCount++;
//    } else if (result.includes("Lose")) {
//       computerWinCount++;
//    }
//    console.log("Game 1:\n" + result);
//    console.log(`Player Wins: ${playerWinCount}`);
//    console.log(`Computer Wins: ${computerWinCount}`);

//    playerSelection = getPlayerChoice();
//    computerSelection = getComputerChoice();
//    result = playRound(playerSelection, computerSelection);
//    if (result.includes("Win")) {
//       playerWinCount++;
//    } else if (result.includes("Lose")) {
//       computerWinCount++;
//    }
//    console.log("Game 2:\n" + result);
//    console.log(`Player Wins: ${playerWinCount}`);
//    console.log(`Computer Wins: ${computerWinCount}`);

//    playerSelection = getPlayerChoice();
//    computerSelection = getComputerChoice();
//    result = playRound(playerSelection, computerSelection);
//    if (result.includes("Win")) {
//       playerWinCount++;
//    } else if (result.includes("Lose")) {
//       computerWinCount++;
//    }
//    console.log("Game 3:\n" + result);
//    console.log(`Player Wins: ${playerWinCount}`);
//    console.log(`Computer Wins: ${computerWinCount}`);

//    playerSelection = getPlayerChoice();
//    computerSelection = getComputerChoice();
//    result = playRound(playerSelection, computerSelection);
//    if (result.includes("Win")) {
//       playerWinCount++;
//    } else if (result.includes("Lose")) {
//       computerWinCount++;
//    }
//    console.log("Game 4:\n" + result);
//    console.log(`Player Wins: ${playerWinCount}`);
//    console.log(`Computer Wins: ${computerWinCount}`);

//    playerSelection = getPlayerChoice();
//    computerSelection = getComputerChoice();
//    result = playRound(playerSelection, computerSelection);
//    if (result.includes("Win")) {
//       playerWinCount++;
//    } else if (result.includes("Lose")) {
//       computerWinCount++;
//    }
//    console.log("Game 5:\n" + result);
//    console.log(`Player Wins: ${playerWinCount}`);
//    console.log(`Computer Wins: ${computerWinCount}`);

//    if (playerWinCount > computerWinCount) {
//       console.log("You won the game!");
//    } else if (playerWinCount < computerWinCount) {
//       console.log("You lose the game!");
//    } else {
//       console.log("You tied with the computer!");
//    }
// }
