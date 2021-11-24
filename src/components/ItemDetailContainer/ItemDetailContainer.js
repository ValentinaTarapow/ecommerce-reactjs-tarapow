import "./ItemDetailContainer.scss";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from 'react';
import { bringData } from '../../helpers/bringData';
import { useParams } from "react-router";

export const ItemDetailContainer = () =>
{        
        const [item, setItem] = useState();
        const [loading, setLoading] = useState(false);

        const { itemId } = useParams();

        useEffect(() => {
            setLoading(true)
            bringData()
                .then( (resp) => {
                    if(!itemId){
                        console.log("no hay id")
                    }
                    else{
                        setItem( resp.find( prod => prod.id === Number(itemId) ) );
                    }
                })
                .catch( (error) => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }, [itemId])

        return (
            <div className="ItemDetail-container">
                {
                    loading
                        ? <h2 className="loading my-5">Loading...</h2>
                        : <ItemDetail product={item} />
                }
            </div>
        )
}