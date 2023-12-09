// import './App.css';
import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { Footer } from "./Footer";
const todos = [
  {
    text: "Completar curso SAP",
    complete: true,
  },
  {
    text: "Completar curso React",
    complete: false,
  },
  {
    text: "Completar curso Flutter",
    complete: false,
  },
  {
    text: "Tomar curso Docker",
    complete: false,
  },
  {
    text: "Tomar curso SAP SDK",
    complete: false,
  },
];

function App() {
  return (
    <React.Fragment>
      <div className="d-block d-sm-flex justify-content-between mt-4">
        <div className="container col-sm-7 col-12">
          <div className="card p-5">
            <h5 className="card-title text-center mb-3">
              Lista de ToDo's pendientes
            </h5>
            <TodoSearch />
            <TodoList>
              {todos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  complete={todo.complete}
                />
              ))}
            </TodoList>
            <CreateTodoButton />
          </div>
        </div>
        <div className="container col-sm-5 col-12">
          <div className="p-5 card mt-3 mt-sm-0">
            <TodoCounter
              completed={todos.filter((t) => t.complete).length}
              total={todos.length}
            />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
