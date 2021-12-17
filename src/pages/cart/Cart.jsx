// import { Container } from '@material-ui/core'
import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import CloseIcon from "@material-ui/icons/Close";
import Checkbox from "../../components/checkbox/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { PaystackConsumer } from "react-paystack";
import { AuthContext } from "../../context/AuthContext";
import { CartState } from "../../context/CartContext";

import toast from "react-hot-toast";
import Quantity from "../../components/Quantity/Quantity";
import { PaymentOutlined } from "@material-ui/icons";

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
};

const Cart = () => {
	const classes = useStyles();
	const { user } = useContext(AuthContext);
	const {
		state: { cart },
		dispatch,
	} = CartState();

	const [total, setTotal] = useState();
	const [isShow, setIsShow] = useState(false);

	const showCheckout = () => setIsShow(!isShow);

	useEffect(() => {
		setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
	}, [cart]);

	const notify = (e) => {
		e.preventDefault();
		return toast.error("Please login to effect payment");
	};

	const publicKey = "pk_test_16cd97ad2d4d6fd0c64365399dab591eb4721763";
	const [phone, setPhone] = useState("");

	const componentProps = {
		email: user ? user.user.email : "",
		amount: total * 100,
		metadata: {
			name: user ? user.user.firstname : "",
			phone: phone,
		},
		publicKey,
		text: "CHECKOUT",
		onSuccess: (reference) => handleSuccess(reference),
		onClose: () => handleClose,
	};
	console.log(componentProps);

	return (
		<>
			<div className="cart-wrapper">
				<div
					className="payNav__btn"
					onClick={showCheckout}
				>
					<PaymentOutlined />
				</div>
				<div className="container__one">
					<div className="s__name">
						<div className="cart__header-wrapper">
							<h1>SHOPPING CART</h1>
							<div className="cart__total">
								<h3> SUBTOTAL: ${total}</h3>
							</div>
						</div>
					</div>
					{cart.length === 0 ? (
						<h4 className="cart-items-empty">No item added to cart</h4>
					) : (
						<div className="cart__item__holder">
							{cart.map((item) => (
								<div className="first__cart" key={item.id}>
									<div className="cart__item__container">
										<div className="cart__image__container">
											<img src={item.image} alt={item.name} className="cart__image" />
										</div>
										<div className="cart__desc">
											<h1 className="cart__title">{item.name}</h1>
											<p>{item.name}</p>
										</div>
									</div>
									<div className="cart__item__control">
										<div className="cart__price">
											<h3>${item.price}</h3>
										</div>
										<div className="cart__quantity">
											<Quantity item={item} />
										</div>
										<div className="cart__quantity__second">
											<CloseIcon
												style={{
													margin: "1.65rem 0",
													fontSize: "2rem",
													fontWeight: "900",
												}}
												onClick={() =>
													dispatch({
														type: "REMOVE_FROM_CART",
														payload: item,
													})
												}
											/>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
				<div className={isShow ? "container__two alive" : "container__two"}>
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
									<PaystackConsumer {...componentProps}>
										{({ initializePayment }) => (
											<button
												className="checkout__button"
												onClick={() => initializePayment(handleSuccess, handleClose)}
											>
												CHECKOUT
											</button>
										)}
									</PaystackConsumer>
								) : (
									<button className="checkout__button" onClick={notify}>
										CHECKOUT
									</button>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
