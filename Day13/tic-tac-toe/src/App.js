//this is a react component, a component in react is a piece of resuable code that represents a part of user interface. Components are used to render, manage and update the UI elements in your app.

export default function Board() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}

//first line defines a function called Square, the export js keyword makes this function accessbile outside of this file, you know the concept of modules.

//default keyword tells other files using your code, that its the main function in your file.

//second line returns a button element, return keyword in js symbolizes that you are returning whatever comes after.

//button is a jsx element, meaning combination of js code and html tags, that describes what you would like to diplay..

//in JSX className does same as class does in HTML, className='square' is a button property or a props that tells css how to style the button.
