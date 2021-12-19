import React from "react";
import "./Trending.css";
import { makeStyles, Tab, Typography, Tabs } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import { InfoOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import toast from "react-hot-toast";
import { CartState } from "../../context/CartContext";
// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

const Trending = () => {
	const {
		state: { cart },
		state: { products },
		dispatch,
	} = CartState();

	const notify = (e) => {
		e.preventDefault();
		return toast.success("Item already in cart");
	};
	
	const classes = useStyles();
	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="trending" id="shop__items">
			<p className="trending__title">Trending Products</p>
			<div className={classes.root}>
				<TabContext value={value}>
					<Tabs
						value={value}
						indicatorColor="white"
						textColor="secondary"
						onChange={handleChange}
						aria-label="disabled tabs example"
						centered
						className="header__tabs"
					>
						<Tab label="Featured" value="1" />
						<Tab label="Latest" value="2" />
						<Tab label="Bestseller" value="3" />
						<Tab label="Special" value="4" />
					</Tabs>
					<TabPanel className="header__tabs"></TabPanel>
					<div className="products__container">
						{products.trendingProducts.map((product) => (
							<div className="products__single product__container" key={product.id}>
								<div className="products__top">
									<img
										src={product.image}
										alt={product.name}
										className="products__image"
									/>
								</div>
								<div className="products__bottom">
									<p className="products__name">{product.name}</p>
									<div className="products__pricing">
										<p className="products__price">${product.oldPrice}</p>
										<p className="products__discount">
											<s>${product.price}</s>
										</p>
									</div>
								</div>
								<div className="product__cta">
									{cart.some((item) => item.id === product.id) ? (
										<div className="icon__wrapper" onClick={notify}>
											<ShoppingCartOutlined />
										</div>
									) : (
										<div
											className="icon__wrapper"
											onClick={() => {
												dispatch({
													type: "ADD_TO_CART",
													payload: product,
												});
											}}
										>
											<ShoppingCartOutlined />
										</div>
									)}
									<div
										className="icon__wrapper"
										onClick={() =>
											(window.location.href = `/product-details/${product.id}`)
										}
									>
										<InfoOutlined />
									</div>
								</div>
							</div>
						))}
					</div>
				</TabContext>
				<Typography />
			</div>
		</div>
	);
};

export default Trending;
