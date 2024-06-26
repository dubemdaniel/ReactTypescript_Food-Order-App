import React, { useContext, useState } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import currencyFormatter from "../util/formatter";
import Input from "./UI/Input";
import Button from "./UI/Button";
import userProgressContext from "../store/UserProgressContext";
import Success from "./Success";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(userProgressContext);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const cartTotal: number = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setTimeout(() => {
      setIsSubmitted(true);
      setIsSuccess(true);
    }, 1000);
  };

  const handleCloseSuccess = () => {
    setIsSubmitted(false);
    setIsSuccess(false);
      handleClose()
      cartCtx.clearAllItem()
  };

  console.log(isSuccess);

  return (
    <>
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onclose={handleClose}
      >
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <h2 className="font-bold text-lg">Checkout</h2>
            <p>
              Total Amount:{" "}
              <span className="font-bold">
                {currencyFormatter.format(cartTotal)}
              </span>
            </p>
            <Input label="Full Name" type="text" id="full-name" />
            <Input label="E-mail Address " type="email" id="email" />
            <Input label="Street" type="text" id="street" />
            {/* <div className='sm:flex sm:justify-start gap-1'> */}
            <Input label="Postal Code" type="text" id="postal-code" />
            <Input className="block" label="City" type="text" id="city" />
            {/* </div> */}
            <p className="flex justify-end gap-1">
              <Button textOnly type="text" onClick={handleClose}>
                Close
              </Button>
              <Button>Submit Order</Button>
            </p>
          </form>
        ) : null}
      </Modal>
      {isSuccess ? (
        <Modal open={isSuccess} >
          <Success onClick={handleCloseSuccess} />
        </Modal>
      ) : null}
    </>
  );
};

export default Checkout;
