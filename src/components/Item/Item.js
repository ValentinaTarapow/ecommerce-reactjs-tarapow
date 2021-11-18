import "./Item.scss"
import React from 'react'
import ItemCount from "../ItemCount/ItemCount"

export const Item = ({product}) => {

    return (
        <article key={product.id} className="card m-3 product-item">
            <img src={product.img} alt={product.name}/>
            <div className="card-body">
                <h3 className="card-title text-center">{product.brand} - {product.name} ({product.size}) </h3>
                <p className="card-text"> <span className="fw-bold">Price:</span> ${product.price}</p>
                <p className="card-text">{product.desc}</p>
                <ItemCount className="d-flex flex-row"/>
            </div>
        </article>
    )
}

export default Item;