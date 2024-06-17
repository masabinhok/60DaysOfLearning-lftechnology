import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

import { useState } from "react";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName}, ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    console.log(`item deleted:${todoItemName}`);
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo onNewItem={handleNewItem} />
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
      {todoItems.length === 0 && <WelcomeMessage />}
    </div>
  );
}
