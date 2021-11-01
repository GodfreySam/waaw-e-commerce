import React from "react";
import Hero from "./Hero/Hero";
import Benefits from "./Benefit/Benefits.jsx";
import Recipe from "./recipe/Recipe";
import Arrival from "./Arrival/Arrival.jsx";
import Category from "./Category/Category.jsx";
import Testimonial from "./testimonial/Testimonial";
import Trending from "./Trending/Trending";
import PageSeven from "./pageSeven/PageSeven";
import Pagesix from "./pageSix/Pagesix";
import Header1 from "./Header/Header1";
import Header2 from "./Header/Header2";
import MainFooter from "./footer/MainFooter";
import Footer from "./footer/Footer";

const Home = ({
	newArrivals,
	topCategories,
	trendingProducts,
	cartItems,
	handleAddProduct,
	handleRemoveProduct,
	handleCartClearance,
}) => {
	return (
		<div className="home">
			<Header1 />
			<Header2 cartItems={cartItems} />
			<Hero />
			<Benefits />
			<Arrival newArrivals={newArrivals} />
			<Category topCategories={topCategories} />
			<Recipe />
			<Trending trendingProducts={trendingProducts} />
			<Testimonial />
			<Pagesix />
			<PageSeven />
			<Footer />
			<MainFooter />
		</div>
	);
};

export default Home;
