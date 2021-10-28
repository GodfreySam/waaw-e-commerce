import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, InputBase } from "@material-ui/core";
import { LocalMallOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Header2 = () => {
	return (
		<div>
			<Grid className="header2">
				<Grid className="header2__left" item sm={2} xs={2}>
					<h1>
						<Link to="/" className="logo">
							Frotoo
						</Link>
					</h1>
				</Grid>
				<Grid className="header2__middle" item sm={7} xs={10}>
					<ul className="header2__lists">
						<li className="header2__list">
							<Link to="/products" className="link-items">
								Menu
							</Link>
						</li>
						<li className="header2__list">
							<Link to="/" className="link-items">
								Pages
							</Link>
						</li>
						<li className="header2__list">
							<Link to="/products" className="link-items">
								Gallery
							</Link>
						</li>
						<li className="header2__list">
							<Link to="/" className="link-items">
								Blog
							</Link>
						</li>
						<li className="header2__list">
							<Link to="/products" className="link-items">
								Shop
							</Link>
						</li>
						<li className="header2__list">
							<Link to="/products" className="link-items">
								Elements
							</Link>
						</li>
					</ul>
				</Grid>
				<Grid className="header2__right" item sm={3}>
					<div className="header2__right--searchbox">
						<InputBase className="header2__right--input" placeholder="Search..." />
						<SearchIcon className="header2__right--search" />
					</div>

					<div className="header2__right--cart">
						<p>Cart Items</p>
						<Link to="/cart" className="link-items">
							<LocalMallOutlined className="header2__right--bag" />
						</Link>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Header2;
