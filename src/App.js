import React from "react";
import "./App.css";
import MainFooter from "./components/footer/MainFooter";
import Footer from "./components/footer/Footer";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Routes from "../src/routes/Routes";
import data from "./components/assets/database/data";
import shopItems from "./components/assets/database/shop";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
	const { newArrivals, topCategories, trendingProducts } = data;
	return (
		<>
			<Router>
				<Header1 />
				<Header2 />
				<Routes
					newArrivals={newArrivals}
					topCategories={topCategories}
					trendingProducts={trendingProducts}
					shopItems={shopItems}
				/>
			</Router>
			<Footer />
			<MainFooter />
		</>
	);
};

export default App;
