import { createContext, useState } from "react";

export const cartContext = createContext();

import React from 'react'

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    // console.log(cart);
    
    
    const onAdd = (product, quantity) => {
        // console.log(product);
        // console.log(quantity);

        //Verifico si el producto ya está en cart y agrego la cantidad
        console.log(product);
        setCart([...cart, {product: product, quantity: quantity}])
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeCartItem = (productId) => {        
        const nuevoCart = cart.filter((cartProduct) => cartProduct.product.id !== productId )
        setCart(nuevoCart)
    }

    const getTotalPrice = () => {
        let totalPrice = 0;

        cart.forEach((cartProduct) => {
            totalPrice = totalPrice + cartProduct.product.price * cartProduct.quantity;
        })
        return totalPrice;
    }

    const getTotalItemsCart = () => {
        let totalItemsCart = 0;
        cart.forEach((cartProduct) => {
            totalItemsCart = totalItemsCart + cartProduct.quantity;
        })

        return totalItemsCart
    }

    return (
        <cartContext.Provider value={{
            cart, 
            onAdd, 
            emptyCart,
            removeCartItem,
            getTotalPrice,
            getTotalItemsCart
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider