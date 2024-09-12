import {createContext,useContext} from "react"

export const TodoContext= createContext({
  todos:[
    {
      id:1,
      todo:"todo message",
      complete:false
    }
  ],
  addTodo:(todo)=>{},
  updateTodo:(todo,id)=>{},
  toggleComplete:(id)=>{}


})




export const useTodo=()=>{
  return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider