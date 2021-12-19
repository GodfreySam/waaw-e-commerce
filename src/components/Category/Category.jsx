import React from "react";
import "./category.css";
import { CartState } from "../../context/CartContext";
import toast from "react-hot-toast";

import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
	InfoOutlined,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const Category = () => {
	const {
		state: { cart },
		state: { products },
		dispatch,
	} = CartState();

	const notify = (e) => {
		e.preventDefault();
		return toast.success("Item already in cart");
	};

	return (
		<div className="categories">
			<div className="categories__header">
				<h2>Top Categories</h2>
			</div>
			<div className="categories__body">
				<div className="categories__products">
					{products.topCategories.map((category) => (
						<div className="category category__container" key={category.id}>
							<div className="category__top">
								<img src={category.image} alt={category.name} />
							</div>
							<div className="category__bottom">
								<p>{category.name}</p>
								<div className="category__bottom--prices">
									<p className="price newPrice">${category.price}</p>
									<p className="price oldPrice">${category.oldPrice}</p>
								</div>
							</div>
							<div className="category__cta">
								{cart.some((item) => item.id === category.id) ? (
									<div className="icon__wrapper" onClick={notify}>
										<ShoppingCartOutlined />
									</div>
								) : (
									<div
										className="icon__wrapper"
										onClick={() => {
											dispatch({
												type: "ADD_TO_CART",
												payload: category,
											});
										}}
									>
										<ShoppingCartOutlined />
									</div>
								)}
								<div
									className="icon__wrapper"
									onClick={() =>
										(window.location.href = `/product-details/${category.id}`)
									}
								>
									<InfoOutlined />
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="category__pagination">
					<IconButton className="button">
						<ArrowBackIosOutlined className="arrow" />
					</IconButton>
					<div className="arrow-separate"></div>
					<IconButton className="button">
						<ArrowForwardIosOutlined className="arrow" />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default Category;
