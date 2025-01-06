import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"

export const useTodoContext = () =>{
    const context = useContext(TodoContext)
    if(!context)
        throw new Error("Something wrong here, define the context")
    return context
}


