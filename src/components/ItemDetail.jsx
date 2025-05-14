import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({product}) => {
  // console.log(props.product);
  
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='mb-4 text-2xl'>{product?.name}</h1>
        <img src={`/products/${product?.image}`} alt={product?.name} width={600} className='h-96 w-auto' />
        <ItemCount product={product} />
    </div>
  )
}

export default ItemDetail