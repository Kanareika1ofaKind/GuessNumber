function getNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

let number = getNumber();
let guesses = 3;
let message = '';

function startGame() {
    guesses = 3
    number = getNumber()

}

function guessNumber() {
    message = '';
    let x = document.getElementById('guessNum')
    if (x.value === '' || isNaN(x.value) === true || Number(x.value) < 1 || Number(x.value) > 10) {
        message = 'Please enter a number between 1 and 10!'
    } else if (Number(x.value) === number) {
        message = "Congrats you won!";
        startGame()
    } else if (guesses > 1) {
        guesses--;
        message = `You have ${guesses} more tr${guesses > 1 ? 'ies' : 'y'} left`
    } else {
        message = `Game Over! \n The number was ${number} \n Start all over again`;
        startGame()
    }
    x.value = ''   // removes the previous entry
    alert(message)
}

const element = document.getElementById("myBtn");
element.addEventListener("click", guessNumber);
