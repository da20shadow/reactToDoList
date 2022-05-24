import { useState } from "react";
import ToDoForm from "./assets/ToDoForm";
import Item from "./assets/Item";
import "./assets/scss/ToDo.css";
function ToDo() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="tasks-container">
      <ToDoForm todos={todos} setTodos={setTodos}/>
      <h1>To Do List:</h1>
      <Item todos={todos} setTodos={setTodos}/>
    </div>
  );
}
export default ToDo;
