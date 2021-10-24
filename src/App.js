import React from "react";
import "./App.css";
import MainFooter from "./components/footer/MainFooter";
import Footer from "./components/footer/Footer";
import PageSeven from "./components/pageSeven/PageSeven";
import Pagesix from "./components/pageSix/Pagesix";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Hero from "./components/Hero/Hero";
import Benefits from './components/Benefit/Benefits.jsx'
import Arrivals from "./components/Arrival/Arrivals.jsx";
import Categories from "./components/Category/Categories";
import Testimonial from "./testimonial/Testimonial";
import Trending from "./Trending/Trending";
import Product from './components/Product/Product';
import ShoppingCart from './components/Shopping/ShoppingCart';

const App = () => {
	return (
		<div className="body">
			<Header1 />
			<Header2 />
			<Hero />
			<Benefits />
			<Arrivals />
			<Categories />
			<Trending />
			<Testimonial />
			<Pagesix />
			<PageSeven />
			<Product /> 
			<ShoppingCart />
			<Footer />
			<MainFooter />
		</div>
	);
};

export default App;
