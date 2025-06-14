import { create } from "zustand";
import { persist } from "zustand/middleware";


export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}


interface ToDoStore {
  todos: Todo[];
  addTodo: (task: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, task: string) => void;
}


const useToDoStore = create<ToDoStore>()(
  persist<ToDoStore>(
    (set)=>({
      todos: [],
      addTodo: (task: string) => {
        set((state:ToDoStore)=>{
          const newTodos = [
            ...state.todos,
            {id:Date.now(),task,completed:false}
          ];
          return {todos:newTodos}
        })
      },
      toggleTodo: (id: number) => {
        set((state:ToDoStore)=>{
          const toggledTodos = state.todos.map((todo:Todo)=>{
            if (todo.id === id) {
              todo.completed = true;
            }
            return todo;
          })
          return {todos:toggledTodos}
        })
      },
      removeTodo: (id: number) => {
        set((state:ToDoStore)=>{
          const removedTodos = state.todos.filter((todo:Todo)=>todo.id !== id);
          return {todos:removedTodos};
        })
      },
      updateTodo: (id: number, task: string) => {
        
          set((state:ToDoStore)=>{
            const updatedTodos = state.todos.map((todo:Todo)=>{
              if (todo.id === id) {
                todo.task = task;
              }
              return todo;
            })
            
            return {todos:updatedTodos};
          })
      },
    }),
    {name: "todo"}
  )
);

export default useToDoStore;