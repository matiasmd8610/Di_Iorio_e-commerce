import React from 'react'

const ItemListContainer = (props) => {
  return (
    <main className='min-h-lvh flex items-center justify-center'>
      <section>
        <div className='container'>
          <h1 className='text-center text-5xl'>{props.message}</h1>
        </div>
      </section>
    </main>
  )
}

export default ItemListContainer
