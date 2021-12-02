import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState ([]);

    const addItem = (item) => {
        setCart([...cart,item]);
    };
    
    const removeItem = (itemID) => {
        setCart(cart.filter( prod => prod.id !== itemID));
    };
    
    const clear = () => {
        setCart([]);
    };
    
    const isInCart = (itemID) => {
        return cart.some( prod => prod.id === itemID )
    };
    
    const totalAmount = () => {
        return cart.reduce((totalCounter, prod) => totalCounter + prod.counter, 0)
    };

    const totalPrice = () => {
        return cart.reduce((totalCounter, prod) => totalCounter + (prod.price * prod.counter), 0)
    };

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clear,
            isInCart,
            totalAmount,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}


