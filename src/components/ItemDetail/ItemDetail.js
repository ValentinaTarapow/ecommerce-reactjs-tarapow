import "./ItemDetail.scss"
import ItemCount from '../ItemCount/ItemCount';
import React from 'react';


export const ItemDetail = ({id, stock, price, brand, name, gender, family, size, img, topNotes, middleNotes, baseNotes}) => {

	console.log(topNotes);
	console.log(middleNotes);
	console.log(baseNotes);
	return (
		<section className="ItemDetail" >
			<div className="card w-50 m-3 item-detail">
				<img src={img} className="ItemImg" />
				<div className="card-body ItemDetail-info">
					<h1 className="card-title text-center">{brand} - {name} </h1>
					<h2 className="text-center">Price: ${price}</h2>
					<div className="card-text">
						<h3>Fragrance Family</h3>
						<p>{family}</p>
					</div>

					<div className="card-text text-start">
						<h4>Top Notes</h4>
							{/* {topNotes.map((note) =>(<li> {note} </li>))}; */}
						<h4>Middle Notes</h4>
							{/* {middleNotes.map((note) => (<li> {note} </li>))}; */}
						<h4>Base Notes</h4>
							{/* {baseNotes.map((note) => (<li> {note} </li>))}; */}
					</div>
				</div>
				<ItemCount stock={stock}/>
			</div>
		</section>
	)
}