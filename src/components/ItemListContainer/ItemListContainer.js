import './ItemListContainer.scss'; 
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/config';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const { genderId } = useParams()

    let title = "Our products";
    if (genderId){
        title = title + ` : ${genderId}`
    }

    useEffect(() => {

        setLoading(true)

        const productsRef = collection(db, 'products')

        const q = genderId    ? query(productsRef, where("gender", "==", genderId))
                            : productsRef

        getDocs(q)
            .then((snapShot) => {
                const items = snapShot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProducts(items)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [genderId])

    return (
        <Container className="w-100 d-flex justify-content-center">
            {
                loading 
                    ? 
                        <Loader
                            className="loading my-5"
                            type="Hearts"
                            color="#D9A7B4"
                            height={100}
                            width={100}
                        />
                    :
                        <div className="text-center">
                            <h2 className="text-center item-list-title m-4">{title} </h2>
                            <ItemList className="w-100 d-flex justify-content-center" products ={products}/>
                        </div>
                    
                    
                    
            }
        </Container>
    )
}

export default ItemListContainer;