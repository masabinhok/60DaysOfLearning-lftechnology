import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleReverseClick = () => {
    const reverseText = text.split("").reverse().join("");
    setText(reverseText);
  };

  function handleCopy() {
    let text = document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
  }

  function handleExtraSpace() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  let count = 0;
  const handleColorChange = () => {
    if (count % 2 === 0) {
      document.getElementById("myBox").style.color = "green";
    } else {
      document.getElementById("myBox").style.color = "red";
    }
    count++;
  };

  const [text, setText] = useState("");
  //we can't do text = "new text" use setText instead.
  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            onChange={handleOnchange}
            value={text}
            rows="8"
            id="myBox"
            className="form-control"
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary">
          Convert to UPPERCASE
        </button>
        <button onClick={handleLowerClick} className="btn btn-primary mx-3">
          Convert to LOWERCASE
        </button>
        <button
          onClick={handleReverseClick}
          className="btn btn-primary mx-3 my-3"
        >
          Reverse text
        </button>
        <button
          onClick={handleClearClick}
          className="btn btn-primary mx-3 my-3"
        >
          Clear text
        </button>{" "}
        <button
          onClick={handleColorChange}
          className="btn btn-primary mx-3 my-3"
        >
          Change color
        </button>
        <button onClick={handleCopy} className="btn btn-primary mx-3 my-3">
          Copy text
        </button>
        <button
          onClick={handleExtraSpace}
          className="btn btn-primary mx-3 my-3"
        >
          Handle extra spaces
        </button>
      </div>
      <div className="container my-2">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
