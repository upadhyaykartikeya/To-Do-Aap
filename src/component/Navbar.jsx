import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex bg-stone-700 text-white justify-between py-2">
        <div className="logo">
            <span className='font-bold text-xl mx-9'>TaskIt</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
