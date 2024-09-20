# JavaScript Projects Collection

## Overview

This repository contains a collection of JavaScript projects, each designed to demonstrate various functionalities and utilities. Below is a brief description of each project and its purpose.

### 1. Number Guessers

**Description**:  
Number Guessers is a game where users try to guess a randomly generated number within a specified range. The game provides feedback on whether the guess is too high or too low until the user guesses the correct number.

**Purpose**:
- Demonstrates basic game logic and random number generation.
- Provides practice with conditionals and loops.
- Helps improve user interaction with simple feedback mechanisms.

**How It Helps**:
- Enhances understanding of game development concepts.
- Improves problem-solving skills in a fun and interactive way.

---

### 2. Meal Maker.js

**Description**:  
Meal Maker.js is a tool that allows users to create and manage meal plans. It can generate meal suggestions based on predefined recipes and ingredients.

**Purpose**:
- Simplifies meal planning by offering recipe suggestions.
- Allows users to manage and organize their meal choices.
- Provides functionality to add, edit, and remove recipes.

**How It Helps**:
- Aids in organizing meal planning and dietary choices.
- Helps users make informed decisions about their meals.

---

### 3. Mensaje de Ballena.js

**Description**:  
Mensaje de Ballena.js is a fun project that converts user input into a "whale language" format, where text is transformed into a playful and whimsical language inspired by whale sounds.

**Purpose**:
- Demonstrates text manipulation and conversion.
- Provides a creative and entertaining way to work with strings.

**How It Helps**:
- Offers a playful approach to learning string operations.
- Enhances creativity and engagement with programming concepts.

---

### 4. Team Stats.js

**Description**:  
Team Stats.js is a utility that allows users to input and analyze statistics for sports teams. It can calculate various performance metrics and display team data in a structured format.

**Purpose**:
- Facilitates the analysis of sports team performance.
- Provides functionality to input, calculate, and visualize team statistics.

**How It Helps**:
- Assists in managing and interpreting sports data.
- Provides insights into team performance and trends.

---

## Getting Started

To use any of these projects, clone the repository and open the respective JavaScript files in a compatible environment. Ensure that you have a basic understanding of JavaScript to make the most out of these tools.

Feel free to explore, modify, and improve these projects to better suit your needs or to learn more about JavaScript development.

## Contribution

If you'd like to contribute to any of these projects, please fork the repository, make your changes, and submit a pull request. Your contributions are welcome!


# Rock, Paper, or Scissors Game

## Description

This project is a JavaScript implementation of the classic "Rock, Paper, Scissors" game. It allows a user to play against the computer, which randomly chooses its moves. The main objective of the game is to determine the winner based on the following rules:

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

## Purpose

This project serves both educational and practical purposes:
1. **Practice JavaScript**: The code helps beginner developers practice using functions, conditionals, and user-system interaction.
2. **Game logic demonstration**: Several functions are implemented to simulate the game, including user input, random computer choice, and winner determination.
3. **GitHub familiarization**: This repository acts as a reference for publishing and documenting projects on GitHub.

## Main Functions

### 1. `getUserChoice(userInput)`
This function takes the user’s choice (`"rock"`, `"paper"`, or `"scissors"`) and validates it. If the input is valid, it returns it in lowercase; otherwise, it returns an error message.

```javascript
const getUserChoice = (userInput) => { 
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput;
  } else {
    return "Error!";
  }
};


# Training Days

## Description

The "Training Days" project is a JavaScript program designed to simulate the process of assigning training events and calculating the required days of preparation for an athlete. The program randomly selects an event from a set of sports, then determines how many days the athlete has to train for the chosen event. It also logs this information for multiple athletes.

## Project Overview

In this project:
- An event is randomly selected from three possible options: `Marathon`, `Triathlon`, or `Pentathlon`.
- The number of training days is calculated based on the event:
  - Marathon: 50 days
  - Triathlon: 100 days
  - Pentathlon: 200 days
- The athlete's name, assigned event, and training time are then logged to the console.

## Purpose

The purpose of this project is to demonstrate the use of functions, conditionals, and variable scopes in JavaScript. It also practices working with randomization and string interpolation to display relevant information.

### Main Functions

1. **`getRandEvent()`**  
   This function randomly selects and returns one of the three sports events: `"Marathon"`, `"Triathlon"`, or `"Pentathlon"`.

   ```javascript
   const getRandEvent = () => {
     const random = Math.floor(Math.random() * 3);
     if (random === 0) {
       return "Marathon";
     } else if (random === 1) {
       return "Triathlon";
     } else if (random === 2) {
       return "Pentathlon";
     }
   };

