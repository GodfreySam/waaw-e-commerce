import React from "react";
import "./arrival.css";
import { useHistory } from "react-router-dom";

const Arrival = ({ newArrivals }) => {
	let history = useHistory();
	return (
		<div className="arrivals home">
			<div className="arrivals__header">
				<h2>New Arrivals</h2>
			</div>
			<div className="arrivals__body">
				{newArrivals.map((arrival) => (
					<div
						className="arrival"
						key={arrival.id}
						onClick={() => history.push("/products")}
					>
						<div className="arrival__top">
							<img src={arrival.image} alt={arrival.name} />
						</div>
						<div className="arrival__bottom">
							<p>{arrival.name}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Arrival;
