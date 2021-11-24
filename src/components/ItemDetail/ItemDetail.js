import "./ItemDetail.scss"
import ItemCount from '../ItemCount/ItemCount';
import React from 'react';

export const ItemDetail = ({product}) => {

	return (
		<section className="ItemDetail" >
			<div className="card w-50 m-3 item-detail">
				<img src={product.img} className="ItemImg" />
				<div className="card-body ItemDetail-info">
					<h1 className="card-title text-center">{product.brand} - {product.name} </h1>
					<h2 className="text-center">Price: ${product.price}</h2>
					<div className="card-text">
						<h3>Fragrance Family</h3>
						<p>{product.family}</p>
					</div>

					<div className="card-text text-start">
						<h4>Top Notes</h4>
							<ul>
								{product.topNotes.map((note) => <li>{note}</li>)}
							</ul>
						<h4>Middle Notes</h4>
							<ul>
								{product.middleNotes.map((note) => <li>{note}</li>)}
							</ul>
						<h4>Base Notes</h4>
							<ul>
								{product.baseNotes.map((note) => <li>{note}</li>)}
							</ul>
					</div>
					
				</div>
				<ItemCount stock={product.stock}/>
			</div>
		</section>
	)
}