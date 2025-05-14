import React, { useEffect, useState } from 'react'
import ItemList from './itemList'
import { getProducts } from '../utilities/getProducts';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {
  const {category} = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(category);
  
  useEffect(()=> {
    // console.log(getProducts(products));
    getProducts(category)
      .then((productsFromPromise) => {
        setProducts(productsFromPromise)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [category]);
  
  return (
    <>
      <section>
        <div className='container'>
          <div className='mb-10'>
            {/* <h3 className='font-semibold text-2xl mb-2'>Categorías</h3> */}
            <ul className='menuFilters flex justify-center gap-4'>
              <li><NavLink activeclassname="active" className="rounded-4xl border border-gray-300 py-2 px-5 hover:bg-amber-100" to={"/productos/categoria/individual"}>Productos Individulaes</NavLink></li>
              <li><NavLink activeclassname="active" className='rounded-4xl border border-gray-300 py-2 px-5 hover:bg-amber-100' to={"/productos/categoria/box"}>Cajas</NavLink></li>
            </ul>
          </div>
          <div>
            <h2 className='text-center text-4xl mb-12 font-semibold'>{props.message}</h2>
            {loading ? (
              <div className='flex justify-center py-16'>
                <div className="🤚">
                  <div className="👉"></div>
                  <div className="👉"></div>
                  <div className="👉"></div>
                  <div className="👉"></div>
                  <div className="🌴"></div>		
                  <div className="👍"></div>
                </div>
              </div>
            ) : (
              <ItemList products={products} />
            )}
          </div>
        </div>
      </section>
      <style jsx="true">{`
        /* From Uiverse.io by Pradeepsaranbishnoi */
      .🤚 {
        --skin-color: #E4C560;
        --tap-speed: 0.6s;
        --tap-stagger: 0.1s;
        position: relative;
        width: 80px;
        height: 60px;
        margin-left: 80px;
      }

      .🤚:before {
        content: '';
        display: block;
        width: 180%;
        height: 75%;
        position: absolute;
        top: 70%;
        right: 20%;
        background-color: black;
        border-radius: 40px 10px;
        filter: blur(10px);
        opacity: 0.3;
      }

      .🌴 {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--skin-color);
        border-radius: 10px 40px;
      }

      .👍 {
        position: absolute;
        width: 120%;
        height: 38px;
        background-color: var(--skin-color);
        bottom: -18%;
        right: 1%;
        transform-origin: calc(100% - 20px) 20px;
        transform: rotate(-20deg);
        border-radius: 30px 20px 20px 10px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        border-left: 2px solid rgba(0, 0, 0, 0.1);
      }

      .👍:after {
        width: 20%;
        height: 60%;
        content: '';
        background-color: rgba(255, 255, 255, 0.3);
        position: absolute;
        bottom: -8%;
        left: 5px;
        border-radius: 60% 10% 10% 30%;
        border-right: 2px solid rgba(0, 0, 0, 0.05);
      }

      .👉 {
        position: absolute;
        width: 80%;
        height: 35px;
        background-color: var(--skin-color);
        bottom: 32%;
        right: 64%;
        transform-origin: 100% 20px;
        animation-duration: calc(var(--tap-speed) * 2);
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        transform: rotate(10deg);
      }

      .👉:before {
        content: '';
        position: absolute;
        width: 140%;
        height: 30px;
        background-color: var(--skin-color);
        bottom: 8%;
        right: 65%;
        transform-origin: calc(100% - 20px) 20px;
        transform: rotate(-60deg);
        border-radius: 20px;
      }

      .👉:nth-child(1) {
        animation-delay: 0;
        filter: brightness(70%);
        animation-name: tap-upper-1;
      }

      .👉:nth-child(2) {
        animation-delay: var(--tap-stagger);
        filter: brightness(80%);
        animation-name: tap-upper-2;
      }

      .👉:nth-child(3) {
        animation-delay: calc(var(--tap-stagger) * 2);
        filter: brightness(90%);
        animation-name: tap-upper-3;
      }

      .👉:nth-child(4) {
        animation-delay: calc(var(--tap-stagger) * 3);
        filter: brightness(100%);
        animation-name: tap-upper-4;
      }

      @keyframes tap-upper-1 {
        0%, 50%, 100% {
          transform: rotate(10deg) scale(0.4);
        }

        40% {
          transform: rotate(50deg) scale(0.4);
        }
      }

      @keyframes tap-upper-2 {
        0%, 50%, 100% {
          transform: rotate(10deg) scale(0.6);
        }

        40% {
          transform: rotate(50deg) scale(0.6);
        }
      }

      @keyframes tap-upper-3 {
        0%, 50%, 100% {
          transform: rotate(10deg) scale(0.8);
        }

        40% {
          transform: rotate(50deg) scale(0.8);
        }
      }

      @keyframes tap-upper-4 {
        0%, 50%, 100% {
          transform: rotate(10deg) scale(1);
        }

        40% {
          transform: rotate(50deg) scale(1);
        }
      }
      `}</style>
    </>
  )
}

export default ItemListContainer
