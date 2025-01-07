import { ReactNode, useState } from "react"
import { data } from "../staticdata"
import { TodoType } from "../@types/types"
import { TodoContext } from './TodoContext'

export default function TodoContextProvider({children}:{children: ReactNode}) {
    const [Todos, setTodos] = useState<TodoType[]>(data)
    return (
        <TodoContext.Provider value={{Todos, setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}

