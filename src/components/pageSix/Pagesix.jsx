import React from "react";
import "./pageSix.css";

const Pagesix = () => {
	return (
		<div className="pageSix">
			<div className="pageSix-content">
				<div className="pageSix-content__left">
					<img
						src="https://res.cloudinary.com/freyman/image/upload/v1635417547/grp1-ecom/images/asset1_adcckf.png"
						alt="palm plant"
					/>
				</div>
				<div className="pageSix-content__right">
					<div className="pageSix-content__right-header">Get Our Recipes Now!</div>
					<p>Fruits are an excellent source of vitamins and minerals</p>
					<form action="">
						<input type="email" name="email" placeholder="Email" />
						<button type="submit">Subscribe</button>
					</form>

					<div className="pageSix-content__app-market">
						<span>
							<img
								src="https://res.cloudinary.com/freyman/image/upload/v1635417545/grp1-ecom/images/apple-store_gawirt.png"
								alt="ios store"
							/>
						</span>
						<span>
							<img
								src="https://res.cloudinary.com/freyman/image/upload/v1635417549/grp1-ecom/images/google-store_r3mt4l.png"
								alt="google play store"
							/>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pagesix;
