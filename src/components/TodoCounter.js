import React, { useContext } from "react";
import "../css/TodoCounter.css";
import { TodoContext } from "../contexts/TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <div className="my-2">
      <h5 className="card-title text-center my-4">
        Has completado {completedTodos} de {totalTodos} ToDo's
      </h5>
      <div className="progress">
        <div
          style={
            completedTodos === 0
              ? { width: "0%" }
              : { width: `${(completedTodos / totalTodos) * 100}%` }
          }
          className="progress-bar progress-bar-striped"
          role="progressbar"
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export { TodoCounter };
