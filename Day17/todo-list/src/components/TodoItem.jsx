import React from "react";

export default function TodoItem({todoName, todoDate, onDeleteClick}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button onClick={()=>{
            onDeleteClick(todoName)
          }} className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}
