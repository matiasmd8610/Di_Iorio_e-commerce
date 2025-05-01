import React from 'react'
import CartWidget from './CartWidget'
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


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
          <Link to={"/"}><img className='logo transition-all' src='/logo_regionalbox.png' alt='logo' width={180} /></Link>
          <nav className='flex items-center justify-between'>
            <ul className='flex items-center gap-6'>
              <li>
                <NavLink to='/' activeclassname="active">Home</NavLink>
              </li>
              {/* <li><a href='/nosotros' data-name="Nosotros">Nosotros</a></li> */}
              <li>
                <NavLink to='/productos' activeclassname="active">Productos</NavLink>
              </li>
              <li>
                <NavLink to='/contacto' activeclassname="active">Contacto</NavLink>
              </li>
            </ul>
            <CartWidget />
          </nav>
        </div>
      </header>
    )
}

export default NavBar