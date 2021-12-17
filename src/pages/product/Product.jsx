import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import { Container } from "@material-ui/core";
import Ratings from "../../components/Ratings/Ratings";
import Quantity from "../../components/Quantity/Quantity";
import Like from "../../components/Like/Like";
import toast from "react-hot-toast";
import { CartState } from "../../context/CartContext";

const Product = () => {
	const {
		state: { cart },
		state: { products },
		dispatch,
	} = CartState();

	const notify = (e) => {
		e.preventDefault();
		return toast.success("Item already in cart");
	};

	const {id} = useParams();
	const [product, setProduct] = useState({});
	console.log(product)
	// const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		setProduct(...products.shopItems.filter((item) => item.id === id));
	}, [id, products.shopItems])

	return (
		<div className="product-detail__container">
			<Container
				style={{
					background:
						"linear-gradient(-243deg, #918ba7, #918ba7 40%, #fff 40%, #fff)",
				}}
			>
				<div className="product__nav__wrapper">
					<div className="product__nav">
						<div className="product__logo">
							<h1 className="product__logo__brand">Frotoo</h1>
						</div>
					</div>
				</div>
				<div className="product__main">
					<div className="product__image__container">
						<img src={product.image} alt={product.name} className="product__image" />
					</div>
					<div className="product__desc">
						<div className="product__desc__ratings">
							<Ratings />
						</div>
						<div className="product__title">
							<h2 className="product__title__header">{product.name}</h2>
						</div>
						<div className="product__price">
							<h1 className="product__price__header">${product.price}</h1>
						</div>
						<div>
							<Quantity />
						</div>
						<div className="product__like">
							<Like />
						</div>
						<div className="product__button">
							<div className="button__cart">
								{cart.some((item) => item.id === product.id) ? (
									<button class="btn btn-2 btn-sep icon-arrow" onClick={notify}>
										Add to cart
									</button>
								) : (
									<button
										class="btn btn-2 btn-sep icon-arrow"
										onClick={() => {
											dispatch({
												type: "ADD_TO_CART",
												payload: product,
											});
										}}
									>
										Add to cart
									</button>
								)}
							</div>
						</div>
					</div>
					<div className="product__line">
						<div class="product__solid"></div>
						<div class="product__dotted"></div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Product;
