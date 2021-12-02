import React from "react";
import {BsFillTrashFill} from 'react-icons/bs'
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';


export const CartItem = ( {id,name,size,price,counter})  => {

    const {removeItem} = useContext(CartContext)

    return(
        <div className="cart-list-item d-flex flex-row w-100 justify-content-around">
            <h6>{name} (#{id})</h6>
            <span> - </span>
            <p>{size}ml</p>
            <span> - </span>
            <p>{price}</p>
            <span> x </span>
            <p>{counter}</p>
            <btn className="btn btn-danger" onClick={()=>{removeItem(id)}}> <BsFillTrashFill/></btn>
        </div>
    )
}