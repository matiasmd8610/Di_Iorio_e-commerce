import React from 'react'
import CartWidget from './CartWidget'
import { useEffect, useState } from 'react';


const NavBar = () => {
    const [sticky, setSticky] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
          window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 10 ? "headerSticky" : "";
        setSticky(stickyClass);
    };

    return (
      <header className={`py-2 bg-white ${sticky}`}>
        <div className='container flex justify-between items-center'>
          <img className='logo transition-all' src='/logo_regionalbox.png' alt='logo' width={180} />
          <nav className='flex items-center justify-between'>
            <ul className='flex items-center gap-6'>
              <li><a href='/nosotros' data-name="Nosotros">Nosotros</a></li>
              <li><a href=''>Productos</a></li>
              <li><a href='/contact'>Contacto</a></li>
            </ul>
            <CartWidget />
          </nav>
        </div>
      </header>
    )
}

export default NavBar