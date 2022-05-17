const computerChoiceDisplay=document.getElementById('computer-choice')
const myChoiceDisplay=document.getElementById('my-choice')
const resultDisplay=document.getElementById('result')

// select all by class 'button'
const possibleChoices = document.querySelectorAll('button')

let userChoice

possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener('click',(e)=>{
    // e is object of possibleChoices
    userChoice = e.target.id

    myChoiceDisplay.textContent = userChoice
}))