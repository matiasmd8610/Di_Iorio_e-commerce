import React, { useEffect, useState } from 'react'
import ItemList from './itemList'
import { getProducts } from '../utilities/getProducts';
import { Link } from 'react-router-dom';


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
          <div className='mb-10'>
            {/* <h3 className='font-semibold text-2xl mb-2'>Categorías</h3> */}
            <ul className='flex justify-center gap-4'>
              <li><Link className='rounded-4xl border border-gray-300 py-2 px-5' to="">Productos Individulaes</Link></li>
              <li><Link className='rounded-4xl border border-gray-300 py-2 px-5' to="">Cajas</Link></li>
            </ul>
          </div>
          <div>
            <h2 className='text-center text-4xl mb-12 font-semibold'>{props.message}</h2>
            <ItemList products={products} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ItemListContainer
