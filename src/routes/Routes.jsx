import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import ShoppingCart from "../components/Shopping/ShoppingCart";
import SingleProduct from "../components/singleProduct/SingleProduct";
import Products from "../components/product/Products";
import shopItems from "../database/shop";
import Login from "../components/auth/Login"
import Register from "../components/auth/Register";
import VerifyUser from "../components/auth/VerifyUser";
import ResetPassword from "../components/auth/ResetPassword";
import EffectResetPassword from "../components/auth/EffectResetPassword";

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
						cartItems={cartItems}
						shopItems={shopItems}
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
					<Products
						shopItems={shopItems}
						cartItems={cartItems}
						handleAddProduct={handleAddProduct}
						handleRemoveProduct={handleRemoveProduct}
						handleCartClearance={handleCartClearance}
					/>
				</Route>
				<Route path="/product-details/:id" exact>
					<SingleProduct
						cartItems={cartItems}
						shopItems={shopItems}
						handleAddProduct={handleAddProduct}
						handleRemoveProduct={handleRemoveProduct}
						handleCartClearance={handleCartClearance}
					/>
				</Route>
				<Route path="/user/login" exact component={Login}></Route>
				<Route path="/user/verify" exact component={VerifyUser}></Route>
				<Route path="/user/register" exact component={Register}></Route>
				<Route path="/user/reset" exact component={ResetPassword}></Route>
				<Route path="/user/reset-password" exact component={EffectResetPassword}></Route>
			</Switch>
		</>
	);
};

export default Routes;
