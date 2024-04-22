import ServerError from "../assets/images/server-error.svg";

const TodosError = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 flex-column">
      <h2 className="mb-4">Ocurrio un error, intenta nuevamente</h2>
      {/* usar svg desde assets */}
      <img src={ServerError} alt="Server Error" width="300" />
    </div>
  );
};

export { TodosError };
