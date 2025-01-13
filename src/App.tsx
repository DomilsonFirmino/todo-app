import { useState } from 'react'
import { FilterType,  } from './@types/types'
import { useTodoContext } from './customHooks/useTodoContext'
import Form from './components/form/Form'
import InputComponent from './components/form/InputComponent'
import useThemContext from './customHooks/useThemContext'
import TodoComponent from './components/TodoComponent'
import Button from './components/Button'
import IconSun from './components/icons/IconSun'
import IconMoon from './components/icons/IconMoon'
import { handleSubmitTodo, handleDeleteTodo, handleCheckTodo, handleMultipleDelete, handleResetFilters } from './utils/Func'

function App() {
  const {Todos, setTodos} = useTodoContext()
  const {theme, handleChangeTheme} = useThemContext()
  const [filter, setFilter] = useState<FilterType>("")
  const [description, setDescription] = useState("")

  const completedTodos = Todos.filter(Todo => Todo.status == "completed").length
  Todos.sort((a, b) =>  b.id - a.id)

  const handleDrop = (e: React.DragEvent<HTMLDivElement>,id:number) => {

    const start = e.dataTransfer.getData("dragStart")

    const inicio = Number(start) > id ? id : Number(start);
    const fim = Number(start) > id ? Number(start): id;
    setTodos(Todos.map(Todo => Todo.id == inicio && Todo.id != fim ? {...Todo,id: fim} : Todo.id == fim && Todo.id != inicio ? {...Todo,id: inicio}: Todo))

  }

  return (
    <main className='box'>

      <div className='sticky top-5'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-semibold uppercase tracking-[0.2em] text-gray-50'>Todo</h1>
          <Button handleClick={handleChangeTheme}>
            {theme == "light" ?
            <IconSun />
            :
            <IconMoon />
            }
          </Button>
        </div>
        <div className='mt-2'>
          <Form handleSubmit={(e)=>handleSubmitTodo(e, setTodos, description,Todos, setDescription)} >
            <InputComponent name='search' id='search' state={description} handleChange={(e) => setDescription(e.target.value)} />
          </Form>
        </div>
      </div>

      <div className='mt-8 dark:bg-gray-50 bg-gray-900 rounded-md overflow-hidden'>
        
        <div>
          {Todos.filter((Todo)=>Todo.status.includes(filter)).map((Todo) => (
            <TodoComponent handleDrop={(e)=>handleDrop(e,Todo.id)}
            key={Todo.id}
            Todo={Todo}
            handleDelete={() => handleDeleteTodo(Todo.id, setTodos, Todos)}
            handleCheck={() => handleCheckTodo(Todo.id, setTodos, Todos)}
            />
          ))}
        </div>
        
        <div className={`p-4 sm:hidden flex justify-between ${Todos.length > 0 && "dark:border-t dark:border-t-gray-200 border-t border-t-gray-700"}`}>
          {
          Todos.length == 0 ? 
          <p className='text-gray-400 dark:text-gray-600'> no items </p> 
          : <p className='text-gray-600 dark:text-gray-200'>{Todos.length} items left</p>
          }
          <Button 
            disabled={(completedTodos < 1)} 
            handleClick={()=>handleMultipleDelete(setTodos, Todos)}
          >Clear completed</Button>
        </div>

        <div className={`hidden sm:flex gap-4 md:gap-0 justify-center sm:justify-between p-4 dark:border-t dark:border-t-gray-200 border-t border-t-gray-700 flex-wrap`}>
          
          {
            Todos.length == 0 ? 
            <p className='text-gray-500'> no items </p> : 
            <p className='text-gray-300'>{Todos.length} items left</p>
          }
          
          <Button 
            handleClick={()=>handleResetFilters(setFilter)}>
            {filter == "" ? <p className='text-blue-700'>All</p> : <p>All</p>}
          </Button>

          <Button 
            handleClick={()=>setFilter("active")}>
            {filter == "active" ? <p className='text-blue-700'>Active</p> : <p>Active</p>}
          </Button>

          <Button 
            handleClick={()=>setFilter("completed")}>
          {filter == "completed" ? <p className='text-blue-700'>Completed</p> : <p>Completed</p>}
          </Button>

          <Button 
            disabled={(completedTodos < 1)} 
            handleClick={()=>handleMultipleDelete(setTodos, Todos)}>Clear completed</Button>

        </div>
        
      </div>
      
      <div className='sm:hidden flex gap-4 md:gap-0 justify-center p-4 mt-6 dark:bg-gray-50 bg-gray-900 rounded-md overflow-hidden'>        
        <Button handleClick={()=>handleResetFilters(setFilter)}>
          {filter == "" ? <p className='text-blue-700'>All</p> : <p>All</p>}
        </Button>
        <Button handleClick={()=>setFilter("active")}>
          {filter == "active" ? <p className='text-blue-700'>Active</p> : <p>Active</p>}
        </Button>
        <Button handleClick={()=>setFilter("completed")}>
        {filter == "completed" ? <p className='text-blue-700'>Completed</p> : <p>Completed</p>}
        </Button>
      </div>

    </main>
  )
}

export default App
