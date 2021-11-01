// import { Container } from '@material-ui/core'
import React from "react";
import "./shoppingcart.css";
import CloseIcon from "@material-ui/icons/Close";
import Checkbox from "../checkbox/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CheckoutBtn from "../Buttons/CheckoutBtn";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			marginBottom: theme.spacing(3),
			width: "70%",
			// color: 'primary'
		},

		input: {
			borderBottom: "1px solid white",
		},
	},
}));

const ShoppingCart = ({
	cartItems,
	handleAddProduct,
	handleRemoveProduct,
	handleCartClearance,
}) => {
	const classes = useStyles();
	const totalPrice = cartItems.reduce(
		(price, item) => price + item.quantity * item.price,
		0,
	);

	return (
		<div className="container cart-wrapper">
			<div className="container__one">
				<div className="s__name">
					<h1>SHOPPING CART</h1>
				</div>
				{cartItems.length === 0 && (
					<h4 className="cart-items-empty">No item added to cart</h4>
				)}
				{cartItems.map((item) => (
					<div className="first__cart">
						<div className="cart__image__container">
							<img src={item.image} alt={item.name} className="cart__image" />
						</div>
						<div className="cart__desc">
							<h1 className="cart__title">{item.name}</h1>
							<p>{item.name}></p>
						</div>
						<div className="cart__price">
							<h3>${item.price}</h3>
						</div>
						<div className="cart__quantity">
							<button className="cart__plus" onClick={() => handleAddProduct(item)}>
								+
							</button>
							<h3>{item.quantity}</h3>
							<button
								className="cart__minus"
								onClick={() => handleRemoveProduct(item)}
							>
								-
							</button>
						</div>
						<div className="cart__quantity__second">
							{cartItems.length >= 1 && (
								<CloseIcon
									style={{
										margin: "1.65rem 0",
									}}
									onClick={handleCartClearance}
								/>
							)}
						</div>
					</div>
				))}
				<hr />
				<hr className="divider" />
				<div className="cart__total">
					<h3> SUBTOTAL </h3>
					<h3>${totalPrice}</h3>
				</div>
			</div>
			<div className="container__two">
				<div className="payment__header">
					<h1>PAYMENT</h1>
				</div>
				<div className="payment__options">
					<Checkbox />
				</div>
				<div className="payment__gateway">
					<button className="first__button" style={{ width: "50%" }}>
						{" "}
						<h3> Paypal </h3>{" "}
					</button>
					<button className="second__button" style={{ width: "50%" }}>
						{" "}
						<h3> VISA </h3>{" "}
					</button>
				</div>
				<div className="payment__details">
					<form className={classes.root} noValidate autoComplete="off">
						<TextField
							className={classes.input}
							id="standard-basic"
							label="Cardholder Name"
						/>
						<TextField
							className={classes.input}
							id="standard-basic"
							label="Card Number"
						/>
						<TextField
							className={classes.input}
							id="standard-basic"
							label="Cardholder Name"
						/>

						<div className="payment__card">
							<TextField
								className="payment__card__details"
								id="standard-basic"
								label="Exp. Date"
							/>
							<TextField
								className="payment__card__detail"
								id="standard-basic"
								label="CVV"
							/>
						</div>
						<div className="payment__card__button">
							<CheckoutBtn />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
