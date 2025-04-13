import './styles/App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer message={"Bienvenidos a mi e-commerce"} />
      <Footer />
    </>
  )
}

export default App
