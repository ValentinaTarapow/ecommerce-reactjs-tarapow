import "./ItemDetailContainer.scss";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from 'react';
import { bringData } from '../../helpers/bringData'

export const ItemDetailContainer = () =>
{        
        const [loading, setLoading] = useState([]);
        const [products, setProducts] = useState(false);

        useEffect(() => {
            setLoading(true)
            bringData()
                .then( (resp) => {
                    setProducts(resp)
                })
                .catch( (error) => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }, [products])

        return (
            <div>
                {
                    loading
                        ? <h2 className="loading my-5">Loading...</h2>
                        : <ItemDetail product={products[0]} />
                }
            </div>
        )
}