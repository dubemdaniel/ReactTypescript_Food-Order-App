import { createContext } from "react";
import { useReducer } from "react";

interface IItem {
  quantity: number;
  name: string;
  price: number;
  id: number;
  description: string;
  
}[]
// export const ItemList = createContext<IItem[]>([]);

// const itemReducer = (state: IItem[], action: any) => {
//   switch (action.type) {
//     case "ADD_ITEM": {
//       return [...state, action.item];
//     }
//   }
// }

interface IAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "CLEAR_CART";
  payload?: IItem | number;
}

interface ICartContext {
  items: IItem[];
  addItem?: (item: IItem) => void;
  removeItem?: (id: number) => void;
  clearAllItem?: () => void;
}

const CartContext = createContext<ICartContext>({
  items: [],
  addItem: (item) => { },
  clearAllItem: () => {},
  
  removeItem: (id) => { },
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
    const stateItems = [...state.items];
    const existingCartItemIndex = stateItems.findIndex(
      (item) => item.id === action.payload
    );

    if (existingCartItemIndex > -1) {
      const existingCartItem = stateItems[existingCartItemIndex];
      
      if (existingCartItem) {
        if (existingCartItem.quantity > 1) {
          // Reduce quantity by 1
          const updatedCartItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity - 1
          };
          stateItems[existingCartItemIndex] = updatedCartItem;
        } else {
          // Remove item
          stateItems.splice(existingCartItemIndex, 1);
        }
      }
    }

    return { ...state, items: stateItems };
  }
  if( action.type  === 'CLEAR_CART'){
     return {...state , items : []}
   }

  // Return state if action type is not "REMOVE_ITEM"
  return state;
  
  // if (action.type === "REMOVE_ITEM") {
  //   let stateItems = [...state.items];
  //   const existingCartItemIndex = stateItems.findIndex(
  //     (item) => item.id === action.payload
  //   );

  //   if (existingCartItemIndex > -1) {
  //     const existingCartItem = stateItems[existingCartItemIndex];
      
  //     if (existingCartItem) {
  //       // if the quantity is > 1 then we reduce the quantity ELSE we will remove the item
  //       if (existingCartItem.quantity > 1) {
  //         // reduce the quantity
  //         existingCartItem.quantity = existingCartItem.quantity - 1;

  //         stateItems[existingCartItemIndex] = existingCartItem;
  //       //   return { ...state, items: stateItems };
  //       } else {
  //         // remove the item
  //         const newStateItems = stateItems.filter(
  //           (item) => item.id !== existingCartItem.id
  //         );

  //         stateItems = [...newStateItems];
  //       }
  //     }
  //   }

  //   return { ...state, items: stateItems };
  // }

  // return state;
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
  const clearAllItem = () => {
    dispatch({ type: "CLEAR_CART"});
  };
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearAllItem
  };
  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartContext;
