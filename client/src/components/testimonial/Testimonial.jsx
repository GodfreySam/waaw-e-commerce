import React from "react";
import Gallery from "./Gallery";
import "./style.css";

const Testimonial = () => {
	return (
		<div className="testimonial__container home">
			<div className="testimonial__content">
				<div className="testimonial__gallery">
					<div className="testimonial__title">Photo Gallery</div>
					<div className="testimonial__border"></div>
					<Gallery />
				</div>
				<div className="testimonial__testimony">
					<div className="testimony__container">
						<div className="testimonial__title">Our Testimonial</div>
						<div className="testimonial__border"></div>
						<div className="testimonial__description">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
							fugiat, iure molestiae saepe ipsum, amet, blanditiis laudantium
							consequuntur reiciendis corrupti illo quo error. Rerum nostrum natus
							deleniti harum possimus alias. Lorem ipsum dolor sit, amet consectetur
							adipisicing elit. Architecto fugiat, iure molestiae saepe ipsum, amet,
							blanditiis laudantium consequuntur reiciendis corrupti illo quo error.
							Rerum nostrum natus deleniti harum possimus alias.
						</div>
						<img
							src="https://res.cloudinary.com/freyman/image/upload/v1635417382/grp1-ecom/assets/circle_kdn34g.jpg"
							alt=""
							className="testimonial__img"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
