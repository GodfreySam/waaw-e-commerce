import React from "react";

const Gallery = () => {
	return (
		<div className="gallery__container">
			<div className="gallery__heading">
				<div className="testimonial__title">Photo Gallery</div>
				<div className="testimonial__border"></div>
			</div>
			<div className="gallery__card">
				<img
					src="https://res.cloudinary.com/freyman/image/upload/v1635417381/grp1-ecom/assets/hand1_do1xup.jpg"
					alt=""
					className="gallery__image"
				/>
				<img
					src="https://res.cloudinary.com/freyman/image/upload/v1635417381/grp1-ecom/assets/hand_pyvh8m.jpg"
					alt=""
					className="gallery__image"
				/>
				<img
					src="https://res.cloudinary.com/freyman/image/upload/v1635417382/grp1-ecom/assets/p7_a2sfrs.jpg"
					alt=""
					className="gallery__image"
				/>
				<img
					src="https://res.cloudinary.com/freyman/image/upload/v1635417382/grp1-ecom/assets/p8_ahfhpx.jpg"
					alt=""
					className="gallery__image"
				/>
				<img
					src="https://res.cloudinary.com/freyman/image/upload/v1635417383/grp1-ecom/assets/two_fjfahx.jpg"
					alt=""
					className="gallery__image"
				/>
				<img
					src="https://res.cloudinary.com/freyman/image/upload/v1635417381/grp1-ecom/assets/man_aq11tq.jpg"
					alt=""
					className="gallery__image"
				/>
			</div>
		</div>
	);
};

export default Gallery;
