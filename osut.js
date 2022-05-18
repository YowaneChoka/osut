const computerChoiceText = document.querySelector('#computer-choice')
const myChoiceText = document.querySelector('#my-choice')
const resultText = document.querySelector('#result')

// select all by class 'button'
const buttons = document.querySelectorAll('.game-btn')

let player, computer, result;

buttons.forEach(button => button.addEventListener("click", () => {
    //for each button in buttons addEventListener

    player = button.textContent;
    computerTurn();
    computerChoiceText.textContent = `Computer: ${computer}`;
    myChoiceText.textContent = `Player: ${player}`;

    resultText.textContent = checkWin();
}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    if (randNum == 1) {
        computer = "ROCK";
    } else if (randNum == 2) {
        computer = "PAPER";
    } else if (randNum == 3) {
        computer = "SCISSORS";
    }

}

function checkWin() {

    console.log('checking');

    if (player == computer) {
        return "Draw!";
    } else if (player == "ROCK" && computer == "SCISSORS") {
        return "YOU WIN!";
    } else if (player == "PAPER" && computer == "ROCK") {
        return "YOU WIN!";
    }
    return "YOU LOSE";
}

// let userChoice

// possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener('click',(e)=>{
//     // e is object of possibleChoices
//     userChoice = e.target.id

//     myChoiceDisplay.textContent = userChoice

// }))