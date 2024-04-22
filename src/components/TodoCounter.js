import React from "react";
import "../css/TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <div className="my-2">
      <h5 className="card-title text-center my-4">
        Has completado {completed} de {total} ToDo's
      </h5>
      <div className="progress">
        <div
          style={
            completed === 0
              ? { width: "0%" }
              : { width: `${(completed / total) * 100}%` }
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
