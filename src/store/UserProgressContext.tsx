import React, { createContext } from 'react'
import { useState } from 'react';

 interface IuserProgress{
    progress: string;
    showCart: () => void;
    hideCart: () => void;
    showCheckout: () => void;
    hideCheckout: () => void;
}

const userProgressContext = createContext<IuserProgress>({
    progress: '', 
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
})

export const UserProgressProvider = ({ children }:any) => {
    // State for the cart and checkout\
    const [userProgress, setUserProgress] = useState<string>('')

    const showCart = () => {
        setUserProgress('cart')
    }
    const hideCart = () => {
        setUserProgress('')
    }
    const showCheckout = () => {
        setUserProgress('checkout')
    }
    const hideCheckout = () => {
        setUserProgress('')
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart, 
        hideCart,
        showCheckout,
        hideCheckout
    }

    return (
        <userProgressContext.Provider value={userProgressCtx}>
            {children}
        </userProgressContext.Provider>
    )
}

export default userProgressContext