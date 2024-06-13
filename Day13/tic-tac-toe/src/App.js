//this is a react component, a component in react is a piece of resuable code that represents a part of user interface. Components are used to render, manage and update the UI elements in your app.

//value is a props, props are used to pass data from one component to another.

//useState is a hook that returns value and a function setValue to update the value. null passed to useState is used to represents a initial value.

import { useState } from "react";
function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); //Array(9).fill(null)

  function handleClick(i) {
    const nextSquares = squares.splice(0, 9);
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

//first line defines a function called Square, the export js keyword makes this function accessbile outside of this file, you know the concept of modules.

//default keyword tells other files using your code, that its the main function in your file.

//second line returns a button element, return keyword in js symbolizes that you are returning whatever comes after.

//button is a jsx element, meaning combination of js code and html tags, that describes what you would like to diplay..

//in JSX className does same as class does in HTML, className='square' is a button property or a props that tells css how to style the button.
