import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

function Home() {
  
  return (
    <div className="app-container">
      <h2>To-Do App</h2>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default Home