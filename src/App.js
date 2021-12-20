import React, {useContext} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
import { AuthContext } from "./context/AuthContext";

const App = () => {
	const { user } = useContext(AuthContext);

	return (
		<CartContext>
			<div className="constrainWidth">
				<Router>
					<Header1 />
					<Header2 />
					<Switch>
						<Route exact path="/">
							{user ? <Redirect to="/home" /> : <Home />}
						</Route>
						<Route path="/home/:userId">
							<Home />
						</Route>
						<Route path="/cart">
							<Cart />
						</Route>
						<Route path="/products">
							<Products />
						</Route>
						<Route path="/product-details/:id">
							<Product />
						</Route>
						<Route path="/user/login">
							<Login />
						</Route>
						<Route path="/user/verify">
							<VerifyUser />
						</Route>
						<Route path="/user/register">
							<Register />
						</Route>
						<Route path="/user/reset">
							<ResetPassword />
						</Route>
						<Route path="/user/reset-password">
							<EffectResetPassword />
						</Route>
					</Switch>
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
