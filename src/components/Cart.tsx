import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import currencyFormatter from "../util/formatter";
import Button from "./UI/Button";
import userProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

interface ICartContext {
  items: [];
  addItem: (item: any) => void;
  removeItem: (id: any) => void;
}

interface ICart {
  id: number;
  name: string;
  quantity: number;
  price: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

interface IuserProgress {
  progress: string;
  showCart: () => void;
  hideCart: () => void;
  showCheckout: () => void;
  hideCheckout: () => void;
}

const Cart: React.FC = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx: IuserProgress = useContext(userProgressContext);

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };

  const cartTotal: number = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleGoToCheckout = () => {
    userProgressCtx.showCheckout();
  };
  return (
    <Modal
      open={userProgressCtx.progress === "cart"}
      className=""
      onclose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2 className="font-bold mx-4 my-2 ">Your Cart</h2>
      <ul className="list-none p-0 px-4">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => {
              if (cartCtx.addItem) {
                cartCtx.addItem(item);
              }
            }}
            onDecrease={() => {
              if (cartCtx.removeItem) {
                cartCtx.removeItem(item.id);
              }
            }}
          />
        ))}
      </ul>
      <p className="flex justify-end my-[1rem] text-[#46443c] font-bold  text-lg">
        {currencyFormatter.format(cartTotal)}
      </p>
      <p className="justify-end flex gap-2 ">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
