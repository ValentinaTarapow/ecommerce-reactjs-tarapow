import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/config'
import { validateData } from '../../helpers/validateData'
import { collection, Timestamp, writeBatch, query, where, documentId, getDocs, addDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'

export const Checkout = () => {

    const {cart, totalPrice, clear} = useContext(CartContext)

    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        emailConfirm: '',
    })

    const handleInputChange = (e) => {        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateData(values)) { return }

        const order = {
            buyer: {...values},
            items: cart,
            total: totalPrice(),
            date: Timestamp.fromDate( new Date() )
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const productsRef = collection(db, "products")
        const q = query(productsRef, where(documentId(), 'in', cart.map(el => el.id)))

        const outOfStock = []

        const products = await getDocs(q)

        products.docs.forEach((doc) => {
            const itemToUpdate = cart.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= itemToUpdate.counter) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {    
            addDoc(ordersRef, order)
                .then((res) => {
                    batch.commit()   
                    Swal.fire({
                        icon: 'success',
                        title: 'Your order has been placed successfully',
                        text: `Your order ID is: ${res.id}`                        
                    })
                    clear()
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'There is no stock available of these products:',
                text: outOfStock.map(el => el.name).join(', ')
            })
        }
}


    return (
        <>
            {cart.length === 0 
                ? <Navigate to="/"/>
                :
                    <div className="container my-5">
                        <h2>Order</h2>
                        <hr/>

                        <form onSubmit={handleSubmit}>
                            <input
                                onChange={handleInputChange}
                                name="name"
                                value={values.name}
                                className="form-control my-2"
                                type="text"
                                placeholder="Name"
                            />
                            {values.name.length < 4 && <small>Invalid name</small>}

                            <input
                                onChange={handleInputChange}
                                name="surname"
                                value={values.surname}
                                className="form-control my-2"
                                type="text"
                                placeholder="Surname"
                            />
                            {values.surname.length < 4 && <small>Invalid surname</small>}

                            <input
                                onChange={handleInputChange}
                                name="email"
                                value={values.email}
                                className="form-control my-2"
                                type="email"
                                placeholder="Email"
                            />
                            {values.email.length < 4 && <small>Invalid email</small>}

                            <input
                                onChange={handleInputChange}
                                name="emailConfirm"
                                value={values.emailConfirm}
                                className="form-control my-2"
                                type="email"
                                placeholder="Repeat email"
                            />
                            { (values.emailConfirm) !== (values.email) && (<small>Emails do not match</small>)}

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
            }
        </>
    )
}