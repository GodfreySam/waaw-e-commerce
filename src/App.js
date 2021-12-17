import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header2 from "./components/Header/Header2";
import Header1 from "./components/Header/Header1";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import EffectResetPassword from "./pages/auth/EffectResetPassword";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import VerifyUser from "./pages/auth/VerifyUser";
import Footer from "./components/footer/Footer";
import MainFooter from "./components/footer/MainFooter";
import CartContext from "./context/CartContext";


const App = () => {
	return (
		<CartContext>
			<div className="constrainWidth">
				<Router>
					<Header1 />
					<Header2 />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/cart" element={<Cart />} />
						<Route path="/products" element={<Products />}></Route>
						<Route path="/product-details/:id" element={<Product />}></Route>
						<Route path="/user/login" element={<Login />}></Route>
						<Route path="/user/verify" element={<VerifyUser />}></Route>
						<Route path="/user/register" element={<Register />}></Route>
						<Route path="/user/reset" element={<ResetPassword />}></Route>
						<Route
							path="/user/reset-password"
							element={<EffectResetPassword />}
						></Route>
					</Routes>
					<Footer />
					<MainFooter />
				</Router>
				<Toaster
					position="top-right"
					toastOptions={{
						className: "",
						duration: 10000,
						style: {
							color: "#fff",
						},
						success: {
							style: {
								background: "green",
							},
						},
						error: {
							style: {
								background: "red",
							},
						},
					}}
				/>
			</div>
		</CartContext>
	);
};

export default App;
