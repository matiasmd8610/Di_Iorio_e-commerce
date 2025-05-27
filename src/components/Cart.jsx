import React, { useContext } from 'react'
import { cartContext } from './Context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart, emptyCart, removeCartItem, getTotalPrice} = useContext(cartContext);
    // console.log(cart);

    return (
        <section className='container'>
            {cart.length === 0 ? (
                <span>No hay productos en el carrito</span>
            ) : (
                <div>
                    <span className='block text-3xl mb-5'>Tu total es de: ${getTotalPrice()} </span>
                    <button className='btn mb-10' onClick={emptyCart}>
                        Vaciar carrito
                    </button>
                    {cart.map((cartProduct)=> {
                        return (
                            <div key={cartProduct.product.id} className='bg-white mb-5 p-6 rounded-2xl flex gap-8'>
                                <img src={`/products/${cartProduct.product.image}`} alt={cartProduct.product.name} width={300} />
                                <div className='flex flex-col gap-2'>
                                    <h2 className='mb-4 text-2xl font-semibold'>{cartProduct.product.name}</h2>
                                    <span className='block'><strong>Precio:</strong> ${cartProduct.product.price}</span>
                                    <span className='block'><strong>Cantidad</strong>: {cartProduct.quantity}</span>
                                    <span className='block'>{cartProduct.product.description}</span>
                                    <button className='btn mt-auto' onClick={() => 
                                        removeCartItem(cartProduct.product.id)}
                                    >
                                        Eliminar producto
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    <Link to={"/checkout"} className="btn">Finalizar compra</Link>
                </div>
            )}
        </section>
    )
}

export default Cart