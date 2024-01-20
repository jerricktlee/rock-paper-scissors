const playerBtns = document.querySelectorAll('.player-btn');
const resultsSection = document.querySelector('.results-section');

let playerScore = 0;
let computerScore = 0;
let roundResult = document.createElement('p');
let playerScorePara = document.createElement('p');
let computerScorePara = document.createElement('p');
let matchResultPara = document.createElement('p');
let restartBtn = document.createElement('button');
restartBtn.textContent = "Restart";
restartBtn.disabled = true;

playerBtns.forEach((button) => {
   button.addEventListener('click', () => {
      let playerSelection = button.textContent.toLowerCase();
      displayResult(playRound(playerSelection, getComputerChoice()));
   })
});

restartBtn.addEventListener('click', () => restartGame());

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

function displayResult(resultStr) {
   roundResult.textContent = resultStr;
   resultsSection.appendChild(roundResult);
   
   if (resultStr.includes("Win")) {
      playerScore++;
   }
   else if (resultStr.includes("Lose")) {
      computerScore++;
   }

   playerScorePara.textContent = `Player Wins: ${playerScore}`;
   computerScorePara.textContent = `Computer Wins: ${computerScore}`;
   resultsSection.appendChild(playerScorePara);
   resultsSection.appendChild(computerScorePara);

   if (playerScore === 5 || computerScore === 5) {
      gameOver();
   }
}

function gameOver() {
   playerBtns.forEach((button) => button.disabled = true);
   if (playerScore > computerScore) {
      matchResultPara.textContent = 'You won the match!';
   }
   else {
      matchResultPara.textContent = 'You lost the match.';
   }
   resultsSection.appendChild(matchResultPara);

   restartBtn.disabled = false;
   resultsSection.appendChild(restartBtn);
}

function restartGame() {
   restartBtn.disabled = true;
   restartBtn.remove();
   matchResultPara.remove();
   playerScore = 0;
   computerScore = 0;
   playerScorePara.remove();
   computerScorePara.remove();
   roundResult.remove();
   playerBtns.forEach((button) => button.disabled = false);
}