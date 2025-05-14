import { createContext, useState } from "react";

export const cartContext = createContext();

import React from 'react'

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const onAdd = (product, quantity) => {
        console.log(product);
        console.log(quantity);
        setCart([...cart, {product: product, quantity: quantity}])
    }

    return (
        <cartContext.Provider value={{cart, onAdd}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider