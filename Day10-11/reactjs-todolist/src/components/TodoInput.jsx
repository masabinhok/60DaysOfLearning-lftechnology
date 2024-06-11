import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    return <header>
      <input type="text" placeholder="Enter Todo" />
      <button>Add</button>
    </header>;
  }
}
