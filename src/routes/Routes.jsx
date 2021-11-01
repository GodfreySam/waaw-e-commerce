import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import ShoppingCart from "../components/Shopping/ShoppingCart";
import SingleProduct from "../components/singleProduct/SingleProduct";
import Products from "../components/product/Products";
import shopItems from "../database/shop";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import VerifyUser from "../components/auth/VerifyUser";

const Routes = ({
	newArrivals,
	topCategories,
	trendingProducts,
	cartItems,
	handleAddProduct,
	handleRemoveProduct,
	handleCartClearance,
}) => {
	return (
		<>
			<Switch>
				<Route path="/" exact>
					<Home
						newArrivals={newArrivals}
						topCategories={topCategories}
						trendingProducts={trendingProducts}
					/>
				</Route>
				<Route path="/cart" exact>
					<ShoppingCart
						cartItems={cartItems}
						handleAddProduct={handleAddProduct}
						handleRemoveProduct={handleRemoveProduct}
						handleCartClearance={handleCartClearance}
					/>
				</Route>
				<Route path="/products" exact>
					<Products shopItems={shopItems} handleAddProduct={handleAddProduct} />
				</Route>
				<Route path="/product-details/:id" exact>
					<SingleProduct handleAddProduct={handleAddProduct} />
				</Route>
				<Route path="/login" exact>
					<Login />
				</Route>
				<Route path="/register" exact>
					<Register />
				</Route>
				<Route path="/confirm-user" exact>
					<VerifyUser />
				</Route>

			</Switch>
		</>
	);
};

export default Routes;
