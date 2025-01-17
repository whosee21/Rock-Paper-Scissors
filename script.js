const body = document.body;

const title = document.createElement("h1");
title.textContent = "Let's play Rock, Paper, and Scissors!";
body.appendChild(title);

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");


body.appendChild(rock);
rock.textContent = "Rock";
body.appendChild(paper);
paper.textContent = "Paper";
body.appendChild(scissors);
scissors.textContent = "Scissors";

const playersChoice = document.createElement("div");
const resultDiv = document.createElement("div");
const score = document.createElement("div");
const gameWinner = document.createElement("h2");

let userScore = 0;
let computerScore = 0;
score.textContent = `You : ${userScore} \nComputer : ${computerScore}`;
body.appendChild(score);


const btn = document.querySelectorAll("button");
btn.forEach((button) => {
    button.addEventListener('click', () => {
        let computer = getComputerChoice();
        body.appendChild(playersChoice);
        playersChoice.textContent = `You picked ${button.textContent}! Computer picked ${computer}!`;

        let result = playRound(button.textContent.toLowerCase(), computer);
        if (result === 2) {
            resultDiv.textContent = `Draw!`;
        } else if (result === 1) {
            resultDiv.textContent = "You win!";
            userScore++;
        } else if (result === 0) {
            resultDiv.textContent = "You lose!";
            computerScore++;
        }
        body.appendChild(resultDiv);
        body.appendChild(score);
        score.textContent = `You : ${userScore} \nComputer : ${computerScore}`;
        
        if (userScore === 5) {
            gameWinner.textContent = `Congratulations! You are the CHAMPION!`;
            disableButtons(gameWinner);
        } else if (computerScore === 5) {
            gameWinner.textContent = `You Lose! Better luck next time!`;
            disableButtons(gameWinner);
        }
    });
});

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
    return choice;
}

function playRound(user, computer) {
    let result;

    if ((user === "rock" && computer === "rock") || (user === "paper" && computer === "paper") || (user === "scissors" && computer === "scissors")) {
        return result = 2
    } else if ((user === "rock" && computer === "paper") || (user === "paper" && computer === "scissors") || (user === "scissors" && computer === "rock")) {
        return result = 0;
    } else if ((user === "rock" && computer === "scissors") || (user === "paper" && computer === "rock") || (user === "scissors" && computer === "paper")) {
        return result = 1;
    }
}

function disableButtons() {
    const allBtn = document.querySelectorAll('button');
    allBtn.forEach((bttn) => {
        bttn.disabled = true;
      });
    body.appendChild(gameWinner);
}