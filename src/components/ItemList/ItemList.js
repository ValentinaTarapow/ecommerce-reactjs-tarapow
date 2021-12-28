import React from 'react'
import "./ItemList.scss"
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Item } from '../Item/Item'

export const ItemList = ({products}) => {

    return (
        <Container>
            <Row className="item-list w-100 d-flex justify-content-center">
                {products.map((prod) => <Item {...prod}/>)}
            </Row>
        </Container>
    )
}