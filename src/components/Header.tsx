import React from 'react'
import logo from '../assets/logo/logo.png'

const Header = () => {
  return (
      <header className='flex justify-center items-center md:space-x-[80%] space-x-32 px-4 py-2 lg:space-x-[58%]'>
          <div className='flex justify-center items-center gap-3'>
              <img src={logo} className='w-9 rounded-xl' alt="" />
              <h1 className='text-[#ffc404] uppercase tracking-wider font-bold'>Dubem-Foods</h1>
          </div>
          <nav>
              <button>Cart (0)</button>
          </nav>
    </header>
  )
}

export default Header