//The Scores
const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

console.log(localStorage.getItem('score')); //gets the value out of localStorage

function playGame(playerMove) {
    let computerMove = '';    
    
    function pickComputerMove() {
        const randomNumber = Math.random();
        
        if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
        
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
            computerMove = 'paper';
        } else if (randomNumber >= 2/3 && randomNumber < 1) {
            computerMove = 'scissors';
        };
    
        //return; //gets a value out of the function, closes off the function 
        };
    pickComputerMove(); //runs the code inside the function

    //To make each button uniquely display its name
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'It is a tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win!';
        };
    } else if (playerMove === 'paper'){
        if (computerMove === 'rock') {
            result = 'It is a tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win!';
        };
    } else if ('scissors') {
        if (computerMove === 'rock') {
            result = 'It is a tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win!';
        };
    };

    //UPDATE SCORE
    if (result === 'You win!') {
        score.wins += 1; //'+=' increase the score by one
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'It is a tie.') {
        score.ties += 1;
    };

    localStorage.setItem('score', JSON.stringify(score)); //localStorage only supports strings, 'JSON.stringify()' converts obejcts into strings

    alert(`
        You picked ${playerMove}. Computer picked ${computerMove}. ${result}
        Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
};

//RESET SCORE
function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
};

 

