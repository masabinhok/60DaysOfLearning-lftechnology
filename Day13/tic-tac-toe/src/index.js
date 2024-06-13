//these import brings all the necessary piece together
import React, { StrictMode } from "react"; //react
import { createRoot } from "react-dom/client";//REACT-dom is react's library to talk to web browsers.

import "./styles.css";//styles for your components.

import App from "./App"; //the component you created in APP.js


//it injects the final product into index.html, as root element is contained in the file.
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//this file is the bridge between the component created in the App.js and the web browser.

