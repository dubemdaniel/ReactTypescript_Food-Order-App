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
   
      <li className='flex justify-between font-lato text-lg sm:my-1'>
          <p className='text-[#46443c] font-bold'>
              {name} - {quantity} x {currencyFormatter.format(price)}
          </p>
          <p className='gap-2 flex flex-grow-0 items-center '>
              <button onClick={onDecrease} className='bg-black text-white rounded-full sm:px-[0.6rem] px-[0.65rem]'>-</button>
              <button>{quantity}</button>
              <button onClick={onIncrease} className='bg-black text-white rounded-full px-2 '>+</button>
          </p>
      </li>
  )
}

export default CartItem