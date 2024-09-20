//Se crea funcion getUserChoice, con parametro userInput
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "paper" ||
    userInput === "rock" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    return "Error!";
  }
};
// se llama a la función  con entradas válidas e inválidas e imprimiendo los resultados en la consola
console.log(getUserChoice("Paper"));
console.log(getUserChoice("cake"));
//nueva función nombrada getComputerChoicesin parámetros
const getComputerChoice = () => {
  //Dentro de su bloque, utilice Math.random()y para obtener un número entero entre 0 y 2.
  const rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
//Se llama a la función
console.log(getComputerChoice("Paper"));

//Se crea una funcion para determinar un ganador
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is tied";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "The human has won";
  } else {
    return "The computer has won";
  }
};
const playGame = () => {
  let userChoice = getUserChoice("scissors");
  let computerChoice = getComputerChoice();

  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  // The rest of your code goes here
};
playGame();
