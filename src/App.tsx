import { FormEvent, useState } from 'react'
import { TodoType } from './types'
import { data } from './staticdata'

function App() {
  const [Todos, setTodos] = useState<TodoType[]>(data)
  const [description, setDescription] = useState("")

  const id = Todos.length + 1; 
  function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    if(description.length < 1)
      return
    const newTodo:TodoType = {id, description, status: "active"}
    setTodos([...Todos, newTodo])
    setDescription("")
  }
  return (
    <div style={{display: 'grid', placeContent: 'center'}}>
      <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input onChange={(e)=>setDescription(e.target.value)} value={description} type="text"/>
          <button type="submit">enviar</button>
        </form>
      </div>
      {Todos.map((Todo) => <p key={Todo.id}>{Todo.description}</p>)}
    </div>
  )
}

export default App
