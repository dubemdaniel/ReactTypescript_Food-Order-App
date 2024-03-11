import { createContext } from "react";
import { useReducer } from "react";

interface ICartContext {
    items: [],
    addItem: (item:any) => void,
    removeItem: (id: any) => void
}

const CartContext = createContext<ICartContext>({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { }
})
const cartReducer = (state:any, action:any) => {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item:any) => item.id === action.item.id)

        const updatedItems = [...state.items]

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem:number = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems.push({...action.item, quantity:1})
        }
        
        return {...state, items:updatedItems}

    }
    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item:any) => item.id === action.id)

        const existingCartItem = state.items[existingCartItemIndex]

        const updatedItems:[{}] = { ...state.items }
        
        if (existingCartItem === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            }
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return{...state, items:updatedItems}
    }
    return state
}

export const CartContextProvider:any = ({ children }: any) =>{
    const [cart, dispatch] = useReducer(cartReducer, { items: [] })
    
    

    const addItem = (item:any) => {
        dispatch({ type: 'ADD_ITEM', item:item})
    }

    const removeItem = (id:number) => {
        dispatch({type: 'REMOVE_ITEM', id:id})
    }
    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
    }
    console.log(cartContext)

    return <CartContext.Provider value={cartContext}>{ children}</CartContext.Provider>
}
export default CartContext