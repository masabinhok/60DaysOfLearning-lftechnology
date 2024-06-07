//Accessing the elements
let container = document.getElementById("container"); //accessing every element with id container
let heading = document.querySelector("h1"); //first element with h1
let p = document.querySelector(".text"); //first element with .text class
let paragraph = document.getElementsByClassName("text"); // every element with .text class

//Checking
console.log(container);
console.log(heading);
console.log(paragraph);
console.log(p);

let parent = p.parentNode;
console.log(parent);
let child = container.childNodes;
console.log(child);
let sibling = p.previousElementSibling;
console.log(sibling);

//Create and append new element
let newHeading = document.createElement("h1");
newHeading.innerText = "This is a new heading";
container.appendChild(newHeading);

//Modifying existing element
newHeading.textContent = "DOM needs a serious practice.";
