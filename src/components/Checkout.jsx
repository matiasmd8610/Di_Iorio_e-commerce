import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useRef, useState } from 'react'
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

    const [formData, setFormData] = useState({ name: '', email: '', telephone: '' });
    const [errors, setErrors] = useState({});

    const handleCreateOrder = () => {
        const MySwal = withReactContent(Swal)
        
        const db = getFirestore();
        const collectionRef = collection(db, "orders");

        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
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
        } else {
            setErrors(newErrors);
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // clear error on change
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = 'El nombre es required';
        }
        if (!formData.telephone) {
            newErrors.telephone = 'El teléfono es requerido';
        }
        if (!formData.email) {
            newErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'el email es inválido';
        }
        return newErrors;
    };

    return (
        <div className='container flex gap-4 py-16 items-start'>
            <div className='flex flex-col gap-1'>
                <input type="text" name="name" id="name" value={formData.name} placeholder='Nombre' ref={name} onChange={handleChange} />
                {errors.name && <span className='text-red-600 text-sm'>{errors.name}</span>}
            </div>
            <div className='flex flex-col gap-1'>
                <input type="email" name="email" id="email" value={formData.email} placeholder='E-mail' ref={email} onChange={handleChange} />
                {errors.email && <span className='text-red-600 text-sm'>{errors.email}</span>}
            </div>
            <div className='flex flex-col gap-1'>
                <input type="tel" name="telephone" id="telephone" value={formData.telephone} placeholder='Teléfono' ref={tel} onChange={handleChange} />
                {errors.email && <span className='text-red-600 text-sm'>{errors.telephone}</span>}
            </div>
            <button type="button" className='btn' onClick={handleCreateOrder}>
                Crear orden
            </button>
        </div>
    )
}

export default Checkout