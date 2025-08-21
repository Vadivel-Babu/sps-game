"use strict";
window.onload = function () {
  let humanTotalScore = localStorage.getItem("humanTotalScore") || 0;
  let computerTotalScore = localStorage.getItem("computerTotalScore") || 0;
  let computerScore = document.querySelector(".score.computer");
  let scoreBoard = document.querySelector(".scoreboard");
  let humanScore = document.querySelector(".score.human");
  const choicesBtn = document.querySelectorAll(".choice__btn");
  let gameboardSection = document.querySelector(".gameboard");
  let rulesModal = document.querySelector(".rules__modal");
  let resultSection = document.querySelector(".result");
  let winningSection = document.querySelector(".winning");
  let playAgainBtn = document.querySelectorAll(".btn__play_again");
  const nextBtn = document.querySelector(".next-btn");
  const rulesBtn = document.querySelector(".rules-btn");
  const modalCloseBtn = document.querySelector(".btn__close--modal");
  let message = document.querySelector(".message");
  let chosedItems = document.querySelectorAll(".chosed__item");
  let wonDiv = document.querySelectorAll(".won");

  let span = document.querySelector(".span");

  const choices = ["rock", "paper", "scissor"];

  computerScore.textContent = computerTotalScore;
  humanScore.textContent = humanTotalScore;

  //selecting the choice
  choicesBtn.forEach((choice) => {
    choice.addEventListener("click", (e) => {
      const value = e.target.getAttribute("data-value");
      const computerChoice = Math.floor(Math.random() * 2) + 1;
      if (value === choices[computerChoice]) {
        nextBtn.style.display = "none";
        gameboardSection.style.display = "none";
        resultSection.style.display = "flex";
        message.textContent = "tie up";
        span.textContent = "";
        chosedItems[0].classList.add(choices[computerChoice]);
        chosedItems[1].classList.add(value);
        chosedItems[0].children[0].setAttribute("src", `./images/${value}.svg`);
        chosedItems[1].children[0].setAttribute(
          "src",
          `./images/${choices[computerChoice]}.svg`
        );
      } else if (
        (value === "rock" && choices[computerChoice] === "paper") ||
        (value === "paper" && choices[computerChoice] === "scissor") ||
        (value === "scissor" && choices[computerChoice] === "rock")
      ) {
        computerTotalScore++;
        localStorage.setItem("computerTotalScore", computerTotalScore);
        computerScore.textContent = computerTotalScore;
        nextBtn.style.display = "none";
        gameboardSection.style.display = "none";
        resultSection.style.display = "flex";
        message.textContent = "you lost";
        span.textContent = "against pc";
        chosedItems[0].children[0].setAttribute("src", `./images/${value}.svg`);
        chosedItems[1].children[0].setAttribute(
          "src",
          `./images/${choices[computerChoice]}.svg`
        );
        chosedItems[1].classList.add(choices[computerChoice], "result--won");
        chosedItems[0].classList.add(value);
        wonDiv[1].classList.add("active");
      } else if (
        (value === "paper" && choices[computerChoice] === "rock") ||
        (value === "scissor" && choices[computerChoice] === "paper") ||
        (value === "rock" && choices[computerChoice] === "scissor")
      ) {
        humanTotalScore++;
        localStorage.setItem("humanTotalScore", humanTotalScore);
        humanScore.textContent = humanTotalScore;
        nextBtn.style.display = "inline";
        gameboardSection.style.display = "none";
        resultSection.style.display = "flex";
        message.textContent = "you win";
        span.textContent = "against pc";
        chosedItems[0].children[0].setAttribute("src", `./images/${value}.svg`);
        chosedItems[1].children[0].setAttribute(
          "src",
          `./images/${choices[computerChoice]}.svg`
        );
        chosedItems[1].classList.add(choices[computerChoice]);
        chosedItems[0].classList.add(value, "result--won");
        wonDiv[0].classList.add("active");
      }
    });
  });

  //play again handler
  playAgainBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      winningSection.style.display = "none";
      resultSection.style.display = "none";
      gameboardSection.style.display = "grid";
      scoreBoard.style.display = "flex";
      nextBtn.style.display = "none";
      chosedItems[0].classList.remove(
        "rock",
        "paper",
        "scissor",
        "result--won"
      );
      chosedItems[1].classList.remove(
        "rock",
        "paper",
        "scissor",
        "result--won"
      );
      wonDiv[0].classList.remove("active");
      wonDiv[1].classList.remove("active");
    });
  });

  //modal open button handler
  rulesBtn.addEventListener("click", () => {
    rulesModal.style.display = "block";
  });

  //modal close button handler
  modalCloseBtn.addEventListener("click", () => {
    rulesModal.style.display = "none";
  });

  //next button handler
  nextBtn.addEventListener("click", () => {
    scoreBoard.style.display = "none";
    resultSection.style.display = "none";
    gameboardSection.style.display = "none";
    winningSection.style.display = "block";
    nextBtn.style.display = "none";
  });
};
