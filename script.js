function playGame(playerMove) {
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

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
};

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


/* SYNTAX FOR FUNCTIONS 
function functionName() {
    function body;
};
functionName(); -calling the function to run the code inside the function

EX:
function function1() {
    console.log('hello');
    console.log('2+2');
};

function1();
*/

/* 
//PARAMETERS
function calculateTax(cost) {
    console.log(cost * 0.1);
};
calculateTax(2000);
calculateTax(5000);

function calculateTax(cost, taxPercent = 0.1) {
    console.log(cost * taxPercent);
};
calculateTax(2000, 0.2);


function functionName(parameterName) {
    console.log(parameterName * 0.1);
};
calculateTax(parameterValue[ex:2000]); //passing a value into the parameter

Parameter only exists inside the function scope
*/