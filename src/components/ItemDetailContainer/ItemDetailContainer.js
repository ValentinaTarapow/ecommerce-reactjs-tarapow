import "./ItemDetailContainer.scss";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

export const ItemDetailContainer = () =>
{
        const [loading, setLoading] = useState([])
        const [item, setItem] = useState(false)
    
        const { itemId } = useParams()
    
        useEffect(() => {
    
            setLoading(true)
    
            const docRef = doc(db, "products", itemId)
            getDoc(docRef)
                .then((doc) => {
                    setItem({
                        id: doc.id,
                        ...doc.data()
                    })
                }) 
                .finally(() => {
                    setLoading(false);
                })
        }, [itemId])

    
        return (
            <div className="ItemDetail-container">
                {
                    loading
                        ? <h2 className="loading my-5 text-center">Loading...</h2>
                        : <ItemDetail {...item} />
                }
            </div>
        )
}