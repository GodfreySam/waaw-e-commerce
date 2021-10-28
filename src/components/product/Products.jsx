import React from "react";
import { useHistory } from "react-router-dom";
import "./products.css";

const Products = ({ shopItems }) => {
		let history = useHistory();

	// console.log(shopItems);
	return (
		<div className="products">
			{shopItems.map((shopItem) => (
				<div className="product_card" key={shopItem.id}>
					<div>
						<img className="product_image" src={shopItem.image} alt={shopItem.name} />
					</div>
					<div>
						<h3 className="product_name">{shopItem.name}</h3>
						<div className="product_price">${shopItem.price}</div>
						<div>
							<button
								className="product_add-button"
								onClick={() => history.push(`/product-details/${shopItem.id}`)}
							>
								Select Item
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Products;
