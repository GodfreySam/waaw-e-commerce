import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import PageSeven from "./components/pageSeven/PageSeven";
import Pagesix from "./components/pageSix/Pagesix";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Hero from "./components/Hero/Hero";
import Testimonial from "./testimonial/Testimonial";
import Trending from "./Trending/Trending";

const App = () => {
	return (
		<>
			<Header1 />
			<Header2 />
			<Hero />
			<Trending />
			<Testimonial />
			<Pagesix />
			<PageSeven />
			<Footer />
		</>
	);
};
export default App;
