import React from "react";
import './css/App.css';
// Use the debounced function in the input
function TodoSearch({ searchValue, onSearchTodos }) {
  return (
    <input
      className="mb-5 search-bar"
      value={searchValue}
      placeholder="Ingrese el nombre de la tarea"
      onChange={onSearchTodos}
    />
  );
}
export { TodoSearch };

