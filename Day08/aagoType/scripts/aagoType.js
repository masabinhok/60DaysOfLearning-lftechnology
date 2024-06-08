import { words } from "./data.js";

const wordCount = words.length;

//generate random word
function randomWord() {
  const randomIndex = Math.floor(Math.random() * wordCount);
  return words[randomIndex];
}

//default loading
newGame();


function addClass(el, name){
  el.className+=' '+name;

}

function removeClass(el, name){
  el.className = el.className.replace(name, '');
}

//format word
function formatWord(word) {
  return `<div class="word">
  <span class="letter">${word.split("").join(`</span><span class="letter">`)}</span></div>`;
}

//new game
function newGame() {
  document.querySelector("#words").innerHTML = "";
  for (let i = 0; i < 200; i++) {
    document.querySelector("#words").innerHTML += formatWord(randomWord());
  }
  document.querySelector('.word').classList.add('current');
  document.querySelector('.letter').classList.add('current');
}

//
document.getElementById("game").addEventListener("keyup", (ev) => {
  const key = ev.key;
  const currentLetter = document.querySelector(".letter.current");
  const expected = currentLetter.textContent;
  console.log(key, expected);
});

//new-game-button eventlistener
document.querySelector(".new-game").addEventListener("click", newGame);

//restart-button evenlistener
document.querySelector(".try-again").addEventListener("click", newGame);
