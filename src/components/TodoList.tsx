import useToDoStore from "../store/todo.store"
import TodoItem from "./TodoItem";

function TodoList() {
  const {todos} = useToDoStore();
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList