// let node = document.querySelector('.node');
// console.log(node.nodeType);
// console.log(node.nodeName);
// console.log(node.nodeValue);


let body = document.body
console.log(body.parentNode);
console.log(body.parentElement);
console.log(body.childNodes);
console.log(body.childElementCount);
console.log(body.firstChild);
console.log(body.lastChild);    
console.log(body.nextSibling);
console.log(body.previousSibling);

//Accessing the element 
let container = document.getElementById('container'); //accessing the element with id container
let paragraphs = document.getElementsByTagName('p');//accessing the element with tag name p
let paragraph  = document.querySelector('.text'); //accessing the element with class name text

//Creating a new element
let newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph';

//Appending the new element to the container
container.appendChild(newParagraph);

//Checking
console.log(container.childElementCount); // 2

//Modifying an existing element
paragraph.textContent='Hello, Universe!';

//Removing an element
// container.removeChild(paragraph);

//Checking again
console.log(container.childElementCount); // 1

//Traversing the DOM
let parent = container.parentElement;
let firstChild= container.firstChild;
let lastChild = container.lastChild;

console.log(parent);
console.log(firstChild);
console.log(lastChild);