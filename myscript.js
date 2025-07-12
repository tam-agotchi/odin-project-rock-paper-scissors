function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    switch (num) {
        case 0:
            console.log('rock');
            return('rock');
            break;
        case 1:
            console.log('paper');
            return('paper');
            break;
        case 2:
            console.log('scissors');
            return('scissors');
    }
}

function getHumanChoice() {
    let input = prompt("Rock, paper, or scissors?");
    let choice = input.toLowerCase();
    if (choice == "rock") {
        console.log('rock');
        return('rock');
    }
    else if (choice == "paper") {
        console.log('paper');
        return('paper');
    }
    else if (choice == "scissors") {
        console.log('scissors');
        return('scissors');
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("It's a tie!");
            return 0;
        }
        if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissors')
        || (humanChoice =='scissors' && computerChoice == 'rock')) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            return -1;
        } 

        if((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice =='paper' && computerChoice =='rock')
        || (humanChoice =='scissors' && computerChoice =='paper')) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            return 1;
        }
    }

    for(i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);
        if (result === 1) humanScore++;
        if (result === -1) computerScore++;
    }
    console.log(`Final Score: You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();