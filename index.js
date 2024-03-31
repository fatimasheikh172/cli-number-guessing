#! /usr/bin/env node
import inquirer from "inquirer";
// 1>computer will generate a random number
// 2> user input for guessing number
//3> compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations!you guessed a right number.");
}
else {
    console.log("you guessed a wrong number.");
}
