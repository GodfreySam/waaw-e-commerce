import React from "react";
import "./arrival.css";
// import data from "../../database/data"
import { CartState } from "../../context/CartContext";

const Arrival = () => {
const {
	state: { products },
	} = CartState();
	
	return (
		<div className="arrivals">
			<div className="arrivals__header">
				<h2>New Arrivals</h2>
			</div>
			<div className="arrivals__body">
				{products.newArrivals.map((arrival) => (
					<div className="arrival arrival__container" key={arrival.id}>
						<div className="arrival__top">
							<img src={arrival.image} alt={arrival.name} />
						</div>
						<div className="arrival__bottom">
							<p>{arrival.name}</p>
						</div>
						<div className="arrival__cta">
							<button onClick={() => (window.location.href = "#shop__items")}>
								SHOP NOW
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Arrival;
