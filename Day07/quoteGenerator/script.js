const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const generateButton = document.getElementById("btn");

function getQuote() {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      quote.textContent = data.content;
      author.textContent = data.author;
    })
    .catch((error) => {
      console.error("Error Fetching API");
    });
}

generateButton.addEventListener("click", () => {
  getQuote();
  console.log("clicked");
});
