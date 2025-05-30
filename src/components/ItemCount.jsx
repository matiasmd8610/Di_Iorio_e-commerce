import React, { useContext, useState } from 'react'
import { cartContext } from './Context/CartContext';

const ItemCount = ({product}) => {
    const [counter, setCounter] = useState(0)
    const {onAdd} = useContext(cartContext);

    const add = () => {
        if (counter < product.stock) {
            setCounter(counter + 1);
        }
        // console.log(counter);
    }

    const substract = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <>
            <div className='flex gap-3 items-center mt-5'>
                <button type='button' className='btn btn-rounded text-3xl' onClick={substract}>-</button>
                <span>{counter}</span>
                <button className='btn btn-rounded text-3xl' onClick={add}>+</button>
            </div>
            <div>
                <button className='btn mt-5' type='button' 
                    onClick={() => {
                        onAdd(product, counter)
                        // console.log(counter);
                    }}
                >
                    Agregar al carrito
                </button>
            </div>
        </>
    )
}

export default ItemCount