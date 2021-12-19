import React from "react";
import "./slider.css";

const Slider = () => {

	return (
		<div className="slide__container">
			<div className="slide__wrapper">
				<div className="slide">
					<div className="slide__info">
						<h1 className="slide__title">Fresh Fruits Juice</h1>
						<p className="slide__desc">
							Our Organic juice contain all necessary elements and vitamins for health
						</p>
						<button className="slide__button">SHOP NOW</button>
					</div>
					<div className="slide__img--container">
						<img
							className="slide__img"
							src="https://res.cloudinary.com/freyman/image/upload/v1639140855/grp1-ecom/images/hero-fore_qnedej.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
