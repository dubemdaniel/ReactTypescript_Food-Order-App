import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import currencyFormatter from '../util/formatter'
import Button from './UI/Button'

interface ICartContext {
    items: [],
    addItem: (item:any) => void,
    removeItem: (id: any) => void
}
interface ICart{
    id: number,
    name: string,
    quantity: number
}

interface ITotalPrice {
    totalPrice?: number,
    item?: [],
    quantity: number,
    //     price: number
    //     CartTotal:number
    // }
}


const Cart: React.FC = () => {
    const cartCtx: ICartContext = useContext(CartContext)

    const cartTotal: number = cartCtx.items.reduce((totalPrice, item) => totalPrice + (item.quantity * item.price), 0)

  return (
   
      <Modal>
          <h2>Your Cart</h2>
          <ul className='list-none p-0 px-4'>
              {cartCtx.items.map((item:ICart
                ) => <li key={item.id}>{item.name} - {  item.quantity}</li>)}
          </ul>
          <p className='flex justify-end my-[1rem] text-[#46443c] font-bold  text-lg'>{currencyFormatter.format(cartTotal)}</p>
          <p>
              <Button textOnly>Close</Button>
              <Button >Go Back</Button>
          </p>
      </Modal>
  )
}

export default Cart