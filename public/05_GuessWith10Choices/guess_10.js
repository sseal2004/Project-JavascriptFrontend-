let secretnum = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guess');
const guessSlot = document.querySelector('.previouschoice');
const lastResult = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.loworhigh');

let prevGuess = [];
let numGuess = 1;

submit.addEventListener('click', () => {
  const guess = Number(userInput.value);
  validateGuess(guess);
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < 1 || guess > 100) {
    alert("Number must be between 1 and 100.");
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    if (guess === secretnum) {
      displayMessage("🎉 Congratulations! You guessed it right!");
      endGame();
    } else if (numGuess === 10) {
      displayMessage(`💀 Game over! The number was ${secretnum}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess < secretnum) {
    displayMessage("📉 Too low! Try again.");
  } else if (guess > secretnum) {
    displayMessage("📈 Too high! Try again.");
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  lastResult.innerHTML = `${10 - numGuess}`;
  numGuess++;
}

function displayMessage(message) {
  loworhigh.textContent = message;
}

function endGame() {
  userInput.disabled = true;
  submit.disabled = true;
  const newGameBtn = document.createElement('button');
  newGameBtn.textContent = "Start New Game";
  newGameBtn.style.marginTop = "15px";
  document.querySelector('.palate').appendChild(newGameBtn);
  newGameBtn.addEventListener('click', newGame);
}

function newGame() {
  secretnum = Math.floor(Math.random() * 100) + 1;
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  lastResult.innerHTML = '10';
  loworhigh.textContent = '';
  userInput.disabled = false;
  submit.disabled = false;
  userInput.value = '';
  const resetButton = document.querySelector('.palate button:last-of-type');
  if (resetButton && resetButton.textContent === "Start New Game") {
    resetButton.remove();
  }
}









