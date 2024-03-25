import React from "react";
import "../css/TodoIcon.css";
import { ReactComponent as CheckIcon } from "../assets/icons/check.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/delete.svg";

const iconTypes = {
  check: (color) => <CheckIcon className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteIcon className="Icon-svg" fill={color} />,
};

const TodoIcon = ({ type, color, onClick }) => {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
};

export { TodoIcon };