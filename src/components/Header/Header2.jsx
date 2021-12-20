import React, { useContext } from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, InputBase } from "@material-ui/core";
import { LocalMallOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { AuthContext } from "../../context/AuthContext";
import Header1 from "./Header1";
import { CartState } from "../../context/CartContext";

const Header2 = ({ cartItems }) => {
	const { user } = useContext(AuthContext);
	const {
		state: { cart }
	} = CartState();

	const logout = () => {
		localStorage.removeItem("user");
		window.location.href = "/";
	};

	return (
		<div className="container constrainWidth" id="header2">
			<Header1 />
			<Grid className="header2">
				<Grid className="header2__left">
					<Link to="/" className="logo">
						Frotoo
					</Link>
				</Grid>
				<Grid className="header2__middle" item sm={12} xs={8}>
					<Grid className="header2__lists">
						<Grid className="header2__list" item sm={2} xs={2}>
							<Link to="/" className="link-items">
								Home
							</Link>
						</Grid>
						<Grid className="header2__list" item sm={2} xs={2}>
							<Link to="/about" className="link-items">
								About
							</Link>
						</Grid>
						<Grid className="header2__list" item sm={2} xs={2}>
							<Link to="/user/register" className="link-items">
								Signup
							</Link>
						</Grid>
						<Grid className="header2__list" item sm={2} xs={2}>
							{user ? (
								<>
									<Link onClick={logout} className="link-items">
										Logout
									</Link>
								</>
							) : (
								<>
									<Link to="/user/login" className="link-items">
										Login
									</Link>
								</>
							)}
						</Grid>
						<Grid>
							<Grid className="header2__right--searchbox" item sm={12}>
								<InputBase
									className="header2__right--input"
									// onChange={(e) =>
									// 	productDispatch({
									// 		type: "FILTER_BY_SEARCH",
									// 		payload: e.target.value,
									// 	})
									// }
									placeholder="Search..."
								/>
								<SearchIcon className="header2__right--search" />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid className="header2__right">
					<Grid className="header2__right--cart">
						<p>Cart Items</p>
						<Link to="/cart" className="link-items cart__info">
							<LocalMallOutlined className="header2__right--bag" />
							<span className="cart-length">{cart.length}</span>
						</Link>
					</Grid>
				</Grid>
				<Sidebar />
			</Grid>
		</div>
	);
};

export default Header2;
