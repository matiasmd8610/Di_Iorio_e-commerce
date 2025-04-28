import React from 'react'
import Item from './Item'

const ItemList = (props) => {  
    // console.log(props.products);
         
    return (
        <div className='productsWrapper grid grid-cols-5 gap-6'>
            {props.products.map((product)=> {
                return <Item key={product.id} product={product} />
            })}
        </div>
    )
}

export default ItemList