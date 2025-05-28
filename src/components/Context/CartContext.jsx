import React from 'react'
import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const cartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    // console.log(cart);
    
    
    const onAdd = (product, quantity) => {
        // console.log(product);
        // console.log(quantity);

        //Verifico si el producto ya está en cart y agrego la cantidad
        // console.log(product);
        if (cart.length === 0) {
            setCart([...cart, {product: product, quantity: quantity}])
            getTotalItemsCart();
        }
        // console.log(cart);

        const exist = cart.some(cartProduct => cartProduct.product.id === product.id);

        if (exist) {
            console.log('El producto ya existe');
            cart.map((cartProduct) => {
                if (cartProduct.product.id === product.id) {
                    cartProduct.quantity = cartProduct.quantity + quantity;
                }
            })
            // console.log(cart);
        } else {
            // setCart([...cart, {product: product, quantity: quantity}])
            console.log('producto agregado');
            setCart([...cart, {product: product, quantity: quantity}])
        }
        
        navigate("/cart")
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