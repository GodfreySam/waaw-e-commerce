import React from "react";
import Hero from "../../components/Hero/Hero";
import Benefit from "../../components/Benefit/Benefit";
import Recipe from "../../components/recipe/Recipe";
import Arrival from "../../components/Arrival/Arrival";
import Category from "../../components/Category/Category";
import Testimonial from "../../components/testimonial/Testimonial";
import Trending from "../../components/Trending/Trending";
import PageSeven from "../../components/blog/Blog";
import Pagesix from "../../components/newsletter/Newsletter";
import "./home.css"

const Home = () => {
	return (
		<div id="home__container">
			<Hero />
			<Benefit />
			<Arrival />
			<Category />
			<Recipe />
			<Trending />
			<Testimonial />
			<Pagesix />
			<PageSeven />
		</div>
	);
};

export default Home;
