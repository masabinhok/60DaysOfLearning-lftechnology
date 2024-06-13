//this is a react component, a component in react is a piece of resuable code that represents a part of user interface. Components are used to render, manage and update the UI elements in your app.

//value is a props, props are used to pass data from one component to another.
function Square({ value }) {
  return <button className="square">{value}</button>;
}
export default function Board() {
  return (
    <>
      <div className="board-row">
        {/* value is a prop passed from board to square compnent */}
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}

//first line defines a function called Square, the export js keyword makes this function accessbile outside of this file, you know the concept of modules.

//default keyword tells other files using your code, that its the main function in your file.

//second line returns a button element, return keyword in js symbolizes that you are returning whatever comes after.

//button is a jsx element, meaning combination of js code and html tags, that describes what you would like to diplay..

//in JSX className does same as class does in HTML, className='square' is a button property or a props that tells css how to style the button.
