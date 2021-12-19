import React from "react";
import "./Recipe.css";

const Recipe = () => {
	return (
		<div>
			<div className="recipe__container home">
				<div className="recipe__content">
					<div className="recipe__cards">
						<div className="recipe__card">
							<img
								src="https://res.cloudinary.com/freyman/image/upload/v1635417382/grp1-ecom/assets/pineapple_gxsniu.jpg"
								alt=""
								className="recipe__image1 recipe__image"
							/>
							<div className="recipe__description1 recipe__description">
								<h5 className="recipe__title">Pineapple Juice</h5>
								<p className="recipe__note">
									100% Locally grown GMO-Free organic juice
								</p>
							</div>
						</div>
						<div className="recipe__card">
							<img
								src="https://res.cloudinary.com/freyman/image/upload/v1635417383/grp1-ecom/assets/strawberry_xo96j5.jpg"
								alt=""
								className="recipe__image2 recipe__image"
							/>
							<div className="recipe__description2 recipe__description">
								<h5 className="recipe__title">Strawberries Juice</h5>
								<p className="recipe__note">
									100% Locally grown GMO-Free organic juice
								</p>
							</div>
						</div>
						<div className="recipe__card">
							<img
								src="https://res.cloudinary.com/freyman/image/upload/v1635417383/grp1-ecom/assets/green_vsqmpw.jpg"
								alt=""
								className="recipe__image3 recipe__image"
							/>
							<div className="recipe__description3 recipe__description">
								<h5 className="recipe__title">Mint Juice</h5>
								<p className="recipe__note">
									100% Locally grown GMO-Free organic juice
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
