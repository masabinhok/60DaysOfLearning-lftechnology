//get element by id

let heading = document.getElementById("heading");
heading.classList.add("highlight");

//get element by class name: returns a array
let para = document.getElementsByClassName("para");
for (let i = 0; i < para.length; i++) {
  para[i].classList.add("highlight");
}

//get element by tag name: raturns a array
let tagElements = document.getElementsByTagName("p");
for (let i = 0; i < tagElements.length; i++) {
  tagElements[i].classList.add("highlight-blue");
}

//get element by query selector: returns single element
let queryPara = document.querySelector(".paragraph");
queryPara.classList.add("highlight");

//get element by query selector all: returns a node list
let queryParaAll = document.querySelectorAll('.paragraph')
queryParaAll.forEach((para)=>{
  para.classList.add('highlight-yellow');
})
