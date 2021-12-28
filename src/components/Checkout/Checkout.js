import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { validateData } from '../../helpers/validateData'
import "./Checkout.scss";
import {AiOutlineSend} from "react-icons/ai";
import { generateOrder } from '../../firebase/generateOrder'

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

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validateData(values)) { return }

        generateOrder(values, cart, totalPrice, clear);
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