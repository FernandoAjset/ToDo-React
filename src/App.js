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
    complete: true,
  },
  {
    text: "Tomar curso SAP SDK",
    complete: false,
  },
  {
    text: "Commodo id labore voluptate duis pariatur aliquip enim officia.",
    complete: true,
  },
];

function App() {
  return (
    <React.Fragment>
      <div className="px-sm-5 container d-flex flex-column justify-content-between">
        <div className="px-0 m-0">
          <div className="d-sm-flex d-block flex-sm-row flex-column card p-sm-5 p-3 justify-content-between">
            <div className="col-sm-7 col-12">
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
            </div>
            <div className="col-sm-4 col-12">
              <TodoCounter
                completed={todos.filter((t) => t.complete).length}
                total={todos.length}
              />
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
