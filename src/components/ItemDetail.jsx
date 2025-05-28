import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({product}) => {
  // console.log(props.product);
  
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='mb-5 text-3xl font-semibold'>{product?.name}</h1>
        <img src={`/products/${product?.image}`} alt={product?.name} width={600} className='h-96 w-auto' />
        <span className='block mt-6 text-xl'>Precio: ${product?.price}</span>
        <ItemCount product={product} />
        <span className='inline-block text-base mt-3'>Stock disponible: {product?.stock}</span>
    </div>
  )
}

export default ItemDetail