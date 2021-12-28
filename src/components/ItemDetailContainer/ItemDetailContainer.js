import "./ItemDetailContainer.scss";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

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
                        ? 
                            <Loader
                                className="loading my-5 text-center"
                                type="Hearts"
                                color="#D9A7B4"
                                height={100}
                                width={100}
                            />
                        
                        : <ItemDetail {...item} />
                }
            </div>
        )
}