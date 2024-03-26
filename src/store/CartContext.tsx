import { createContext } from "react";
import { useReducer } from "react";

interface IItem {
  quantity: number;
  name: string;
  price: number;
  id: number;
}

interface IAction {
  type: "ADD_ITEM" | "REMOVE_ITEM";
  payload: IItem | number;
}

interface ICartContext {
  items: IItem[];
  addItem?: (item: IItem) => void;
  removeItem?: (id: number) => void;
}

const CartContext = createContext<ICartContext>({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state: ICartContext, action: IAction): ICartContext => {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === (action.payload as IItem).id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      if (typeof action.payload === "object" && action.payload !== null) {
        updatedItems.push({ ...action.payload, quantity: 1 });
      }
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    let stateItems = [...state.items];
    const existingCartItemIndex = stateItems.findIndex(
      (item) => item.id === action.payload
    );

    if (existingCartItemIndex > -1) {
      const existingCartItem = stateItems[existingCartItemIndex];
      
      if (existingCartItem) {
        // if the quantity is > 1 then we reduce the quantity ELSE we will remove the item
        if (existingCartItem.quantity > 1) {
          // reduce the quantity
          existingCartItem.quantity = existingCartItem.quantity - 1;

          stateItems[existingCartItemIndex] = existingCartItem;
        //   return { ...state, items: stateItems };
        } else {
          // remove the item
          const newStateItems = stateItems.filter(
            (item) => item.id !== existingCartItem.id
          );

          stateItems = [...newStateItems];
        }
      }
    }

    return { ...state, items: stateItems };
  }

  return state;
};

export const CartContextProvider: any = ({ children }: any) => {
  const [cart, dispatch] = useReducer<
    (state: ICartContext, action: IAction) => ICartContext
  >(cartReducer, { items: [] });

  const addItem = (item: IItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };
  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartContext;
