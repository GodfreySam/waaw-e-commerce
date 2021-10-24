import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import { LocalMallOutlined } from "@material-ui/icons";

const Header2 = () => {
	return (
		<div className="container">
			<div className="header2">
				<div className="header2__left">
					<h1>Frotoo</h1>
				</div>
				<div className="header2__middle">
					<ul className="header2__lists">
						<li className="header2__list">Menu</li>
						<li className="header2__list">Pages</li>
						<li className="header2__list">Gallery</li>
						<li className="header2__list">Blog</li>
						<li className="header2__list">Shop</li>
						<li className="header2__list">Elements</li>
					</ul>
				</div>
				<div className="header2__right">
					<div className="header2__right--searchbox">
						<InputBase className="header2__right--input" placeholder="Search..." />
						<SearchIcon className="header2__right--search" />
					</div>

					<div className="header2__right--cart">
						<p>Cart Items</p>
						<LocalMallOutlined className="header2__right--bag" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header2;
