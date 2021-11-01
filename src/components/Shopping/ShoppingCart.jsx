// import { Container } from '@material-ui/core'
import React, { useContext, useState } from "react";
import "./shoppingcart.css";
import Checkbox from "../checkbox/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Header1 from "../Header/Header1";
import Header2 from "../Header/Header2";
import MainFooter from "../footer/MainFooter";
import Footer from "../footer/Footer";
import { PaystackConsumer } from "react-paystack";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

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

const handleSuccess = (reference) => {
	toast(reference);
};

const handleClose = () => {
	toast("Wait! Are you sure you do not want any frooto goodness?");
}

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

	const notify = (e) => {
		e.preventDefault();
		return toast.error("Please login to effect payment");
	};

	const { user } = useContext(AuthContext);
	const publicKey = "pk_test_16cd97ad2d4d6fd0c64365399dab591eb4721763";
	const [phone, setPhone] = useState("");

	const componentProps = {
		email: user ? user.user.email : "",
		amount: totalPrice * 100,
		metadata: {
			name: user ? user.user.firstname : "",
			phone: phone,
		},
		publicKey,
		text: "CHECKOUT",
		onSuccess: (reference) => handleSuccess(reference),
		onClose: () => handleClose
	};
	console.log(componentProps);

	return (
		<>
			<Header1 />
			<Header2 cartItems={cartItems} />
			<div className="cart-wrapper home">
				<div className="container__one">
					<div className="s__name">
						<div>
							<h1>SHOPPING CART</h1>
							{cartItems.length === 0 && (
								<h4 className="cart-items-empty">No item added to cart</h4>
							)}
						</div>
						<div className="cart__quantity__second">
							{cartItems.length >= 1 && (
								<button onClick={handleCartClearance}>Clear Cart</button>
							)}
						</div>
					</div>
					<div className="cart__item__holder">
						{cartItems.map((item) => (
							<div className="first__cart">
								<div className="cart__image__container">
									<img src={item.image} alt={item.name} className="cart__image" />
								</div>
								<div className="cart__desc">
									<h1 className="cart__title">{item.name}</h1>
									<p>{item.name}</p>
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
							</div>
						))}
					</div>
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
					<div className="payment__details">
						<form className={classes.root} noValidate autoComplete="off">
							<TextField
								className={classes.input}
								id="standard-basic"
								label="Cardholder Name"
								value={user ? user.user.firstname + " " + user.user.lastname : ""}
							/>
							<TextField
								className={classes.input}
								id="standard-basic"
								label="Email"
								value={user ? user.user.email : ""}
							/>
							<TextField
								type="text"
								className={classes.input}
								id="standard-basic"
								label="Phone Number"
								onChange={(e) => setPhone(e.target.value)}
							/>
							<div className="payment__card__button">
								{user ? (
									<PaystackConsumer {...componentProps} >
										{({initializePayment}) => <button onClick={() => initializePayment(handleSuccess, handleClose)}>CHECKOUT</button>}
									</PaystackConsumer>
								) : (
									<button class="checkout__button" onClick={notify}>
										CHECKOUT
									</button>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer />
			<MainFooter />
		</>
	);
};

export default ShoppingCart;
