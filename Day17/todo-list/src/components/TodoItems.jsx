import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((todoItem, index) => (
        <TodoItem
          onDeleteClick={onDeleteClick}
          key={index}
          todoName={todoItem.name}
          todoDate={todoItem.dueDate}
        />
      ))}
    </div>
  );
};

export default TodoItems;
