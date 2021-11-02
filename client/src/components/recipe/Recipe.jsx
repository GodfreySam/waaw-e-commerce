import React from "react";
import "./Recipe.css";

const Recipe = () => {
	return (
		<div>
			<div className="recipe__container home">
				<div className="recipe__content">
					<div className="recipe__card">
						<div>
							<div className="recipe__description1">
								<h5 className="recipe__title">Pineapple Juice</h5>
								<p className="recipe__note">
									100% Locally grown GMO-Free organic juice
								</p>
							</div>
							<img
								src="https://res.cloudinary.com/freyman/image/upload/v1635417382/grp1-ecom/assets/pineapple_gxsniu.jpg"
								alt=""
								className="recipe__image1"
							/>
						</div>
						<div>
							<div className="recipe__description">
								<h5 className="recipe__title">Strawberries Juice</h5>
								<p className="recipe__note">
									100% Locally grown GMO-Free organic juice
								</p>
							</div>
							<img
								src="https://res.cloudinary.com/freyman/image/upload/v1635417383/grp1-ecom/assets/strawberry_xo96j5.jpg"
								alt=""
								className="recipe__image2"
							/>
						</div>
						<div>
							<div className="recipe__description3">
								<h5 className="recipe__title">Mint Juice</h5>
								<p className="recipe__note">
									100% Locally grown GMO-Free organic juice
								</p>
							</div>
							<img
								src="https://res.cloudinary.com/freyman/image/upload/v1635417383/grp1-ecom/assets/green_vsqmpw.jpg"
								alt=""
								className="recipe__image3"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
