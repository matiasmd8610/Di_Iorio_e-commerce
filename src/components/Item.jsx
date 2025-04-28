import React from 'react'

const Item = (props) => {
    // console.log(props.product);
    
    return (
        <div className='product'>
            <img src={`/products/${props.product.image}`} alt={props.product.name} width={450} className='object-cover h-60 object-top' />
            <div className='product-content'>
                <h3>{props.product.name}</h3>
                <span>${props.product.price}</span>
            </div>
        </div>
    )
}

export default Item