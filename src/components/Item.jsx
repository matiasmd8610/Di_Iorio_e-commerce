import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    // console.log(props.product.id);
    
    return (
        <div className='product'>
            <Link to={`/productos/${props.product.id}`}>
                <figure className='h-60 shrink-0'>
                    <img src={`/products/${props.product.image}`} alt={props.product.name} width={450} height={300} className='w-full object-cover h-full object-top' />
                </figure>
                <div className='product-content flex flex-col justify-between h-full'>
                    <h3>{props.product.name}</h3>
                    <div className='flex justify-between items-center'>
                        <span>${props.product.price}</span>
                        <span className='inline-block bg-green-300 px-3 py-1 rounded-2xl text-xs font-semibold uppercase'>30% off</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item