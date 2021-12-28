import "./ItemDetail.scss"
import ItemCount from '../ItemCount/ItemCount';
import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/CartContext";


export const ItemDetail = ({id, stock, price, brand, name, gender, family, size, img, topNotes, middleNotes, baseNotes}) => {

	const [counter , setCounter] = useState(1);
	const [added, setAdded] = useState(false);
	const {addItem, isInCart} = useContext(CartContext);

// Handlers
	const handleAdd = () => {
		if(counter>0){

			addItem(
				{
					id,
					name,
					brand,
					price,
					img,
					size,
					counter
				}
			)
		
			setAdded(true);
		}
	}
// ___________________________________

	//RESOLVER: como pasa el array y como leerlo
	console.log(topNotes);
	console.log(middleNotes);
	console.log(baseNotes);


	return (

		<section className="ItemDetail p-5" >
			<div className="m-3 py-3 item-detail d-flex flex-row justify-content-center align-items-center">
				<div className="img-container m-2">
					<img src={img} className="ItemImg" alt={name}/>
				</div>
				
				<div className="ItemDetail-info">
					<h2 className="text-center detail-title">{brand} - {name} <span className="detail-attr"> ({size})</span> </h2>
					<h3 className="text-center">Price: <span className="detail-price fw-lighter">${price}</span></h3>

					<hr />

					<div className="m-4">
						<h3>Fragrance Family: <span className="detail-attr">{family} </span></h3>

						<div className="topNotes m-4">
							<h4>Top Notes</h4>
							<p className="detail-attr">{topNotes.join(' - ')}</p>
						</div>

						<div className="middleNotes m-4">
							<h4>Middle Notes</h4>
							<p className="detail-attr">{middleNotes.join(' - ')}</p>
						</div>

						<div className="baseNotes m-4">
							<h4>Base Notes</h4>
							<p className="detail-attr">{baseNotes.join(' - ')}</p>
						</div>	
					</div>

					<div className="d-flex justify-content-center">
						{!isInCart(id)
							?	<ItemCount 
									max={stock} 
									counter={counter} 
									setCounter={setCounter}
									handleAdd={handleAdd}
								/>

							: <Link to="/cart" className="btn btn-success">Finish shopping</Link>
						}
					</div>
				
				</div>

			</div>
		</section>

	)
}