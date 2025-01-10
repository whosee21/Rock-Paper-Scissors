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
    let choice = prompt("Rock, Paper, Scissors \n Choose: ");
    if (choice === null) {
        throw new Error("Game Cancelled!");
    }
    choice = choice.toLowerCase();
    console.log("You chose " + choice);
    return choice;
}

function playRound(user, computer) {
    let result;
    if (user === null){
        return result = console.log("Game Cancelled!");
    }

    if (user === "rock" && computer === "rock") {
        return console.log("Draw!");
    } else if (user === "rock" && computer === "paper") {
        console.log("You lose! Paper beats Rock!");
        return result = 0;
    } else if (user === "rock" && computer === "scissors") {
        console.log("You win! Rock beats Scissors!");
        return result = 1;
    } else if (user === "paper" && computer === "rock") {
        console.log("You win! Paper beats Rock!");
        return result = 1;
    } else if (user === "paper" && computer === "paper") {
        return console.log("Draw!");
    } else if (user === "paper" && computer === "scissors") {
        console.log("You lose! Scissors beats Paper!");
        return result = 0;
    } else if (user === "scissors" && computer === "rock") {
        console.log("You lose! Rock beats Scissors!");
        return result = 0;
    } else if (user === "scissors" && computer === "paper") {
        console.log("You win! Scissors beats Paper!");
        return result = 1;
    } else if (user === "scissors" && computer === "scissors") {
        return console.log("Draw!");
    } else {
        return result = "Invalid Choice! Please make sure that there's no spaces before and after your choice.";
    }
}

function playGame() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 1; i <=5; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice());
        if (result === 1) {
            userScore++;
        } else if (result === 0){
            computerScore++;
        }
        console.log("User = " + userScore + "\nComputer = " + computerScore);
    }

    if (userScore > computerScore) {
        console.log("Congratulations! You win!");
    } else if (userScore < computerScore) {
        console.log("You lose! Better luck next time!");
    } else {
        console.log("It's a tie!");
    }

    console.log("Game Over!");
}

playGame();