// import './App.css';
import React from "react";
import AppUI from "./AppUI";
import "./css/App.css";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return <TodoProvider children={<AppUI />}></TodoProvider>;
}

export default App;
