import './styles/App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer'
import Contacto from './components/Contacto'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main className='min-h-screen'>
          <Routes>
            <Route index element={<Home />}></Route>
            {/* <Route exact path='/nosotros'></Route> */}
            <Route exact path='/productos' element={<ItemListContainer message={"Te invitamos a conocer todos nuestros productos"} />}></Route>
            <Route exact path='/productos/:id' element={<ItemDetailContainer />}></Route>
            <Route exact path='/contacto' element={<Contacto />}></Route>
          </Routes>
        </main>
        {/* <ItemListContainer message={"Te invitamos a conocer todos nuestros productos"} /> */}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
