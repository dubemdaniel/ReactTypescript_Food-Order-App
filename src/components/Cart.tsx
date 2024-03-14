import React, { useContext } from 'react'
import Modal from './UI/Modal'

const Cart = () => {
    const cartCtx:{} = useContext(cartContext)

  return (
   
      <Modal>
          <h2>Your Cart</h2>
          <ul className='list-none p-0 px-4'>
              
          </ul>
      </Modal>
  )
}

export default Cart