import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Footer } from "./components/Footer";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodosError } from "./components/TodosError";
import { TodosLoading } from "./components/TodosLoading";
import { TodoContext } from "./contexts/TodoContext";

const AppUI = () => {
  return (
    <>
      <div className="px-sm-5 container d-flex flex-column justify-content-between">
        <TodoContext.Consumer>
          {({
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
            searchValue,
            filterTodos,
            totalTodos,
            completedTodos,
          }) => (
            <div className="px-0 m-0">
              <div
                className="d-sm-flex
          app-content
          d-block flex-sm-row flex-column card p-sm-5 p-3 
          justify-content-between"
              >
                <div className="col-sm-7 col-12 col-card">
                  {loading ? <TodosLoading /> : null}
                  {error && <TodosError />}
                  {!loading & !error ? (
                    <div>
                      <h5 className="card-title text-center mb-3">
                        Lista de ToDo's pendientes
                      </h5>
                      <TodoSearch
                        searchValue={searchValue}
                        onSearchTodos={filterTodos}
                      />

                      <TodoList className="align-items-center justify-center">
                        {!loading &&
                          searchValue === "" &&
                          searchedTodos.length === 0 && (
                            <p>¡Crea tu primer TODO!</p>
                          )}

                        {searchedTodos.map((todo) => (
                          <TodoItem
                            key={todo.text}
                            text={todo.text}
                            complete={todo.complete}
                            onComplete={completeTodo}
                            onDelete={deleteTodo}
                          />
                        ))}
                      </TodoList>
                    </div>
                  ) : null}
                </div>

                <div className="col-sm-5 col-12 col-card">
                  <TodoCounter total={totalTodos} completed={completedTodos} />
                  <CreateTodoButton />
                </div>
              </div>
            </div>
          )}
        </TodoContext.Consumer>
        <Footer />
      </div>
    </>
  );
};

export default AppUI;
