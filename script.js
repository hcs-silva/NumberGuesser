let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random()*10);
 }
 
 const compareGuesses = (human, computer, Number) => {
   if (human === computer) {
     return true;
   };
 
   if (Math.abs(human - Number) < Math.abs(computer - Number)) {
     return true;
   } else {
     return false;
   }
 }
 
 const updateScore = winner => {
   switch (winner) {
     case 'human':
     humanScore += 1;
     case 'computer':
     computerScore += 1;
   }
 }
 
 const advanceRound = () => {
   currentRoundNumber += 1;
 }