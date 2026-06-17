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

function updateScoreboard(humanScore, computerScore) {
    document.querySelector('.human_score').textContent = humanScore;
    document.querySelector('.computer_score').textContent = computerScore;
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

    const buttons = document.querySelectorAll('.button-container')
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const humanSelection = event.target.innerText.toLowerCase()
            console.log(humanSelection)
            const result = playRound(humanSelection, getComputerChoice())
            if (humanScore < 5 && computerScore < 5) {
                if (result === 1) humanScore++;
                if (result === -1) computerScore++;
                updateScoreboard(humanScore, computerScore)
            } else if (humanScore == 5) {
                console.log("u won!")
            } else if (computerScore == 5) {
                console.log("u lose")
            }
        })
    })

}

playGame();