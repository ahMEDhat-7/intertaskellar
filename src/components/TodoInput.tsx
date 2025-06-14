import { useState } from "react"
import useToDoStore from "../store/todo.store";

function TodoInput() {
  const {addTodo} = useToDoStore();
  const [task , setTask] = useState<string>("");
  function handleAdd() {
    addTodo(task);
  }
  return (
    <div className="todo-input">
      <input 
        type="text" 
        placeholder="Add a new todo" 
        value={task}
        onChange={(e)=>setTask(e.target.value)}  />

      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput