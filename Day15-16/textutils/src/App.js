import { useState } from "react";
import "./App.css";
// import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("Dark");
      document.body.style.backgroundColor = "#242424";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
