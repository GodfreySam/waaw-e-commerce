import React from "react";
import { useHistory } from "react-router-dom";
import "./products.css";
import Header1 from "../Header/Header1";
import Header2 from "../Header/Header2";
import MainFooter from "../footer/MainFooter";
import Footer from "../footer/Footer";

const Products = ({shopItems, cartItems, handleAddProduct }) => {
	let history = useHistory();

	// console.log(shopItems);
	return (
		<>
			<Header1 />
			<Header2 cartItems={cartItems} />
			<div className="products home">
				{shopItems.map((shopItem) => (
					<div className="product_card" key={shopItem.id}>
						<div>
							<img
								className="product_image"
								src={shopItem.image}
								alt={shopItem.name}
							/>
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
			<Footer />
			<MainFooter />
		</>
	);
};

export default Products;
