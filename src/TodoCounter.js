import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <div>
      <h5 className="card-title text-center my-4">
        Has completado {completed} de {total} ToDo's
      </h5>
    </div>
  );
}

export { TodoCounter };
