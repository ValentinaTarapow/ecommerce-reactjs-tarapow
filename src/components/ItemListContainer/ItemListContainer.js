import './ItemListContainer.scss'; 
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/config';

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const { genderId } = useParams()

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
                    ? <h2 className="loading my-5">Loading...</h2> 
                    : <ItemList className="w-100 d-flex justify-content-center" products ={products}/>
            }
        </Container>
    )
}

export default ItemListContainer;