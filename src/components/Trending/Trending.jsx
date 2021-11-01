import React from "react";
import { useHistory } from "react-router-dom";
import "./Trending.css";
import { makeStyles, Tab, Typography, Tabs } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

const Trending = ({ trendingProducts }) => {
	const classes = useStyles();
	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

		let history = useHistory();
	
	return (
		<div className="home">
			<p className="trending__title">Trending Products</p>
			<div className={classes.root}>
				<TabContext value={value}>
					<Tabs
						value={value}
						indicatorColor="white"
						textColor="secondary"
						onChange={handleChange}
						aria-label="disabled tabs example"
						centered
					>
						<Tab label="Featured" value="1" />
						<Tab label="Latest" value="2" />
						<Tab label="Bestseller" value="3" />
						<Tab label="Special" value="4" />
					</Tabs>
					<TabPanel></TabPanel>
					<div className="products__container">
						{trendingProducts.map((trend) => (
							<div
								className="products__single"
								key={trend.id}
								onClick={() => history.push(`/product-details/${trend.id}`)}
							>
								<div className="products__top">
									<img src={trend.image} alt={trend.name} className="products__image" />
								</div>
								<div className="products__bottom">
									<p className="products__name">{trend.name}</p>
									<div className="products__pricing">
										<p className="products__price">${trend.oldPrice}</p>
										<p className="products__discount">
											<s>${trend.price}</s>
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</TabContext>
				<Typography />
			</div>
		</div>
	);
};

export default Trending;
