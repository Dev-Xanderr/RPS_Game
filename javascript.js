
let humanScore = 0;
let computerScore = 0; 


function numgen(){
    return Math.floor(Math.random() * (3 - 0) + 0);
}

function getComputerChoice(){
    number = numgen()

    if (number === 0){
        return "rock"
    }
    else if (number === 1){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function getHumanChoice(){
    let isValidInput = false;
    while (!isValidInput) {
        userInput = prompt("Choose rock, paper or scissors")
    
    if (userInput === null){
        alert("Invalid Input, Please try again.")
        continue;
    }

    userInput = userInput.trim().toLowerCase();

    if(userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        isValidInput = true;
    } else {
        alert("Invalid input. Please choose rock paper or scissors")
    }
    }
    return userInput
}


function playRound(humanChoice,computerChoice){
    if (humanChoice === computerChoice){
        return alert("Draw you both chose " + humanChoice + "You: " + humanScore +" Computer: "+computerScore)
    } 
    else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        return alert("Computer wins ,they chose paper, You: " + humanScore +" Computer: "+computerScore)
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return alert("You win, they chose scissors, You: " + humanScore +" Computer: "+computerScore)
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return alert("You win, they chose rock")
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        return alert("You lose, they chose scissors, You: " + humanScore +" Computer: "+computerScore)
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        return alert("You lose, they chose rock, You: " + humanScore +" Computer: "+computerScore)
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return alert("You win, they chose paper, You: " + humanScore +" Computer: "+computerScore)
    }
}   





function playGame(){
    for (let i = 1; i <= 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection= getComputerChoice();
        playRound(humanSelection,computerSelection)
    }

    if (humanScore > computerScore){
        return(alert("You win the game You: " + humanScore +" Computer: "+computerScore))
    } else{
        return(alert("You lose the game You: " + humanScore +" Computer: "+computerScore))
    }

       
}


playGame()