import "./Item.scss"
import React from 'react'

export const Item = ({product}) => {

    return (
        <article key={product.id} className="card m-3 product-item">
            <img src={product.img} alt={product.name}/>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className="">
                    <h3 className="card-title text-center">{product.brand} - {product.name} ({product.size}) </h3>
                    <p className="card-text"> <span className="fw-bold">Price:</span> ${product.price}</p>
                    <p className="card-text"><span className="fw-bold">Fragrance family:</span> {product.family}</p>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <btn className="btn btn-secondary m-4">More info</btn>
                </div>
                
            </div>
        </article>
    )
}

export default Item;