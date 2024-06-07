//getElementById: used to select element with unique Id
let a = document.getElementById("id1");

console.log(a);

//getElementByClassName: used to select every element with class name

let b = document.getElementsByClassName("class1");
console.log(b);

//getElementsByTagName: used to select every element with tag name
let c = document.getElementsByTagName("p");
console.log(c);

//querySelector is the OG method to select an element

//querySelector: used to select first element with css selector

let d = document.querySelector(".class1");
console.log(d);

//querySelectorAll: used to select every element with css selector
let e = document.querySelectorAll(".item");
console.log(e);
