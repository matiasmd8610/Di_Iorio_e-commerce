import './styles/App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer'
import Contacto from './components/Contacto'
import CartProvider from './components/Context/CartContext'
import Cart from './components/Cart'
import { createFirebaseApp } from './utilities/configFirebase'
import Checkout from './components/Checkout'

function App() {
  createFirebaseApp();
  
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <main className='min-h-screen'>
            <Routes>
              <Route index element={<Home />}></Route>
              {/* <Route exact path='/nosotros'></Route> */}
              <Route exact path='/productos' element={<ItemListContainer message={"Te invitamos a conocer todos nuestros productos"} />}></Route>
              <Route exact path='/productos/categoria/:category' element={<ItemListContainer />}></Route>
              <Route exact path='/productos/:productId' element={<ItemDetailContainer />}></Route>
              <Route exact path='/contacto' element={<Contacto />}></Route>
              <Route exact path='/cart' element={<Cart />}></Route>
              <Route exact path='/checkout' element={<Checkout />}></Route>
            </Routes>
          </main>
          {/* <ItemListContainer message={"Te invitamos a conocer todos nuestros productos"} /> */}
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
