import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black py-4'>
        <div className='container'>
            <p className='text-center text-white text-sm'>Copyright &copy; {new Date().getFullYear()}. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer