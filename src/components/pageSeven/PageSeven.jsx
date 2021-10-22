import React from "react";
import "./pageSeven.css";
import Asset3 from "../../images/asset3.png";
import Asset4 from "../../images/asset4.png";
import Asset5 from "../../images/asset5.png";
import Asset6 from "../../images/asset6.png";
import Asset7 from "../../images/asset7.png";
import Asset8 from "../../images/asset8.png";
import Asset9 from "../../images/asset9.png";
import Asset10 from "../../images/asset10.png";

const PageSeven = () => {
	return (
		<div className="pageSeven">
			<h3 className="pageSeven__header">From Our Blogs</h3>
			<div className="pageSeven__first-item">
				<div className="pageSeven__first-item__content">
					<div className="first-item__content-img">
						<img src={Asset3} alt="" />
					</div>
					<div className="first-item__content-date">On JUNE 16, 2021</div>
					<div className="first-item__content-heading">Get Ready with Rebecca</div>
					<div className="first-item__content-body">
						Get nourished with the best of citrus blend specially mixed by Rebecca
						with your wellbeing in every sip. Also for your outdoor summer party citrus
						goodness in all ways.
					</div>
				</div>
				<div className="pageSeven__first-item__content">
					<div className="first-item__content-img">
						<img src={Asset4} alt="" />
					</div>
					<div className="first-item__content-date">On JUNE 16, 2021</div>
					<div className="first-item__content-heading">
						The lifestyle of young girl
					</div>
					<div className="first-item__content-body">
						The tropicana feel good feeling for the girly girl with tropical fruits
						freshly squeezed just for your at that time and spot when you need it to
						feel just like in the beautiful tropics.
					</div>
				</div>
				<div className="pageSeven__first-item__content">
					<div className="first-item__content-img">
						<img src={Asset5} alt="" />
					</div>
					<div className="first-item__content-date">On JUNE 16, 2021</div>
					<div className="first-item__content-heading">
						Make your weekend delicious
					</div>
					<div className="first-item__content-body">
						Unwind and party like for every weekend, feel and taste the goodness with
						every sip and be vitalized. Clear the mind, energize the body, feel it,
						tatse it.
					</div>
				</div>
			</div>
			<div className="pageSeven__second-item">
				<div className="second-item__content-img">
					<img src={Asset6} alt="" />
				</div>
				<div className="second-item__content-img">
					<img src={Asset7} alt="" />
				</div>
				<div className="second-item__content-img">
					<img src={Asset8} alt="" />
				</div>
				<div className="second-item__content-img">
					<img src={Asset9} alt="" />
				</div>
				<div className="second-item__content-img">
					<img src={Asset10} alt="" />
				</div>
			</div>
		</div>
	);
};

export default PageSeven;
