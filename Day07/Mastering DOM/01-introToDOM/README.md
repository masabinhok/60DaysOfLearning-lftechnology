##What is DOM ? 
DOM stands for Document Object Model, which is basically a programming interface for web documents which let us change the document structure, styles and content. The DOM reperesents the document as nodes and objects. This way, programming languages can interact with the page.

##Analogy: Think of the DOM as a bridge between HTML/CSS code and JavaScript. Just like you have a blueprint of a buiding (HTML/CSS code) and a team of workers(JavaScript) to make changes, the DOM is the plan that allows the worker to understand and modify the building according to the blueprint.

##The DOM Tree Structure 
When a web page is loaded, the browser creates a DOM tree that represents the document. The DOM tree has a hierarchical structure.

1.Nodes : Everything in the DOM is a node.
-Element nodes: HTML elements(div, p, a);
-Text nodes: The actual text inside the elements
-Attribute nodes: Attributes of a HTML elements (class, id)
-Commnet nodes: Comments in the HTML

See nodes.html
DOM tree represents the nodes of a DOM.
Document
 ├── html
 │    ├── head
 │    │    └── title
 │    │         └── "Document Object Model"
 │    └── body
 │         ├── h1
 │         │    └── "Hello, World!"
 │         └── p
 │              └── "This is a paragraph."

##Key DOM interfaces
Document: represnts the entire HTML document.
Element: represents and HTML element.
Node: The base data type for the DOM, from which various types of nodes inherit.


##Working with Nodes 
Node have various properties and methods. Here are some important ones:
nodeType: Returns the type of the node(element, attribute)
nodeName: Returns the name of the node(div, html, body, title)
nodeValue: Returns or sets the value of a node (value modification of the node)


##Navigating the DOM tree
You can navigate through the DOM tree using various properties:
-parentNode: Gets the parent node of the current node
-childNodes: Gets a list of child nodes.
-firstChild: Gets the first cihld node.
-lastChild: Gets the last child node.
-nextSibling: Gets the sibling node.
previousSibling: Gets the previous sibling node.

##Practical examples
check nodes.js dom-examples.html

##Summary
DOM: A programming interface for web documents, representing the page as a structured tree of nodes.

Nodes: Basic units of DOM(elements, texts, attributes, comments)

DOM tree: Hierarchical structure representing the documnet.

Key interfaces: Document, Node, Element
Node properties/methods : nodeType, nodeName, nodeValue

Navigating the DOM : parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling

Accesing, creating, appending removing the elements in the DOM


EXERCISES 
1. Create a simple HTML page with a few elements(e.g headings, paragraphs, divs)
2. Use Js to : 
- access different elements using various methods
- navigate the DOM tree and log parent, child and sibling nodes.
- create new elements and append them to the document.
- modify the content and attributes of existing element.

By practising these exercises, you'll gain a solid understanding of the DOM structure and how to interact with it using JavaScript.




