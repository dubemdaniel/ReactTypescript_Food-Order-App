import React from 'react'
import logo from '../assets/logo/logo.png'

const Header = () => {
  return (
      <header className='flex justify-center items-center space-x-40'>
          <div className='flex justify-center items-center gap-3'>
              <img src={logo} className='w-12' alt="" />
              <h1 className='text-[#ffc404] uppercase tracking-wider font-bold'>ReactFood</h1>
          </div>
          <nav>
              <button>Cart (0)</button>
          </nav>
    </header>
  )
}

export default Header