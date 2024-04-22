import React, { useContext } from "react";
import "../css/TodoItem.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import { TodoContext } from "../contexts/TodoContext";

function TodoItem({ text, complete }) {
  const { completeTodo, deleteTodo } = useContext(TodoContext);

  return (
    <li className="p-2">
      <div className="input-group d-flex justify-content-between align-items-center">
        <CompleteIcon
          completed={complete}
          onComplete={() => completeTodo(text)}
        ></CompleteIcon>
        <span
          onClick={() => completeTodo(text)}
          className={`col-8 ${complete && "text-decoration-line-through"}`}
        >
          {text}
        </span>
        <DeleteIcon onDelete={() => deleteTodo(text)}></DeleteIcon>
      </div>
    </li>
  );
}

export { TodoItem };
