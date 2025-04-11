import { useState } from 'react'
import Navbar from './component/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = ()=> {
    
  }
  
  const handleDelete = (e, id)=> {
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = todos.filter(item=>{
      return item.id !== id;
    })
    setTodos(newTodos)
  }


  const handleAdd = ()=> {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted:false}])
    setTodo("")
  }


  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
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
        {todos.map(item=>{

          return <div key={item.id} className="todo flex w-1/2 justify-between my-3">
            <input name={String(item.id)} onChange={handleCheckbox} value={item.isCompleted} type="checkbox" id="" />
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          <div className="buttons">
            <button onClick={handleEdit} className='bg-stone-700 hover:bg-stone-600 text-white rounded-md text-sm font-bold p-2 py-1 mx-1'>Edit</button>
            <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-stone-700 hover:bg-stone-600 text-white rounded-md text-sm font-bold p-2 py-1 mx-1'>Delete</button>
          </div>
        </div>
        })}
      </div>
    </div>
    </>
  )
}

export default App
