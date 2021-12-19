import React, { useEffect, useRef, useState } from "react";
import "./slider.css";
import { slideData } from "./slideData";

const colors = ["#fab9bd", "#fab9bd", "#fab9bd"];
const delay = 5000;

const Slider = () => {
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === slideData.length - 1 ? 0 : prevIndex + 1,
				),
			delay,
		);
		return () => resetTimeout();
	}, [index]);

	return (
		<div className="slider__container">
			<div
				className="slider__wrapper"
				style={{
					transform: `translateX(${index * -100}vw)`,
				}}
			>
				{slideData.map((item) => (
					<div className="slide" key={item.id}>
						<div className="slide__info">
							<h1 className="slide__title">{item.title}</h1>
							<p className="slide__desc">{item.desc}</p>
							<button className="slide__button">SHOP NOW</button>
						</div>
						<div className="slide__img--container">
							<img className="slide__img" src={item.img} alt="" />
						</div>
					</div>
				))}
				<div className="slider__pagination">
					{colors.map((_, idx) => (
						<div
							key={idx}
							className={`pagination${index === idx ? "active" : ""}`}
							onClick={() => setIndex(idx)}
						></div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Slider;
