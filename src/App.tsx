import { FormEvent, useState } from 'react'
import { FilterType, TodoType } from './@types/types'
import { useTodoContext } from './customHooks/useTodoContext'
import Form from './components/form/Form'
import InputComponent from './components/form/InputComponent'
import useThemContext from './customHooks/useThemContext'
import TodoComponent from './components/TodoComponent'
import Button from './components/Button'

function App() {
  const {Todos, setTodos} = useTodoContext()
  const {theme, handleChangeTheme} = useThemContext()
  const [filter, setFilter] = useState<FilterType>("")
  const [description, setDescription] = useState("")

  const activeTodos = Todos.filter(Todo => Todo.status == "active").length
  const completedTodos = Todos.filter(Todo => Todo.status == "completed").length

  const id = Todos.length + 1; 

  function handleSubmitTodo(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    if(description.length < 1)
      return
    const newTodo:TodoType = {id, description, status: "active"}
    setTodos([newTodo, ...Todos])
    setDescription("")
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
    localStorage.setItem("Todos",JSON.stringify(Todos))
  }

  function handleResetFilters(){
    setFilter("")
  }

  function handleDeleteTodo(id: number){
    setTodos(Todos.filter((Todo)=>Todo.id != id))
  } 

  function handleMultipleDelete(){
    setTodos(Todos.filter((Todo)=>Todo.status != "completed"))
  }

  return (
    <div className='w-[calc(100%-2rem)] md:min-w-[30rem] mx-auto mt-5 md:mt-0'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold uppercase tracking-[0.2em]'>Todo</h1>
        <button onClick={handleChangeTheme}>{theme}</button>
      </div>
      <div className='mt-2'>
        <Form handleSubmit={(e)=>handleSubmitTodo(e)} >
          <InputComponent name='search' id='search' state={description} handleChange={(e) => setDescription(e.target.value)} />
        </Form>
      </div>

      <div className='mt-6 bg-gray-900 rounded-md overflow-hidden'>
        <div>
          {Todos.filter(Todo=>Todo.status.includes(filter)).map((Todo) => (
            <TodoComponent key={Todo.id} handleDelete={()=>handleDeleteTodo(Todo.id)} Todo={Todo} handleCheck={()=>handleCheckTodo(Todo.id)}  />
          ))}
        </div>
        <div className='flex gap-4 md:gap-0 justify-between p-4 border-t border-t-gray-700 flex-wrap'>
          
          {activeTodos == 0 ? <p className='text-gray-300'> no items </p> : <p className='text-gray-300'>{activeTodos} items left</p>}
          
          <Button handleClick={handleResetFilters}>
            {filter == "" ? <p className='text-blue-700'>All</p> : <p>All</p>}
          </Button>
          <Button handleClick={()=>setFilter("active")}>
            {filter == "active" ? <p className='text-blue-700'>Active</p> : <p>Active</p>}
          </Button>
          <Button handleClick={()=>setFilter("completed")}>
          {filter == "completed" ? <p className='text-blue-700'>Completed</p> : <p>Completed</p>}
          </Button>
          <Button disabled={(completedTodos < 1)} handleClick={handleMultipleDelete}>Clear completed</Button>
        </div>
      </div>
    </div>
  )
}

export default App
