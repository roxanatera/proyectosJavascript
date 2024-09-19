let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


let generateTarget = () => {
  Math.floor(Math.random() * 9);
};

const compareGuesses = (human, computer, target) => {
  if (Math.abs(human === computer)) {
    return true;
  } else if (Math.abs(human > computer)) {
    return true;
  } else if (Math.abs(computer < human)) {
    return false;
  } else if (Math.abs(human === target)) {
    return true;
  } else {
    return "Error!!! Something is wrong";
  }
};

let updateScore = player => {
    if (player === 'human') {
        humanScore += 1;
    } else if (player === 'computer') {
        computerScore += 1;
    }
};

const advanceRound = () => {
  currentRoundNumber += 1;
}
