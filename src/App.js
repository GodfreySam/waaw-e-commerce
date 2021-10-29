import React from "react";
import "./App.css";
import MainFooter from "./components/footer/MainFooter";
import Footer from "./components/footer/Footer";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Hero from "./components/Hero/Hero";
import Benefits from './components/Benefit/Benefits.jsx'
import Arrivals from "./components/Arrival/Arrivals.jsx";
import Categories from "./components/Category/Categories.jsx";
import Routes from "./routes/Routes";
import data from "./database/data";
import newArrivals from "./database/newArrival";
import shopItems from "./database/shop";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
	const { topCategories, trendingProducts } = data;
	return (
		<div className="body">
			<Header1 />
			<Header2 />
			<Hero />
			<Benefits />
			<Arrivals />
			<Categories />
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
		</div>
	);
};

export default App;
