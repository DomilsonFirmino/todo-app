export type TodoType = {
    id: number,
    description: string,
    status: "active" | "completed"
}

export type TodoContextType = {
    Todos: TodoType[],
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
}