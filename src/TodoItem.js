import React from "react";

function TodoItem(props) {
  return (
    <li>
      <span>{props.complete ? "C" : "P"}</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
