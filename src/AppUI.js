import React, { useContext } from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Footer } from "./components/Footer";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodosError } from "./components/TodosError";
import { TodosLoading } from "./components/TodosLoading";
import { TodoContext } from "./contexts/TodoContext";
import { Modal } from "./components/Modal";

const AppUI = () => {
  const {
    loading,
    error,
    searchedTodos,
    searchValue,
    openModal,
  } = useContext(TodoContext);

  return (
    <>
      <div className="px-sm-5 container d-flex flex-column justify-content-between">
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
                  <TodoSearch />

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
                      />
                    ))}
                  </TodoList>
                </div>
              ) : null}
            </div>

            <div className="col-sm-5 col-12 col-card">
              <TodoCounter />
              <CreateTodoButton />
            </div>
          </div>
        </div>
        {openModal && (
          <Modal>
            <h1 className="text-white">Agregar todo</h1>
          </Modal>
        )}
        <Footer />
      </div>
    </>
  );
};

export default AppUI;
