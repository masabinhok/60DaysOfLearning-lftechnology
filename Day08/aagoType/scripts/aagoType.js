import { words } from "./data.js";

const wordCount = words.length;

//generate random word
function randomWord() {
  const randomIndex = Math.floor(Math.random() * wordCount);
  return words[randomIndex];
}

//default loading
newGame();

//format word
function formatWord(word) {
  return `<div class="word">
  <span class="letter">
  ${word.split("").join(`</span><span class="letter">`)}</span></div>`;
}

//new game
function newGame() {
  document.querySelector("#words").innerHTML = "";
  for (let i = 0; i < 200; i++) {
    document.querySelector("#words").innerHTML += formatWord(
      randomWord()
    );
  }
}

//new-game-button eventlistener
document.querySelector(".new-game").addEventListener("click", newGame);

//restart-button evenlistener
document.querySelector(".try-again").addEventListener("click", newGame);


