// Pseudocode

//  create a function for computer choice

//     make a variable that handle the choices "rock" "paper" and "scissors"
//     generate random numbers that returns 1 of 3 choices
//     use conditional statements to make a choice
//     store that choice in the variable
//     return the variable

//  create new function for user choice
 
//     make a prompt so that the user can choose between rock, paper, or scissors
//     create a variable to store the user chose
//     return the variable
 
//  make 2 variables to track players scores with intial score of 0

//  make a function to play a round
 
//     make the choices case-insensitive so that it will be user-friendly
//     If else statements to determine the round winner

// make the game to have 5 rounds and declare the winner in the end 
//  can use for loop or while loop


console.log("Let's play Rock, Paper, and Scissors!");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 9) + 1;
    if (choice >= 1 && choice <= 3) {
        choice = "Rock";
    } else if (choice >= 4 && choice <= 6) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    choice = choice.toLowerCase();
    console.log("Computer chose " + choice);
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors \n Choose: ", " ");
    choice = choice.toLowerCase();
    console.log("You chose " + choice);
    return choice;
}

getHumanChoice();
getComputerChoice();