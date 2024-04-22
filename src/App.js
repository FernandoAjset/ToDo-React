// import './App.css';
import React, { useEffect, useRef } from "react";
import { Footer } from "./Footer";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import "./css/App.css";
import { useLocalStorage } from "./hooks/local-storage-hook";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchedTodos, setSearchedTodos] = React.useState([]);

  // Sección de estados derivados
  const completedTodos = todos.filter((t) => !!t.complete).length;
  const totalTodos = todos.length;

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

  useEffect(() => {
    setSearchedTodos(todos);
  }, [todos]); // Este efecto se ejecuta cada vez que 'todos' cambia

  return (
    <React.Fragment>
      <div className="px-sm-5 container d-flex flex-column justify-content-between">
        <div className="px-0 m-0">
          <div
            className="d-sm-flex
          app-content
          d-block flex-sm-row flex-column card p-sm-5 p-3 
          justify-content-between"
          >
            <div className="col-sm-7 col-12 col-card">
              <h5 className="card-title text-center mb-3">
                Lista de ToDo's pendientes
              </h5>
              <TodoSearch
                searchValue={searchValue}
                onSearchTodos={filterTodos}
              />
              <TodoList>
                {loading && <p>Cargando...</p>}
                {error && <p>Hubo un error!!!</p>}

                {!loading && searchedTodos.length === 0 && (
                  <p>¡Crea tu primer TODO!</p>
                )}

                {searchedTodos.map((todo) => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    complete={todo.complete}
                    onComplete={completeTodoFunction}
                    onDelete={onDeleteTodoFunction}
                  />
                ))}
              </TodoList>
            </div>
            <div className="col-sm-5 col-12 col-card">
              <TodoCounter completed={completedTodos} total={totalTodos} />
              <CreateTodoButton />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
