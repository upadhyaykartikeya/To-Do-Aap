import { useState } from 'react'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-5 rounded-xl p-5 bg-stone-500">
      <div className="flex ">
        <h1>Your Todos</h1>
      </div>
    </div>
    </>
  )
}

export default App
