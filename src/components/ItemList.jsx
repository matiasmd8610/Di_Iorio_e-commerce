import React from 'react'
import Item from './Item'

const ItemList = (props) => {  
    // console.log(props.products);
    // console.log(props.onSale);

    if (props.onSale) {
        return (
            <div className='productsWrapper grid grid-cols-5 gap-6'>
                {props.products.map((product)=> {
                    if (product.discount > 0) {
                        return <Item key={product.id} product={product} />
                    }
                })}
            </div>
        )
    } else {
        return (
            <div className='productsWrapper grid grid-cols-5 gap-6'>
                {props.products.map((product)=> {
                    return <Item key={product.id} product={product} />
                })}
            </div>
        )
    }
         
}

export default ItemList