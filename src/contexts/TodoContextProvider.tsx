import { ReactNode, useContext, useState } from "react"
import { data } from "../staticdata"
import { TodoType } from "../types"
import { TodoContext } from './TodoContext'

export default function TodoContextProvider({children}:{children: ReactNode}) {
    const [Todos, setTodos] = useState<TodoType[]>(data)
    return (
        <TodoContext.Provider value={{Todos, setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () =>{
    const context = useContext(TodoContext)
    if(!context)
        throw new Error("Something wrong here, define the context")
    return context
}



