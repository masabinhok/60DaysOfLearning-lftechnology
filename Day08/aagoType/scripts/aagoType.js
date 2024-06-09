import { words } from "./data.js";

const wordCount = words.length;
const gameTime = 14 *1000 ;
window.timer = null;
window.gameStart = null;

//generate random word
function randomWord() {
  const randomIndex = Math.ceil(Math.random() * wordCount);
  return words[randomIndex - 1];
}

function addClass(el, name) {
  el.className += " " + name;
}

function removeClass(el, name) {
  el.className = el.className.replace(name, "");
}

//format word
function formatWord(word) {
  return `<div class="word">
  <span class="letter">${word
    .split("")
    .join(`</span><span class="letter">`)}</span></div>`;
}

//new game
function newGame() {
  document.querySelector("#words").innerHTML = "";
  for (let i = 0; i < 200; i++) {
    document.querySelector("#words").innerHTML += formatWord(randomWord());
  }
  document.querySelector(".word").classList.add("current");
  document.querySelector(".letter").classList.add("current");
  document.querySelector('.timer').innerHTML = gameTime / 1000 +1;
  window.timer = null;

}

//
function getWpm() {
  const words = [...document.querySelectorAll('.word')];
  const lastTypedWord = document.querySelector('.word.current');
  const lastTypedWordIndex = words.indexOf(lastTypedWord);
  const typedWords = words.slice(0, lastTypedWordIndex);
  const correctWords = typedWords.filter(word=>{
    const letters = [...word.children];
    const incorrectLetters = letters.filter(letter => letter.className.includes('incorrect'));
    const correctLetters = letters.filter(letter => letter.className.includes('correct'));
    return incorrectLetters.length === 0  && correctLetters.length === letters.length;
  })
  return correctWords.length / gameTime * 60000;



}

//game over
function gameOver() {
  clearInterval(window.timer);
  addClass(document.getElementById("game"), "over");
  document.querySelector(".wpm").innerHTML = `WPM ${getWpm()}`;
}

//
document.getElementById("game").addEventListener("keyup", (ev) => {
  const key = ev.key;
  const currentWord = document.querySelector(".word.current");
  const currentLetter = document.querySelector(".letter.current");
  const expected = currentLetter?.innerHTML || " ";
  const isLetter = key.length === 1 && key !== " ";
  const isSpace = key === " ";
  const isBackspace = key === "Backspace";
  const isFirstLetter = currentWord.firstElementChild === currentLetter;

  if (document.querySelector("#game.over")) {
    return;
  }

  console.log({ key, expected });

  if ((!window.timer && isLetter) || isSpace) {
    window.timer = setInterval(() => {
      if (!window.gameStart) {
        window.gameStart = new Date().getTime();
      }
      const currentTime = new Date().getTime();
      const msPassed = gameStart - currentTime; //1000ms
      const sPassed = Math.round(msPassed / 1000); //1s
      const sLeft = gameTime/1000 + sPassed; //14s
      if (sLeft <= 0) {
        gameOver();
        return;
      }

      document.querySelector(".timer").innerHTML = sLeft + " ";
    }, 1000);
  }

  if (isLetter) {
    if (currentLetter) {
      addClass(currentLetter, key === expected ? "correct" : "incorrect");
      removeClass(currentLetter, "current");

      if (currentLetter.nextElementSibling) {
        addClass(currentLetter.nextSibling, "current");
      }
    } else {
      const incorrectLetter = document.createElement("span");
      incorrectLetter.innerHTML = key;
      incorrectLetter.className = "letter incorrect extra";
      currentWord.appendChild(incorrectLetter);
    }
  }

  //space button

  if (isSpace) {
    if (expected !== " ") {
      const lettersToInvalidate = [
        ...document.querySelectorAll(".word.current .letter:not(.correct)"),
      ];
      lettersToInvalidate.forEach((letter) => {
        addClass(letter, "incorrect");
      });
    }
    removeClass(currentWord, "current");
    addClass(currentWord.nextElementSibling, "current");

    if (currentLetter) {
      removeClass(currentLetter, "current");
    }
    addClass(currentWord.nextSibling.firstElementChild, "current");
  }

  if (isBackspace) {
    if (currentLetter && isFirstLetter) {
      removeClass(currentWord, "current");
      addClass(currentWord.previousElementSibling, "current");
      removeClass(currentLetter, "current");
      addClass(currentWord.previousElementSibling.lastElementChild, "current");
      removeClass(
        currentWord.previousElementSibling.lastElementChild,
        "incorrect"
      );
      removeClass(
        currentWord.previousElementSibling.lastElementChild,
        "correct"
      );
    }
    if (currentLetter && !isFirstLetter) {
      removeClass(currentLetter, "current");
      addClass(currentLetter.previousElementSibling, "current");
      removeClass(currentLetter.previousElementSibling, "incorrect");
      removeClass(currentLetter.previousElementSibling, "correct");
    }

    if (!currentLetter) {
      addClass(currentWord.lastElementChild, "current");
      removeClass(currentWord.lastElementChild, "incorrect");
      removeClass(currentWord.lastElementChild, "correct");
    }
  }

  //move lines/words
  if (currentWord.getBoundingClientRect().top > 420) {
    const words = document.getElementById("words");
    const margin = parseInt(words.style.marginTop || "0px");
    words.style.marginTop = margin - 30 + "px";
  }

  // Move cursor to the position of the current letter or word
  const nextLetter = document.querySelector(".letter.current");
  const nextWord = document.querySelector(".word.current");
  const cursor = document.getElementById("cursor");

  if (nextLetter) {
    const letterRect = nextLetter.getBoundingClientRect();
    cursor.style.top = letterRect.top + 2 + "px";
    cursor.style.left = letterRect.left + "px";
  } else if (nextWord) {
    const wordRect = nextWord.getBoundingClientRect();
    cursor.style.top = wordRect.top + 2 + "px";
    cursor.style.left = wordRect.right + "px";
  }
});

//new-game-button eventlistener
document.querySelector(".new-game").addEventListener("click", ()=>{
  gameOver();
  newGame();
});

//default loading
newGame();
