import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="list-group-item list-group-item-action p-2">
      <div className="input-group d-flex justify-content-between align-items-center">
        <input
          type="checkbox"
          checked={props.complete}
          className="form-check-input mx-2"
        ></input>
        <span
          className={`ml-2 col-8 ${props.complete && "text-decoration-line-through"}`}
        >
          {props.text}
        </span>
        <button className="btn btn-custom-transparent px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x-square-fill text-danger"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
          </svg>
        </button>
      </div>
    </li>
  );
}

export { TodoItem };
