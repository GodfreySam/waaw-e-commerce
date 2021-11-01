import React from "react";
import { useParams } from "react-router-dom";
import "./singleProduct.css";
import { Container } from "@material-ui/core";
import { BiUser, BiSearch } from "react-icons/bi";
import { GrCart } from "react-icons/gr";
import Ratings from "../Ratings/Ratings";
import FlavourButtons from "../Icons/FlavourIcons";
import Quantity from "../Quantity/Quantity";
import Like from "../Like/Like";
import Header1 from "../Header/Header1";
import Header2 from "../Header/Header2";
import MainFooter from "../footer/MainFooter";
import Footer from "../footer/Footer";
import shopItems from "../../database/shop";

const SingleProduct = ({cartItems, handleAddProduct }) => {
	const { id } = useParams();

	return (
		<>
			<Header1 />
			<Header2 cartItems={cartItems} />
			<div className="singleProduct home">
				{shopItems
					.filter((item) => item.id === id)
					.map((item) => (
						<Container
							key={item.id}
							style={{
								// border: '8px solid black',
								// borderRadius: '6px',
								// display: 'flex',
								maxwidth: "65vw",
								// height: '80vh',
								padding: "0 20px",
								// marginTop: '100px',
								background:
									"linear-gradient(-243deg, #918ba7, #918ba7 40%, #fff 40%, #fff)",
							}}
							fixed
						>
							<div className="product__nav__wrapper">
								<div className="product__nav">
									<div className="product__logo">
										<h1 className="product__logo__brand">Frotoo</h1>
									</div>

									<div className="product__icon">
										<li>
											<BiSearch className="product__icon__search" />
										</li>

										<li>
											<GrCart className="product__icon__search" />
										</li>

										<li>
											<BiUser className="product__icon__search" />
										</li>
									</div>
								</div>
							</div>
							<div className="product__main">
								<div className="product__image__container">
									<img src={item.image} alt={item.name} className="product__image" />
								</div>
								<div className="product__desc">
									<div className="product__desc__ratings">
										<Ratings />
									</div>
									<div className="product__title">
										<h2 className="product__title__header">{item.name}</h2>
										<p className="product__title__para">Flavour# FEE440</p>
									</div>
									<div className="product__price">
										<h1 className="product__price__header">${item.price}</h1>
									</div>
									<p className="product__flavour">Flavours</p>
									<div className="product__flavour__button">
										<FlavourButtons />
									</div>
									<div>
										<Quantity />
									</div>
									<div className="product__like">
										<Like />
									</div>
									<div className="product__button">
										<div className="button__cart">
											<button
												class="btn btn-2 btn-sep icon-arrow"
												onClick={() => handleAddProduct(item)}
											>
												Add to cart
											</button>
										</div>
										{/* <Button  /> */}
									</div>
								</div>
								<div className="product__line">
									<div class="product__solid"></div>
									<div class="product__dotted"></div>
								</div>
							</div>
						</Container>
					))}
			</div>
			<Footer />
			<MainFooter />
		</>
	);
};

export default SingleProduct;