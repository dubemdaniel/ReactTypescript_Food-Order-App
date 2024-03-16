import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import currencyFormatter from '../util/formatter'
import Button from './UI/Button'
import userProgressContext from '../store/UserProgressContext'

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

interface IuserProgress{
    progress: string;
    showCart: () => void;
    hideCart: () => void;
    showCheckout: () => void;
    hideCheckout: () => void;
}


const Cart: React.FC = () => {
    const cartCtx: ICartContext = useContext(CartContext)
    const userProgressCtx:IuserProgress = useContext(userProgressContext)

    const handleCloseCart = () => {
        userProgressCtx.hideCart()
    }

    const cartTotal: number = cartCtx.items.reduce((totalPrice, item) => totalPrice + (item.quantity * item.price), 0)

  return (
   
      <Modal open = {userProgressCtx.progress === 'cart'} className="">
          <h2 className='font-bold mx-4 my-2 '>Your Cart</h2>
          <ul className='list-none p-0 px-4'>
              {cartCtx.items.map((item:ICart
                ) => <li key={item.id}>{item.name} - {  item.quantity}</li>)}
          </ul>
          <p className='flex justify-end my-[1rem] text-[#46443c] font-bold  text-lg'>{currencyFormatter.format(cartTotal)}</p>
          <p className='justify-end flex gap-2 '>
              <Button textOnly onClick={handleCloseCart}>Close</Button>
              <Button >Go Back</Button>
          </p>
      </Modal>
  )
}

export default Cart