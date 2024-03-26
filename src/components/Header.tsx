import React from 'react'
import { useContext } from 'react'
import logo from '../assets/logo/logo.png'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import userProgressContext from '../store/UserProgressContext'


const Header = () => {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(userProgressContext)

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0)
    
    const handleShowCart = () => {
        userProgressCtx.showCart()
    }
    
  return (
      <header className='flex justify-center items-center md:space-x-[80%] space-x-32 px-4 py-2 lg:space-x-[58%]'>
          <div className='flex justify-center items-center gap-3'>
              <img src={logo} className='w-9 rounded-xl' alt="" />
              <h1 className='text-[#ffc404] uppercase tracking-wider font-bold'>Dubem-Foods</h1>
          </div>
          <nav>
              <Button textOnly onClick={handleShowCart}>Cart ({ totalCartItems})</Button>
          </nav>
    </header>
  )
}

export default Header