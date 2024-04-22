import React, { createContext, useState, useRef,useEffect } from "react";
import { useLocalStorage } from "../hooks/local-storage-hook";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [searchedTodos, setSearchedTodos] = React.useState([]);
  const [searchValue, setSearchValue] = useState("");
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const completeTodoFunction = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = !newTodos[todoIndex].complete;
    saveTodos(newTodos);
  };

  const onDeleteTodoFunction = (text) => {
    const newTodos = [...todos.filter((todo) => todo.text !== text)];
    saveTodos(newTodos);
  };

  const timeoutId = useRef(null);

  const filterTodos = (event) => {
    if (!event) return;
    setSearchValue(event.target.value);

    // Cancelar el timeout anterior si existe
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    // Agregar un tiempo de 500 ms para ejecutar el filtro
    timeoutId.current = setTimeout(() => {
      const filteredTodos =
        searchValue === ""
          ? todos
          : todos.filter((todo) => {
              const todoText = todo.text.toUpperCase();
              const searchText = event.target.value.toUpperCase();
              return todoText.includes(searchText);
            });
      setSearchedTodos(filteredTodos);
    }, 500);
  };


  useEffect(() => {
    setSearchedTodos(todos);
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos: todos.length,
        completedTodos: todos.filter((t) => t.complete).length,
        searchValue,
        searchedTodos,
        filterTodos,
        completeTodo: completeTodoFunction,
        deleteTodo: onDeleteTodoFunction,
        addTodo: (text) => {
          const newTodos = [...todos];
          newTodos.push({
            text,
            complete: false,
          });
          saveTodos(newTodos);
        },
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };