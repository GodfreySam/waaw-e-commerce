import React from "react";
import "./hero.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
	return (
		<div className="hero__container">
			<div className="hero__info">
				<h1 className="hero__title">Fresh Fruits Juice</h1>
				<p className="hero__desc">
					Our Organic juice contain all necessary elements and vitamins for health
				</p>
				<button
					className="hero__button"
					onClick={() => (window.location.href = "#shop__items")}
				>
					SHOP NOW
				</button>
			</div>
			<div className="hero__img--container">
				<Carousel showArrows={false} autoPlay={true} interval={5000} infiniteLoop={true} showThumbs={false} showIndicators={false}>
					<div className="slider__image__holder">
						<img
							className="hero__img"
							src="https://res.cloudinary.com/freyman/image/upload/v1639256833/grp1-ecom/images/hero-fore_naesfh.png"
							alt="slider image1"
						/>
					</div>
					<div className="slider__image__holder">
						<img
							className="hero__img"
							src="https://res.cloudinary.com/freyman/image/upload/v1640196339/grp1-ecom/images/hero-fore1_fdrzyw.jpg"
							alt="slider image2"
						/>
					</div>
					<div className="slider__image__holder">
						<img
							className="hero__img"
							src="https://res.cloudinary.com/freyman/image/upload/v1640198044/grp1-ecom/images/hero-fore2_walapj.png"
							alt="slider image3"
						/>
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default Hero;
