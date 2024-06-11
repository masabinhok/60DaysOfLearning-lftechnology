import React from "react";

export default function TodoList() {
  let todos = ["Go to the GYM", "Learn React", "Watch FROM"];
  return <ul className="main">
    {todos.map((todo, todoIndex)=>{
      return (
        <li className="todoItem" >{todo}
        <i class="fa-regular fa-pen-to-square"></i></li>
      )
    })}
  </ul>;
}
