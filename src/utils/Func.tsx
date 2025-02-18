import { FormEvent } from "react"
import { FilterType, TodoType } from "../@types/types"

export function handleSubmitTodo(e: FormEvent<HTMLFormElement>, setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>, description: string, Todos: TodoType[], setDescription: React.Dispatch<React.SetStateAction<string>>){
    e.preventDefault()
    const id = Todos.length > 0 
    ? Math.max(...Todos.map((todo) => todo.id)) + 1 
    : 1;

    if(description.length < 1 || !description.trim().length)
        return
    const newTodo:TodoType = {id, description, status: "active"}
    setTodos([newTodo, ...Todos])
    setDescription("")
    }

    export function handleCheckTodo(id: number,setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>,Todos: TodoType[]){
    setTodos(
        Todos.map( Todo => {
        if(Todo.id != id){
            return Todo
        }
        else{
            return {...Todo, status: Todo.status == "active" ? "completed": "active"}
        }
        })
    )
    localStorage.setItem("Todos",JSON.stringify(Todos))
    }

    export function handleResetFilters(setFilter: React.Dispatch<React.SetStateAction<FilterType>>){
    setFilter("")
    }

    export function handleDeleteTodo(id: number, setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>, Todos: TodoType[]){
    setTodos(Todos.filter((Todo)=>Todo.id != id))
    } 

    export function handleMultipleDelete(setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>, Todos: TodoType[]){
    setTodos(Todos.filter((Todo)=>Todo.status != "completed"))
}
