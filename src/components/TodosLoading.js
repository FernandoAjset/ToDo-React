import "../css/TodosLoading.css";

const TodosLoading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 flex-column">
      <h4 className="text-white">Cargando...</h4>
      <div className="loader">
        <div className="light"></div>
        <div className="black_overlay"></div>
      </div>
    </div>
  );
};

export { TodosLoading };
