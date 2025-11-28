let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;

function numgen() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    const number = numgen();
    if (number === 0) return "rock";
    if (number === 1) return "paper";
    return "scissors";
}

function updateScores() {
    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("roundCount").textContent = roundCount;
}

function announceWinner() {
    const resultEl = document.getElementById("resultMessage");
    if (humanScore > computerScore) {
        resultEl.textContent = `Game over! You win! Final Score - You: ${humanScore} Computer: ${computerScore}`;
    } else if (computerScore > humanScore) {
        resultEl.textContent = `Game over! The computer wins! Final Score - You: ${humanScore} Computer: ${computerScore}`;
    } else {
        resultEl.textContent = `Game over! It's a tie! Final Score - You: ${humanScore} Computer: ${computerScore}`;
    }
}

function playRoundR(humanChoice, computerChoice) {
    if (roundCount >= maxRounds) return; // no more rounds after max

    roundCount++;
    let resultText = "";

    if (humanChoice === computerChoice) {
        resultText = `Draw, both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultText = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultText = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }

    updateScores();

    document.getElementById("resultMessage").textContent = resultText;

    if (roundCount === maxRounds) {
        announceWinner();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn1").addEventListener("click", () => playRoundR("rock", getComputerChoice()));
    document.getElementById("btn2").addEventListener("click", () => playRoundR("paper", getComputerChoice()));
    document.getElementById("btn3").addEventListener("click", () => playRoundR("scissors", getComputerChoice()));
});
