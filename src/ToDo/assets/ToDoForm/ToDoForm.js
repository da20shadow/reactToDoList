import { useState } from "react";

function ToDoForm({ todos, setTodos }) {
  const [inputTask, setInputTask] = useState("");

  const getInputValue = (e) => {
    let input = e.currentTarget.value;
    setInputTask(input);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let task = formData.get("task");

    addTask(task);
  };
  const addTask = (task) => {
    let id = Math.floor(Math.random() * 1000);
      let newTask = {
        id: id,
        task: task,
        completed: false,
      };
      setTodos((oldTodos) => [newTask,...oldTodos]);
      setInputTask("");
  };
  return (
    <form className="todo-header" method="post" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Task Title..."
        name="task"
        onChange={getInputValue}
      />
      <input type="submit" className="addBtn" value="Add" />
    </form>
  );
}

export default ToDoForm;
