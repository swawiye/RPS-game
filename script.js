//SCORES
const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
 }; //'JSON.parse()' converts a string back into an object, gets the value out of localStorage

console.log(score);

//MAKE THE SCORE APPEAR ON THE PAGE & UPDATE IT
updateScoreElement();


/* 
//Checking if the score is null, Restores 'null' to the default score
if (score === null) { //'score === null' is the same as '!score'
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
};
*/

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

    //MAKE EACH BUTTON UNIQUELY DISPLAY ITS NAME
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

    //SAVING THE SCORE IN LOCAL STORAGE
    localStorage.setItem('score', JSON.stringify(score)); //localStorage only supports strings, 'JSON.stringify()' converts obejcts into strings

    //UPDATE THE SCORE ON THE PAGE
    updateScoreElement();


    //DISPLAY THE RESULT
    document.querySelector('.js-result').innerHTML = result;

    //DISPLAY THE MOVES
    document.querySelector('.js-moves').innerHTML = 
    `
        You 
        <img src="assets/${playerMove}-emoji.png" class="move-icon">
        <img src="assets/${computerMove}-emoji.png" class="move-icon">
        Computer
    `;
};

//UPDATE THE SCORE
function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

//RESET SCORE
function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score'); //Remove previous score from localStorage
    updateScoreElement(); //Resets the score on the page
};

 

