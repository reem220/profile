import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-gray-800'>
<h1 className='text-gray-400
p-8 text-2xl
transition ease-in-out delay-150
 bg-gray-800 hover:-translate-y-1 hover:scale-110
 hover:bg-gray-500 duration-300 
 font-bold
    '>CV REMO</h1>
<div className='flex space-x-4'>
  <Link to='/' className='bg-gray-900  text-gray-400 rounded-md px-3 py-2 text-sm font-medium'>
  Home
  </Link>
<Link to='about' className='text-gray-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>About me</Link>
</div>
</nav>

  )
}

export default Navbar