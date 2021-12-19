import React from "react";
import "./benefit.css";
import benefits from "./benefits";

const Benefit = ({ image, title, description }) => {
	return (
		<div className="benefits">
			{benefits.map((benefit, i) => (
				<div className="benefit" key={i} >
					<div className="benefit__head">
						{benefit.icon}
						<h3>{benefit.title}</h3>
					</div>
					<div className="benefit__body">
						<p>{benefit.details}</p>
					</div>
				</div>
			))}
		</div>
	);
};
export default Benefit;
