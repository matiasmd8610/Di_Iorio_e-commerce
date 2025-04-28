import './styles/App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <section className='hero bg-[url("/hero_bg_01.jpg")] min-h-[420px] flex items-center'>
        <div className='container relative z-20'>
          <h1 className='text-center text-5xl mb-10 font-semibold text-white mt-20'>Productos de valor</h1>
        </div>
      </section>
      <ItemListContainer message={"Te invitamos a conocer todos nuestros productos"} />
      <Footer />
    </>
  )
}

export default App
