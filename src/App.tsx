import { FormEvent, useState } from 'react'
import { TodoType } from './types'
import { data } from './staticdata'

function App() {
  const [Todos, setTodos] = useState<TodoType[]>(data)
  const [description, setDescription] = useState("")

  const id = Todos.length + 1; 
  function handleSubmitTodo(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    if(description.length < 1)
      return
    const newTodo:TodoType = {id, description, status: "active"}
    setTodos([newTodo, ...Todos])
    setDescription("")
  }

  function handleDeleteTodo(id: number){
    setTodos(Todos.filter((Todo)=>Todo.id != id))
  }

  function handleCheckTodo(id: number){
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
  }

  return (
    <div style={{display: 'grid', placeContent: 'center'}}>
      <div>
        <form onSubmit={(e)=>handleSubmitTodo(e)}>
          <input onChange={(e)=>setDescription(e.target.value)} value={description} type="text"/>
          <button type="submit">enviar</button>
        </form>
      </div>
      {Todos.map((Todo) => (
        <div key={Todo.id}>
          <p>{Todo.description}</p>
          <button onClick={()=>handleCheckTodo(Todo.id)}>
            {Todo.status=="active" ? "Ativo": "completo"}
          </button>
          <button onClick={()=>handleDeleteTodo(Todo.id)}>Delete Todo</button>
        </div>
      ))}
    </div>
  )
}

export default App
