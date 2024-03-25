import React from "react";
import { ReactComponent as AddIcon } from "../assets/icons/add.svg";
import '../css/TodoCounter.css'


function CreateTodoButton() {
  return (
    <button className="mt-5 btn btn-primary col-12">
      <span className="icon">
        <AddIcon fill={"white"} />
      </span>
        Nueva tarea
    </button>
  );
}

export { CreateTodoButton };
