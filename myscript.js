function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    switch (num) {
        case 0:
            return('rock');
            break;
        case 1:
            return('paper');
            break;
        case 2:
            return('scissors');
    }
}

function updateMoves(humanMove, computerMove) {
    document.querySelector('.human_move').textContent = humanMove;
    document.querySelector('.computer_move').textContent = computerMove;
}

function updateScoreboard(humanScore, computerScore) {
    document.querySelector('.human_score').textContent = humanScore;
    document.querySelector('.computer_score').textContent = computerScore;
}

function capitalize(string) {
    return (string[0].toUpperCase() + string.substring(1))
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            document.querySelector('.veredict').textContent = "It's a tie!";
            return 0;
        }
        if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissors')
        || (humanChoice =='scissors' && computerChoice == 'rock')) {
            document.querySelector('.veredict').textContent = "You lose! " + capitalize(computerChoice) + " beats " + humanChoice + "."
            return -1;
        } 

        if((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice =='paper' && computerChoice =='rock')
        || (humanChoice =='scissors' && computerChoice =='paper')) {
            document.querySelector('.veredict').textContent = "You win! " + capitalize(humanChoice) + " beats " + computerChoice + "."
            return 1;
        }
    }

    const buttons = document.querySelectorAll('.button-container')
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const humanSelection = event.target.innerText.toLowerCase()
            const computerSelection = getComputerChoice()

            updateMoves(humanSelection, computerSelection)
            
            const result = playRound(humanSelection, computerSelection)
            if (humanScore < 5 && computerScore < 5) {
                if (result === 1) humanScore++;
                if (result === -1) computerScore++;
                updateScoreboard(humanScore, computerScore)
                
                if (humanScore == 5) {
                    document.querySelector('.veredict').textContent = "First to 5, you win!"
                } else if (computerScore == 5) {
                document.querySelector('.veredict').textContent = "First to 5, computer wins!"
                }
            }
        })
    })

}

playGame();