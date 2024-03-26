import React from 'react'
import currencyFormatter from '../util/formatter'

interface ICartItem {
    name: string,
    quantity: number,
    price: number,
    onIncrease:() => void
    onDecrease:() => void
}

const CartItem = ({name, quantity,price,onDecrease,onIncrease}:ICartItem) => {
  return (
   
      <li>
          <p>
              {name} - {quantity} x {currencyFormatter.format(price)}
          </p>
          <p className='gap-2 flex'>
              <button onClick={onDecrease} className='bg-black text-white rounded-full w-6'>-</button>
              <button>{quantity}</button>
              <button onClick={onIncrease} className='bg-black text-white rounded-full w-6'>+</button>
          </p>
      </li>
  )
}

export default CartItem