import React from 'react'
import Slider from "react-slick";
import project1 from "../../img/p1.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "cadetblue" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "cadetblue" }}
      onClick={onClick}
    />
  );
}
const Project = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      //   nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      // autoplay: true,
      // autoplaySpeed: 2000,
      // adaptiveHeight: true,
      cssEase: "linear"
      };
    return (
        <div className="section-container ">
            <h2 className="text-center">My Projects</h2>
            <Slider className="project" {...settings}>
                <div>
                    <img src={project1} alt="" className="project__img" />
                </div>
                <div>
                    <img src={project1} alt="" className="project__img" /> 
                </div>
            </Slider>
        </div>
    )
}

export default Project