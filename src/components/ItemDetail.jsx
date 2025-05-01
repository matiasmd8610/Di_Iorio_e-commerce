import React from 'react'

const ItemDetail = (props) => {
  // console.log(props.product);
  
  return (
    <div>
        <h1 className='mb-4 text-2xl'>{props.product?.name}</h1>
        <img src={`/products/${props.product?.image}`} alt={props.product?.name} width={500} />
    </div>
  )
}

export default ItemDetail