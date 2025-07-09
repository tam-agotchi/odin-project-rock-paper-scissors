
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
