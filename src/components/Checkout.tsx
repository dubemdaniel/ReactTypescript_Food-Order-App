import React, { useCallback, useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import currencyFormatter from '../util/formatter'
import Input from './UI/Input'
import Button from './UI/Button'
import userProgressContext from '../store/UserProgressContext'

const Checkout = () => {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(userProgressContext)

    const cartTotal: number = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );
    
    const handleClose = () => {
        userProgressCtx.hideCheckout()
    }

  return (
      <Modal open={userProgressCtx.progress === 'checkout'}>
          <form>
              <h2>Checkout</h2>
              <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
              <Input label="Full Name" type="text" id="full-name" />
              <Input label="E-mail Address " type="email" id="email" />
              <Input label="Street" type="text" id="street" />
              <div className='flex justify-start gap-1'>
                  <Input label="Postal Code" type= "text" id="postal-code" />
                  <Input label="City" type="text" id="city" />
              </div>
              <p className='flex justify-end gap-1'>
                  <Button textOnly type="text" onClick={handleClose}>Close</Button>
                  <Button >Submit Order</Button>
              </p>
          </form>
    </Modal>
  )
}

export default Checkout