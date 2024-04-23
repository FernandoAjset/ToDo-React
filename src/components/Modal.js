import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../contexts/TodoContext";
import "../css/Modal.css";
import { TodoIcon } from "./TodoIcon";

const Modal = ({ children }) => {
  const { openModal, setOpenModal } = useContext(TodoContext);
  return ReactDOM.createPortal(
    <div className={`modal ${openModal ? "open" : ""}`}>
      <div className="modal-content">
        {children}
        <TodoIcon
          className="modal-close"
          type="delete"
          color="#B3191A"
          onClick={() => setOpenModal(false)}
        ></TodoIcon>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export { Modal };
