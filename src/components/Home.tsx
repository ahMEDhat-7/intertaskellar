import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

function Home() {
  
  return (
    <div className="app-container ">
      <h2 className="text-xl text-lime-500">Intertaskellar</h2>
      <img 
    src="https://www.siliconrepublic.com/wp-content/uploads/2024/05/AdobeStock_370743254-718x523.jpeg" 
    alt="black hole" 
    className="w-16 h-15 m-1 object-cover rounded-full mx-auto"
  />
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default Home