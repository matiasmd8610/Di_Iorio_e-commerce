import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';
import { getSingleProduct } from '../utilities/getProducts';


const ItemDetailContainer = () => {
  const {id} = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getSingleProduct(id)
      .then((productFromPromise)=> {
        setProduct(productFromPromise);
      })
  }, [id])

  console.log(product);
  
  return (
    <div className='container py-10'>
        {typeof product}
        {/* <ItemDetail product={product} /> */}
    </div>
  )
}

export default ItemDetailContainer