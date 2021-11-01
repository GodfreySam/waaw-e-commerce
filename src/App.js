import React, { useState } from "react";
import "./App.css";
import MainFooter from "./components/footer/MainFooter";
import Footer from "./components/footer/Footer";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Routes from "./routes/Routes";
import data from "./database/data";
import newArrivals from "./database/newArrival";
import shopItems from "./database/shop";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
	const { topCategories, trendingProducts } = data;
	const [cartItems, setCartItems] = useState([]);

	const handleAddProduct = (product) => {
		const productExist = cartItems.find((item) => item.id === product.id);
		if (productExist) {
			setCartItems(
				cartItems.map((item) =>
					item.id === product.id
						? { ...productExist, quantity: productExist.quantity + 1 }
						: item,
				),
			);
		} else {
			setCartItems([...cartItems, { ...product, quantity: 1 }]);
		}
	};

	const handleRemoveProduct = (product) => {
		const productExist = cartItems.find((item) => item.id === product.id);
		if (productExist.quantity === 1) {
			setCartItems(cartItems.filter((item) => item.id !== product.id));
		} else {
			setCartItems(
				cartItems.map((item) =>
					item.id === product.id
						? { ...productExist, quantity: productExist.quantity - 1 }
						: item,
				),
			);
		}
	};

	const handleCartClearance = () => {
		setCartItems([]);
	};

	return (
		<>
			<Router>
				<Header1 />
				<Header2 cartItems={cartItems} />
				<Routes
					newArrivals={newArrivals}
					topCategories={topCategories}
					trendingProducts={trendingProducts}
					shopItems={shopItems}
					cartItems={cartItems}
					handleAddProduct={handleAddProduct}
					handleRemoveProduct={handleRemoveProduct}
					handleCartClearance={handleCartClearance}
				/>
			</Router>
			<Footer />
			<MainFooter />
		</>
	);
};

export default App;
