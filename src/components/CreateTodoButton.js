import React, { useContext } from "react";
import { ReactComponent as AddIcon } from "../assets/icons/add.svg";
import "../css/TodoCounter.css";
import { TodoContext } from "../contexts/TodoContext";
function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext);
  return (
    <button
      className="mt-5 btn btn-primary col-12"
      onClick={() =>
        setOpenModal((prevState) => (prevState ? prevState : true))
      }
    >
      <span className="icon">
        <AddIcon fill={"white"} />
      </span>
      Nueva tarea
    </button>
  );
}

export { CreateTodoButton };
