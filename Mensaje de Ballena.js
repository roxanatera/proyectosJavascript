//Tarea 1:primera variable
let input = "whale talk";
//Tarea 2: Creando una matriz llamada vowels
const vowels = ["a", "e", "i", "o", "u"];
//Tarea 3: Creando variable con matriz vacía.
let resultArray = [];
let resultString;
//Tarea 4: Creando un bucle para recorrer cada letra del input
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
}
console.log(resultArray);

//Tarea 7
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      console.log("Input letter: " + input[i]);
      if (input[i] === "e") {
        resultArray.push(input[i]);
      }
      if (input[i] === "u") {
        resultArray.push(input[i]);
        resultArray.push(input[i]);
      }

      console.log("vowel letter: " + vowels[j]);
      resultArray.push(input[i]);
    }
  }
}
console.log(resultArray);
resultString = resultArray.join("").toUpperCase();
console.log(resultString);
