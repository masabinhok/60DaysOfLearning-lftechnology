//Accesing the DOM elements

const nameInput = document.getElementById("name");

const emailInput = document.querySelector("#email");

const passwordInput = document.querySelector("#password");

const submitButton = document.querySelector(".submit-button");

//Event listeners
let formDetailsHTML = "";
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!name || !email || !password) {
    alert("Please fill all the fields");
    return;
  }

  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  let html = `<p>Name:${name}</p>
  <p>Email:${email}</p>
  <p>Password:${password}</p>`;

  formDetailsHTML += html;

  document.querySelector(".js-form-details").innerHTML = formDetailsHTML;

  document.querySelector(".js-form-details").classList.add("form-visibility");
});
