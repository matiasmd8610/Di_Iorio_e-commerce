import React from 'react'
import ItemListContainer from './ItemListContainer'

const Home = () => {
  return (
    <>
    <section className='hero bg-[url("/hero_bg_01.jpg")] min-h-[420px] flex items-center'>
        <div className='container relative z-20'>
            <h1 className='text-center text-5xl mb-10 font-semibold text-white mt-20'>Productos de valor</h1>
        </div>
    </section>
    <ItemListContainer message={"Conocé nuestras ofertas"} onSale={true} />
    </>
  )
}

export default Home