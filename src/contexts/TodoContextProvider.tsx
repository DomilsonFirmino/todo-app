import { ReactNode, useEffect, useState } from "react"
import { data } from "../staticdata"
import { TodoType } from "../@types/types"
import { TodoContext } from './TodoContext'

export default function TodoContextProvider({children}:{children: ReactNode}) {
    const [Todos, setTodos] = useState<TodoType[]>( ()=>{
        const stored = localStorage.getItem("Todos");
        if(stored)
            return JSON.parse(stored)
        return data;
    })

    useEffect(()=>{
        localStorage.setItem("Todos", JSON.stringify(Todos))
    },[Todos])

    return (
        <TodoContext.Provider value={{Todos, setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}

