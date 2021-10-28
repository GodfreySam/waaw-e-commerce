import React from "react";
import "./pageSix.css";
import { useHistory } from "react-router-dom";

const Pagesix = () => {
	let history = useHistory();
	
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
								onClick={() =>
									history.push(
										"https://itunes.apple.com/us/app/sutiawbapp/id1166499?ls=1&mt=8",
									)
								}
							/>
						</span>
						<span>
							<img
								src="https://res.cloudinary.com/freyman/image/upload/v1635417549/grp1-ecom/images/google-store_r3mt4l.png"
								alt="google play store"
								onClick={() =>
									history.push(
										"https://play.google.com/store/apps?&utm_source=emea_Med&utm_medium=hasem&utm_content=May2021&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-ng-1001280-Med-hasem-py-Evergreen-May2021-Text_Search_BKWS%7CONSEM_kwid_43700063190430199&gclid=Cj0KCQjwlOmLBhCHARIsAGiJg7kCHJ4Ok0LL-796HkKT1gvrIILSDW9OV7wZ_JJYJ5TQ4_iaqRsfBPMaAt9mEALw_wcB&gclsrc=aw.ds",
									)
								}
							/>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pagesix;
