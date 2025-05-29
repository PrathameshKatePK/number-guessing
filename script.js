// Random number generate (1 to 100)
let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
  const userGuess = document.getElementById('guessInput').value;
  const message = document.getElementById('message');
  const attemptsDisplay = document.getElementById('attempts');

  // value numeric check
  if (userGuess === "") {
    message.textContent = "Please enter a number!";
    return;
  }

  const guess = Number(userGuess);
  attempts++;
  attemptsDisplay.textContent = attempts;

  if (guess === randomNumber) {
    message.textContent = `Correct! The number was ${randomNumber}`;
    message.style.color = "green";
  } else if (guess < randomNumber) {
    message.textContent = "Too Low! Try again.";
    message.style.color = "red";
  } else {
    message.textContent = "Too High! Try again.";
    message.style.color = "red";
  }
}
