import React from "react";
import {TodoIcon} from "./TodoIcon";

const CompleteIcon = ({completed, onComplete}) => {
  return (
    <TodoIcon
    type="check"
    color={completed?'#199F66':'gray'}
    onClick={onComplete}
    ></TodoIcon>
  );
};

export { CompleteIcon };
