"use strict"; 

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let change;
const msg = document.querySelector(".message"); 
const playerScore = document.querySelector(".score");
const numberGuess = document.querySelector(".number");
const display = document.querySelector(".number");
const body = document.querySelector("body");

const displayMessage = (message) => {
  msg.textContent = message;
};

const currentScore = (score) => {
  playerScore.textContent = score;
};

const mysteryNumber = (secretNumber) => {
  numberGuess.textContent = secretNumber;
};

const dispWidth = (width) => {
  display.style.width = width;
};

const backgroundColor = (color) => {
  body.style.backgroundColor = color;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("🚫 Please enter a number!");
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("Well Done! You Guessed the Correct Number!  🎉 ");
    mysteryNumber(secretNumber);
    backgroundColor("green");
    let i = 0;
    change = setInterval(() => {
      let color = ["red", "magenta", "blue", "green"];
      backgroundColor(color[i]);
      i = (i + 1) % color.length;
    }, 1000);

    dispWidth("30rem");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      currentScore(score);
    } else {
      displayMessage("👎 You lost the game!");
      currentScore(0);
    }
  }
});

/* play again!  */
document.querySelector(".again").addEventListener("click", function () {
  clearInterval(change);
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  currentScore(score);
  mysteryNumber("?");
  document.querySelector(".guess").value = "";
  backgroundColor("#222");
  dispWidth("15rem");
});
