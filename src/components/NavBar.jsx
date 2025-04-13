import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <header className='py-6 bg-amber-500'>
      <div className='container flex justify-between'>
        <div className='text-2xl p-2.5 bg-white rounded-sm'>Logo</div>
        <nav className='flex items-center justify-between'>
          <ul className='flex items-center gap-5'>
            <li>Nosotros</li>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
          <CartWidget />
        </nav>
      </div>
    </header>
  )
}

export default NavBar