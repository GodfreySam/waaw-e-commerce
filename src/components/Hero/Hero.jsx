import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 1,
}

const Hero = () => {
  const p1 =
    "https://res.cloudinary.com/freyman/image/upload/v1635417552/grp1-ecom/images/hero_ytxosf.jpg";
  const p2 =
    "https://res.cloudinary.com/weena/image/upload/v1635766676/cea85f86b13c707f74284737577dc8d8_pztldb.jpg";

  return (
    <div className="hero_section">
      <Slider {...settings} className="project">
        <div className="project__slider">
          <img src={p1} alt="" className="project__img"/>
        </div>
        <div className="project__slider">
          <img src={p2} alt="" className="project__img"/>
        </div>
      </Slider>
      <div className="hero_section--content">
				<h1 className="hero_section--title">Fresh Fruits Juice</h1>
				<p className="hero_section--text">
					Our Organic juice contain all necessary elements and vitamins for health
				</p>
				<input
					type="button"
					value="SHOP NOW"
					className="hero_section--button"
					onClick={() => (window.location.href = "#shop__items")}
				/>
			</div>
    </div>
  );
};

export default Hero;