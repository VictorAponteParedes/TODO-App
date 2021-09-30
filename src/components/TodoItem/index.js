import React from "react";
import "./TodoItem.css";

export function TodoItem({ completed, text, onCompleteTodo, onDeleteTodo }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onCompleteTodo}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDeleteTodo}>
        X
      </span>
    </li>
  );
}
