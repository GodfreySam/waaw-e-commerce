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

const Home = (props) => {
	return (
		<div className="home">
			<Hero />
			<Benefits />
			<Arrival newArrivals={props.newArrivals} />
			<Category topCategories={props.topCategories} />
			<Recipe />
			<Trending trendingProducts={props.trendingProducts} />
			<Testimonial />
			<Pagesix />
			<PageSeven />
		</div>
	);
};

export default Home;
