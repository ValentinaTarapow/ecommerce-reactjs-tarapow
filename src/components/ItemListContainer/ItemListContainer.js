import './ItemListContainer.scss'; 
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { bringData } from '../../helpers/bringData'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router';

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    
    // Hook
    const { genderId } = useParams();

    useEffect(() => {

        setLoading(true)
        bringData()
            .then( (resp) => {
                if(!genderId){
                    setProducts(resp);
                }
                else{
                    setProducts( resp.filter(prod => prod.gender === genderId) );
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                setLoading(false)
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