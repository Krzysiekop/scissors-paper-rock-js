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
const winnerText = document.querySelector(".result_text");

//score values
let humanScr = Number(localStorage.getItem("humanScr")) || 0;
let computerScr = Number(localStorage.getItem("computerScr")) || 0;

humanScore.textContent = humanScr;
computerScore.textContent = computerScr;

localStorage.setItem("humanScr", humanScr);
localStorage.setItem("computerScr", computerScr);

const winnigConditions = {
  scissors: "paper",
  paper: "rock",
  rock: "scissors",
};

//Main function
const main = () => {
  const buttons = [scissors, rock, paper];
  buttons.forEach((element) => {
    element.addEventListener("click", function () {
      const humanChoosed = element.className;

      threeOptionsContainer.style.display = "none";
      fightContainer.style.display = "flex";

      renderHumanChoice(humanChoosed);
      const computerChoosed = computerSelection();

      checkWinner(computerChoosed, humanChoosed);
    });
  });
};

main();
//Sub functions
function renderHumanChoice(humanChoosed) {
  html = `
    <div class="${humanChoosed}_container scaleUp">
    <div class="white_space">
    </div>
      <img
        class="${humanChoosed}"
        src="images/icon-${humanChoosed}.svg"
        alt=""
        srcset=""
      />
    </div>`;

  humanChoice.insertAdjacentHTML("beforeend", html);
}

function computerSelection() {
  const selectArr = ["scissors", "paper", "rock"];
  const index = Math.floor(Math.random() * 3);

  renderComputerChoice(selectArr, index);
  return selectArr[index];
}

function renderComputerChoice(selectArr, index) {
  html = `<div class="${selectArr[index]}_container scaleUp">
          <div class="white_space">
          </div>
            <img class="${selectArr[index]}" src="images/icon-${selectArr[index]}.svg" alt="" srcset="" />
          </div>`;
  computerChoice.insertAdjacentHTML("beforeend", html);
}

function checkWinner(computerChoosed, humanChoosed) {
  let result;

  if (humanChoosed === computerChoosed) {
    result = "Draft";
    humanScr += 1;
    computerScr += 1;
  } else if (winnigConditions[humanChoosed].includes(computerChoosed)) {
    result = "Human win";
    humanScr += 1;
  } else {
    result = "CPU win";
    computerScr += 1;
  }

  localStorage.humanScr = Number(humanScr);
  localStorage.computerScr = Number(computerScr);

  renderScore(result);

  return result;
}

function renderScore(result) {
  humanScore.textContent = humanScr;
  computerScore.textContent = computerScr;
  winnerText.textContent = result;
}

againButton.addEventListener("click", function () {
  location.reload();
});

const resetScore = document.querySelector(".reset");
resetScore.addEventListener("click", function () {
  localStorage.clear();
  humanScr = 0;
  computerScr = 0;
  humanScore.textContent = 0;
  computerScore.textContent = 0;
});
