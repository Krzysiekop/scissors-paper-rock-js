const triangle = document.querySelector(".triangle");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const computerChoice = document.querySelector('.computer_choice');

const humanScore = document.querySelector(".human_score--value");
const computerScore = document.querySelector(".computer_score--value");

let humanScr = 0;
let computerScr = 0;

scissors.addEventListener("click", function () {
  humanChoosed = "scissors";
  let computerChoosed = computerSelection();

  triangle.style.display = "none";
  paper.style.display = "none";
  rock.style.display = "none";
  scissors.style.display = "block";

  console.log(checkWinner(computerChoosed, humanChoosed));
});

paper.addEventListener("click", function () {
  humanChoosed = "paper";
  let computerChoosed = computerSelection();

  triangle.style.display = "none";
  paper.style.display = "none";
  rock.style.display = "none";
  scissors.style.display = "none";

  console.log(checkWinner(computerChoosed, humanChoosed));
});

rock.addEventListener("click", function () {
  humanChoosed = "rock";
  let computerChoosed = computerSelection();

  triangle.style.display = "none";
  paper.style.display = "none";
  rock.style.display = "none";
  scissors.style.display = "none";

  console.log(checkWinner(computerChoosed, humanChoosed));
});

const index = Math.floor(Math.random() * 3);

const selectArr = ["scissors", "paper", "rock"];

function computerSelection() {
  const index = Math.floor(Math.random() * 3);

  html = `
  <img src="images/icon-${selectArr[index]}.svg" alt="" srcset="" />`;

  computerChoice.insertAdjacentHTML('beforeend', html);

  return selectArr[index];
}

function checkWinner(computerChoosed, humanChoosed) {
  let result;

  switch (humanChoosed) {
    case "scissors":
      if (computerChoosed == "scissors") {
        result = "Draft";
        humanScr += 1;
        computerScr += 1;
      }
      if (computerChoosed == "paper") {
        result = "Human win";
        humanScr += 1;
      }
      if (computerChoosed == "rock") {
        result = "Computer win";
        computerScr += 1;
      }
      break;
    case "paper":
      if (computerChoosed == "scissors") {
        result = "Computer win";
        computerScr += 1;
      }
      if (computerChoosed == "paper") {
        result = "Draft";
        humanScr += 1;
        computerScr += 1;
      }
      if (computerChoosed == "rock") {
        result = "Human win";
        humanScr += 1;
      }
      break;
    case "rock":
      if (computerChoosed == "scissors") {
        result = "Computer win";
        computerScr += 1;
      }
      if (computerChoosed == "paper") {
        result = "Human win";
      }
      if (computerChoosed == "rock") {
        result = "Draft";
        humanScr += 1;
        computerScr += 1;
      }
      break;
    default:
  }

  humanScore.textContent = humanScr;
  computerScore.textContent = computerScr;
  return result;
}
