import React, { useContext } from "react";
import "../css/App.css";
import { TodoContext } from "../contexts/TodoContext";

// Use the debounced function in the input
function TodoSearch() {
  const { searchValue, filterTodos } = useContext(TodoContext);

  return (
    <input
      className="mb-5 search-bar"
      value={searchValue}
      placeholder="Ingrese el nombre de la tarea"
      onChange={filterTodos}
    />
  );
}
export { TodoSearch };
