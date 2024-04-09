// import './App.css';
import React, { useEffect, useRef } from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Footer } from "./Footer";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { fakeTodos } from "./constants/fake_todo_data";
import "./css/App.css";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
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

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos ?? []);
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    setTodos(newTodos);
  };

  useEffect(() => {
    // Obtener 'TODOS_V1' del localStorage, si no existe, se asigna 'fakeTodos'
    const storedTodos = localStorage.getItem("TODOS_V1");
    const parsedTodos = JSON.parse(storedTodos ?? []);
    if (parsedTodos && parsedTodos.length > 0) {
      setTodos(parsedTodos);
    } else {
      setTodos(fakeTodos);
      localStorage.setItem("TODOS_V1", JSON.stringify(fakeTodos));
    }
  }, []); // Este efecto se ejecuta sólo una vez, cuando el componente se monta

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
