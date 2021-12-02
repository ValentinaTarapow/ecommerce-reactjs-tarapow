import React from "react";
import {BsFillTrashFill} from 'react-icons/bs'
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';


export const CartItemTable = ( {id,name,brand,size,price,counter})  => {

    const {removeItem} = useContext(CartContext)

    return(

        <tr>
            <td>{brand} - {name}</td>
            <td>#{id}</td>
            <td>{size}</td>
            <td>${price}</td>
            <td>{counter}</td>
            <td>${counter * price}</td>
            <td>
                <btn className="btn btn-danger" onClick={()=>{removeItem(id)}}> <BsFillTrashFill/></btn>
            </td>
        </tr>
    )
}