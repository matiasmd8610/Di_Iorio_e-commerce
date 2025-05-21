import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useRef } from 'react'
import { cartContext } from './Context/CartContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Checkout = () => {
    const { getTotalPrice, cart, emptyCart } = useContext(cartContext)
    const navigate = useNavigate();
    const name = useRef();
    const email = useRef();
    const tel = useRef();

    const handleCreateOrder = () => {
        const MySwal = withReactContent(Swal)
        
        const db = getFirestore();
        const collectionRef = collection(db, "orders");

        const orderData = {
            buyer : {
                name: name.current.value,
                email: email.current.value,
                phone: tel.current.value
            },
            total: getTotalPrice(),
            items: cart,
            date: serverTimestamp()
        }

        // console.log(orderData);
        

        addDoc(collectionRef, orderData)
            .then((response)=> {
                // alert(`Tu orden se creó correctamente con el id ${response.id}`)
                Swal.fire({
                    title: `Tu orden se creó correctamente con el id "${response.id}"`,
                    icon: "success",
                    draggable: true
                });
                emptyCart()
                navigate("/")
            })
            .catch(()=> {
                console.log("Se produjo un error al crear la orden");
            })
    }

    return (
        <div className='container flex gap-4 py-8'>
            <input type="text" name="nombre" id="nombre" placeholder='Nombre' ref={name} />
            <input type="email" name="email" id="email" placeholder='E-mail' ref={email} />
            <input type="tel" name="telephone" id="telephone" placeholder='Teléfono' ref={tel} />
            <button type="button" className='btn' onClick={handleCreateOrder}>
                Crear orden
            </button>
        </div>
    )
}

export default Checkout