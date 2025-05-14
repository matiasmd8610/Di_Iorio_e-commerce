import React, { useContext } from 'react'
import { cartContext } from './Context/CartContext'

const Cart = () => {
    const {cart} = useContext(cartContext);
    console.log(cart);

    return (
        <section className='container'>
            {cart.map((cartProduct)=> {
                return (
                    <div key={cartProduct.product.id} className='bg-white mb-5 p-5 rounded-2xl'>
                        <h3 className='mb-5 text-2xl font-semibold'>{cartProduct.product.name}</h3>
                        <img src={`/products/${cartProduct.product.image}`} alt={cartProduct.product.name} width={300} />
                        <h4>${cartProduct.product.price}</h4>
                        <h4>{cartProduct.quantity}</h4>
                    </div>
                )
            })}
        </section>
    )
}

export default Cart