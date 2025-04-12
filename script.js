let computerMove = '';

function pickComputerMove() {
    const randomNumber = Math.random();

    //Rock
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    };
    
    let result = '';
    if (computerMove === 'rock') {
        result = 'It is a tie.';
    } else if (computerMove === 'paper') {
        result = 'You lose.';
    } else if (computerMove === 'scissors') {
        result = 'You win!';
    };
    
    alert(`You picked rock. Computer picked ${computerMove}. ${result}`);

    //Paper
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    };

    if (computerMove === 'paper') {
        result = 'It is a tie.';
    } else if (computerMove === 'scissors') {
        result = 'You lose.';
    } else if (computerMove === 'rock') {
        result = 'You win!';
    };

    alert(`You picked paper. Computer picked ${computerMove}. ${result}`)
};

pickComputerMove();
