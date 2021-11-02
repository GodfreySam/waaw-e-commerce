import React from "react";
import { useHistory } from "react-router-dom";
import "./category.css";
import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const Category = ({ topCategories }) => {
		let history = useHistory();

	return (
		<div className="categories home">
			<div className="categories__header">
				<h2>Top Categories</h2>
			</div>
			<div className="categories__body">
				<div className="categories__products">
					{topCategories.map((category) => (
						<div
							className="category"
							key={category.id}
							onClick={() => history.push(`/product-details/${category.id}`)}
						>
							<div className="category__top">
								<img src={category.image} alt={category.name} />
							</div>
							<div className="category__bottom">
								<p>{category.name}</p>
								<div className="category__bottom--prices">
									<p className="price newPrice">${category.price}</p>
									<p className="price oldPrice">${category.oldPrice}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="category__pagination">
					<IconButton className="button">
						<ArrowBackIosOutlined className="arrow" />
					</IconButton>
					<div className="arrow-separate"></div>
					<IconButton className="button">
						<ArrowForwardIosOutlined className="arrow" />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default Category;
