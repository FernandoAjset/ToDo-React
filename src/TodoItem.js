import React from "react";
import "./css/TodoItem.css";
import { CompleteIcon } from "./components/CompleteIcon";
import { DeleteIcon } from "./components/DeleteIcon";

function TodoItem(props) {
  return (
    <li className="p-2">
      <div className="input-group d-flex justify-content-between align-items-center">
        <CompleteIcon
          completed={props.complete}
          onComplete={() => props.onComplete(props.text)}
        ></CompleteIcon>
        <span
          onClick={() => props.onComplete(props.text)}
          className={`col-8 ${
            props.complete && "text-decoration-line-through"
          }`}
        >
          {props.text}
        </span>
        <DeleteIcon onDelete={() => props.onDelete(props.text)}></DeleteIcon>
      </div>
    </li>
  );
}

export { TodoItem };
