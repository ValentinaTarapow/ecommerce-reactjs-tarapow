import "./Item.scss"
import React from 'react'
import { Link } from "react-router-dom"

export const Item = ({id, stock, price, brand, name, gender, family, size, img, topNotes, middleNotes, baseNotes}) => {

    return (
        <article key={id} className="card m-3 product-item">
            <img src={img} alt={name}/>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className="">
                    <Link to={`/item/${id}`} className="card-title text-center" ><h3 className="card-title text-center">{brand} - {name} ({size}) </h3></Link>
                    <p className="card-text"> <span className="fw-bold">Price:</span> ${price}</p>
                    <p className="card-text"><span className="fw-bold">Fragrance family:</span> {family}</p>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <Link to={`/item/${id}`} className="btn btn-secondary m-4">More info</Link>
                </div>
                
            </div>
        </article>
    )
}

export default Item;