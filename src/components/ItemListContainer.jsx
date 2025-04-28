import React, { useEffect, useState } from 'react'
import ItemList from './itemList'
import { getProducts } from '../utilities/getProducts';


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    // console.log(getProducts(products));
    getProducts()
      .then((productsFromPromise) => setProducts(productsFromPromise))
      .catch((error) => console.log(error))
  }, []);
  
  return (
    <main className='min-h-lvh'>
      <section>
        <div className='container'>
          <h2 className='text-center text-4xl mb-12 font-semibold'>{props.message}</h2>
          <ItemList products={products} />
        </div>
      </section>
    </main>
  )
}

export default ItemListContainer
