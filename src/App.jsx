import { useState } from 'react'
import Navbar from './component/Navbar'

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = ()=> {
    
  }
  const handleDelete = ()=> {

  }
  const handleAdd = ()=> {
    setTodos([...todos, {todo, isCompleted: false}])
    setTodo("")
  }

  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-5 rounded-xl p-5 bg-stone-400 min-h-[80vh]">
      <div className="addTodo my-5">
        <h2 className='font-bold tex-lg'>Add To-do</h2>
      <input onChange={handleChange} value={todo} className='w-1/2' type="text" />
      <button onClick={handleAdd} className='bg-stone-700 hover:bg-stone-600 text-white rounded-md text-sm font-bold p-2 py-1 mx-6'>Add</button>
      </div>
      <h2 className=' text-lg font-bold'>Your Todos</h2>
      <div className="todos">
        <div className="todo flex">
          <div className="text">myTodo</div>
          <div className="buttons">
            <button onClick={handleEdit} className='bg-stone-700 hover:bg-stone-600 text-white rounded-md text-sm font-bold p-2 py-1 mx-1'>Edit</button>
            <button onClick={handleDelete} className='bg-stone-700 hover:bg-stone-600 text-white rounded-md text-sm font-bold p-2 py-1 mx-1'>Delete</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
