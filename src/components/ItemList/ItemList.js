import React from 'react'
import "./ItemList.scss"
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Item } from '../Item/Item'

export const ItemList = ({products}) => {

    return (
        <Container>
            <h2 className="text-center item-list-title my-4">Our Products</h2>
            <Row className="item-list w-100 d-flex justify-content-center">
                {products.map((prod) => <Item product={prod}/>)}
            </Row>
        </Container>
    )
}