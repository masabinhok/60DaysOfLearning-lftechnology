import React from "react";
import { useState } from "react";

export default function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input
            value={todoName}
            onChange={handleNameChange}
            type="text"
            placeholder="Enter Task"
          />
        </div>
        <div className="col-4">
          <input value={dueDate} onChange={handleDateChange} type="date" />
        </div>
        <div className="col-2">
          <button onClick={handleAddButtonClick} className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
