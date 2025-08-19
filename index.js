"use strict";
window.onload = function () {
  let humanTotalScore = localStorage.getItem("humanTotalScore") || 0;

  let computerTotalScore = localStorage.getItem("computerTotalScore") || 0;
  console.log(humanTotalScore, computerTotalScore);
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

  const choices = ["rock", "paper", "scissor"];

  computerScore.textContent = computerTotalScore;
  humanScore.textContent = humanTotalScore;

  //selecting the choice
  choicesBtn.forEach((choice) => {
    choice.addEventListener("click", (e) => {
      const value = e.target.getAttribute("data-value");
      const computerChoice = Math.floor(Math.random() * 2) + 1;
      console.log(value, choices[computerChoice]);
      if (value === choices[computerChoice]) {
        console.log("match tie");
        nextBtn.style.display = "none";
        gameboardSection.style.display = "none";
        resultSection.style.display = "flex";
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
  });
};
