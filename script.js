const triangle = document.querySelector(".triangle");
const threeOptionsContainer = document.querySelector(".three_powers");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const computerChoice = document.querySelector(".computer_choice");
const humanChoice = document.querySelector(".human_choice");
const fightContainer = document.querySelector(".fight");
const againButton = document.querySelector(".again");
const humanScore = document.querySelector(".human_score--value");
const computerScore = document.querySelector(".computer_score--value");

let humanScr = Number(localStorage.getItem("humanScr")) || 0;
let computerScr = Number(localStorage.getItem("computerScr")) || 0;

humanScore.textContent = humanScr;
computerScore.textContent = computerScr;

localStorage.setItem("humanScr", humanScr);
localStorage.setItem("computerScr", computerScr);

againButton.addEventListener("click", function () {
  location.reload();
});

scissors.addEventListener("click", function () {
  humanChoosed = "scissors";
  let computerChoosed = computerSelection();

  threeOptionsContainer.style.display = "none";
  fightContainer.style.display = "flex";

  html = `
    <div class="scissors_container">
    <div class="white_space">
    </div>
      <img
        class="scissors"
        src="images/icon-scissors.svg"
        alt=""
        srcset=""
      />
  </div>`;

  humanChoice.insertAdjacentHTML("beforeend", html);

  console.log(checkWinner(computerChoosed, humanChoosed));
});

paper.addEventListener("click", function () {
  humanChoosed = "paper";
  let computerChoosed = computerSelection();

  threeOptionsContainer.style.display = "none";
  fightContainer.style.display = "flex";

  html = `
    <div class="paper_container">
    <div class="white_space">
    </div>
      <img class="paper" src="images/icon-paper.svg" alt="" srcset="" />
  </div>`;

  humanChoice.insertAdjacentHTML("beforeend", html);

  console.log(checkWinner(computerChoosed, humanChoosed));
});

rock.addEventListener("click", function () {
  humanChoosed = "rock";
  let computerChoosed = computerSelection();

  threeOptionsContainer.style.display = "none";
  fightContainer.style.display = "flex";
  html = `
    <div class="rock_container">
    <div class="white_space">
    </div>
      <img class="rock" src="images/icon-rock.svg" alt="" srcset="" />
  </div>`;

  humanChoice.insertAdjacentHTML("beforeend", html);

  console.log(checkWinner(computerChoosed, humanChoosed));
});

const index = Math.floor(Math.random() * 3);

const selectArr = ["scissors", "paper", "rock"];

function computerSelection() {
  const index = Math.floor(Math.random() * 3);

  html = `<div class="${selectArr[index]}_container">
<div class="white_space">
</div>
  <img class="${selectArr[index]}" src="images/icon-${selectArr[index]}.svg" alt="" srcset="" />
</div>`;

  computerChoice.insertAdjacentHTML("beforeend", html);

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

  localStorage.humanScr = Number(humanScr);
  localStorage.computerScr = Number(computerScr);

  humanScore.textContent = humanScr;
  computerScore.textContent = computerScr;
  return result;
}
