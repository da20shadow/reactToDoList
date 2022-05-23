import {useState,useEffect} from 'react';
function Item({ todos, setTodos }) {

    const [temporaryTask,setTemporaryTask] = useState(null);

    useEffect(()=>{

        if (temporaryTask){
            console.log('Start Deletion!')
            deleteTask(temporaryTask.id);
            if (temporaryTask.completed){
                setTodos((oldTodos) => [...oldTodos, temporaryTask]);
            }else{
                setTodos((oldTodos) => [temporaryTask,...oldTodos]);
            }
        }
    },[temporaryTask])
    
    
    const completed = (id) => {
        
        
        todos.filter((task) => {
            if (task.id === id){
                const newTask = {
                    id: task.id,
                    task: task.task,
                    completed: !task.completed,
                }
                setTemporaryTask(newTask);
            }
        });
    };
    
    const deleteTask = (taskId) => {
        let newTodos = todos.filter((x) => x.id !== taskId);
        setTodos(newTodos);
        console.log('Deleted!')
    };
    
  return (
    <ul id="todo-list">
      {todos.map((task) => (
        <li
          onClick={() => completed(task.id)}
          key={task.id}
          className={task.completed ? "checked" : ""}
        >
          {task.task}
          <span onClick={(event) =>{event.stopPropagation(); deleteTask(task.id)}} className="close">
            {"\u00D7"}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Item;
