import React from "react";
import "./newsletter.css";

const Newsletter = () => {

	return (
		<div className="newsletter home">
			<div className="newsletter-content">
				<div className="newsletter-content__left">
					<img
						className="newsletter-content__left-image"
						src="https://res.cloudinary.com/freyman/image/upload/v1635417547/grp1-ecom/images/asset1_adcckf.png"
						alt="palm plant"
					/>
				</div>
				<div className="newsletter-content__right">
					<div className="newsletter-content__right-header">Get Our Recipes Now!</div>
					<p className="newsletter-content__right-p">
						Fruits are an excellent source of vitamins and minerals
					</p>
					<form className="newsletter-content__right-form" action="">
						<input type="email" name="email" placeholder="Email" />
						<button type="submit">Subscribe</button>
					</form>

					<div className="newsletter-content__app-market">
						<button
							onClick={
								()=>(window.location.href = "https://itunes.apple.com/")
							}
							className="newsletter-content__app-market-button"
						>
							<img
								className="newsletter-content__app-market-button"
								src="https://res.cloudinary.com/freyman/image/upload/v1635417545/grp1-ecom/images/apple-store_gawirt.png"
								alt="ios store"
							/>
						</button>
						<button
<<<<<<< HEAD:client/src/components/pageSix/Pagesix.jsx
							className="pageSix-content__app-market-button"
=======
							onClick={()=>(window.location.href = "https://play.google.com/store/apps/")}
							className="newsletter-content__app-market-button"
>>>>>>> 918f0c0896fb2bcabbbb530b97ed3f58eae743d6:src/components/newsletter/Newsletter.jsx
						>
							<img
								className="newsletter-content__app-market-button"
								src="https://res.cloudinary.com/freyman/image/upload/v1635417549/grp1-ecom/images/google-store_r3mt4l.png"
								alt="google play store"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
