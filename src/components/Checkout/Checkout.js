import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/config'
import { validateData } from '../../helpers/validateData'
import { collection, Timestamp, writeBatch, query, where, documentId, getDocs, addDoc } from 'firebase/firestore'
import Swal from 'sweetalert2';
import "./Checkout.scss";
import {AiOutlineSend} from "react-icons/ai";

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
                        text: `Your order ID is: #${res.id}`,
                        footer: 'We will contact you very soon to update your order status. Thank you for your purchase!'                       
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
                        <h2>Checkout : finish your order</h2>
                        <hr/>

                        <form className='checkout-form p-4' onSubmit={handleSubmit}>
                            <div>
                                <div>
                                    <label>Name</label>
                                    {values.name.length < 2 && <small>This field is mandatory (at least 2 characters)</small>}
                                    <input
                                        onChange={handleInputChange}
                                        name="name"
                                        value={values.name}
                                        type="text"
                                        placeholder="Name"
                                        className={values.name.length < 2 ? 'form-control my-2 invalid-form' : 'form-control my-2' }
                                    />
                                </div>

                                <div>
                                    <label>Surname</label>
                                    {values.surname.length < 2 && <small>This field is mandatory (at least 2 characters)</small>}
                                    <input
                                        onChange={handleInputChange}
                                        name="surname"
                                        value={values.surname}
                                        type="text"
                                        placeholder="Surname"
                                        className={values.surname.length < 2 ? 'form-control my-2 invalid-form' : 'form-control my-2' }
                                    />
                                </div>

                                <div>
                                    <label>Email</label>
                                    {values.email.length < 6 && <small>This field is mandatory (at least 6 characters)</small>}
                                    <input
                                        onChange={handleInputChange}
                                        name="email"
                                        value={values.email}
                                        type="email"
                                        placeholder="Email"
                                        className={values.email.length < 6 ? 'form-control my-2 invalid-form' : 'form-control my-2' }
                                    />
                                </div>

                                <div>
                                <label>Email confirmation</label>
                                { (values.emailConfirm) !== (values.email) && (<small>Emails do not match</small>)}
                                    <input
                                        onChange={handleInputChange}
                                        name="emailConfirm"
                                        value={values.emailConfirm}
                                        type="email"
                                        placeholder="Repeat email"
                                        className={((values.emailConfirm) !== (values.email) || (!values.email) )? 'form-control my-2 invalid-form' : 'form-control my-2' }
                                    />
                                </div>
                            </div>
                            
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-submit-order my-5">Submit order <AiOutlineSend /></button>
                            </div>
                        </form>
                    </div>
            }
        </>
    )
}