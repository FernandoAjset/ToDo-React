import { useContext, useState } from "react";
import "../css/TodoForm.css";
import { TodoContext } from "../contexts/TodoContext";
function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [descriptionValue, setDescriptionValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!descriptionValue || descriptionValue.trim() === "") {
      return;
    }
    addTodo(descriptionValue.trim());
    setDescriptionValue("");
    setOpenModal(false);
  };

  const changeDescriptionValue = (event) => {
    setDescriptionValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="p-2 p-md-5">
      <h4 className="text-center">Escribe tu nueva tarea</h4>
      <div className="mb-3 mt-5">
        <label className="form-label" htmlFor="description">
          Descripción
        </label>
        <textarea
          required
          rows={5}
          value={descriptionValue}
          onChange={changeDescriptionValue}
          className="form-control"
          id="description"
          placeholder="Escribe la tarea que deseas agregar"
        />
      </div>

      <button className="mt-5 btn btn-sucess col-12">Guardar</button>
    </form>
  );
}

export { TodoForm };
