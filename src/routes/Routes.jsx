import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import ShoppingCart from "../components/Shopping/ShoppingCart";
import SingleProduct from "../components/singleProduct/SingleProduct";
import Products from "../components/product/Products";
import shopItems from "../database/shop";


const Routes = ({
	newArrivals,
	topCategories,
	trendingProducts,
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
					<ShoppingCart />
				</Route>
				<Route path="/products" exact>
					<Products shopItems={shopItems} />
				</Route>
				<Route path="/product-details/:id" exact>
					<SingleProduct />
				</Route>
			</Switch>
		</>
	);
};

export default Routes;
