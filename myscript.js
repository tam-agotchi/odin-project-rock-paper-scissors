
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    switch (num) {
        case 0:
            console.log('rock');
            break;
        case 1:
            console.log('paper');
            break;
        case 2:
            console.log('scissors');
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?")
    if (choice == "rock") {
        console.log('rock');
    }
    else if (choice == "paper") {
        console.log('paper');
    }
    else if (choice == "scissors") {
        console.log('scissors');
    }
}

getComputerChoice();
getHumanChoice();