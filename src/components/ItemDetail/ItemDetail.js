import "./ItemDetail.scss"
import ItemCount from '../ItemCount/ItemCount';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';


export const ItemDetail = ({id, stock, price, brand, name, gender, family, size, img, topNotes, middleNotes, baseNotes}) => {

	const [counter , setCounter] = useState(1);
	const [added, setAdded] = useState(false);

// Handlers
	const handleAdd = () => {
		if(counter>0){
			console.log('Item agregado: ',
				{
					id,
					name,
					gender,
					family,
					price,
					counter
				}
			);
		
			setAdded(true);
		}
	}
// ___________________________________

	//RESOLVER: como pasa el array y como leerlo
	console.log(topNotes);
	console.log(middleNotes);
	console.log(baseNotes);


	return (
		<section className="ItemDetail" >
			<div className="card w-50 m-3 item-detail">
				<img src={img} className="ItemImg" />
				<div className="card-body ItemDetail-info">
					<h1 className="card-title text-center">{brand} - {name} </h1>
					<h2 className="text-center">Price: <span className="detail-attr">${price}</span></h2>
					<div className="card-text">
						<h3>Fragrance Family: <span className="detail-attr">{family} </span></h3>
					</div>

					{/* RESOLVER: como pasarlo y leerlo como li */}
					<div className="card-text text-start">
						<h4>Top Notes</h4>
							{topNotes}
							{/* {topNotes.map((note,i)=> (<li>{note}</li>))} */}
						<h4>Middle Notes</h4>
							{middleNotes}
						<h4>Base Notes</h4>
							{baseNotes}
					</div>
				</div>

				{!added 
					?	<ItemCount 
							max={stock} 
							counter={counter} 
							setCounter={setCounter}
							handleAdd={handleAdd}
						/>

					: <Link to="/cart" className="btn btn-success">Finish shopping</Link>

				}

			</div>
		</section>
	)
}