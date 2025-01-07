export type TodoType = {
    id: number,
    description: string,
    status: "active" | "completed"
}

export type TodoContextType = {
    Todos: TodoType[],
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
}

export type ButtonType = "submit" | "reset" | "button";

export type ThemeContextType = {
    theme: ThemeType;
    handleChangeTheme: ()=>void
}

export type ThemeType = "light" | "dark"

export type FilterType = "active" | "completed" | ""