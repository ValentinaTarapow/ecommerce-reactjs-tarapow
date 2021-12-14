import "./Cart.scss"
import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import {Table} from 'react-bootstrap'
import {CartItemTable} from "./CartItemTable"


export const Cart = () => {

    const {cart, clear, totalPrice} = useContext(CartContext)

    return(
        <div className="container my-4">
            
            {
                //FULL CART
                cart.length > 0 ?
                <>
                    <h1 className="text-center">Your Cart</h1>

                    <section className="cart-list my-4">
                        <Table className="bg-light" variant="striped">
                            < thead >
                                <tr >
                                    <th> Name </th> 
                                    <th> ID </th>
                                    <th> Size </th> 
                                    <th> Price per unit</th>
                                    <th> Quantity </th>
                                    <th> Total item price </th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                cart.map((prod) => <CartItemTable {...prod}/>)
                            }
                        </Table>
                    </section>

                    <section className="text-center">
                        <h3>Total price: $ {totalPrice()}</h3>
                    </section>

                    <section className="cart-buttons w-100 d-flex justify-content-around">
                        <btn className="btn btn-danger" onClick={clear}>Empty</btn>
                        <Link to="/checkout" className="btn btn-success">Finish</Link>
                    </section>

                </>

                : //EMPTY CART
                <>
                    <section className="empty-cart my-5 w-100 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-center mb-5">Your cart is empty :(</h1>
                        <Link to="/"><btn className="btn btn-secondary">Go Home</btn></Link>
                    </section>
                </>
            }

        </div>
    )
}