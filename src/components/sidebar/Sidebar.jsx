import React, { useState, useContext } from "react";
import "./sidebar.css";
import { AuthContext } from "../../context/AuthContext";
import { LocalMallOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { CartState } from "../../context/CartContext";

const Sidebar = () => {
	const { user } = useContext(AuthContext);
	const {
		state: { cart },
	} = CartState();
	const logout = () => {
		localStorage.removeItem("user");
		window.location.href = "/";
	};

	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div className="navbar">
				<span className="menu__bars">
					<span
						className={sidebar ? "menu-btn close" : "menu-btn"}
						onClick={showSidebar}
					>
						<div className="btn-line"></div>
						<div className="btn-line"></div>
						<div className="btn-line"></div>
					</span>
				</span>
			</div>
			<nav className={sidebar ? "nav__menu active" : "nav__menu"}>
				<div>
					<div className="sidebar__user_info">
						{user ? (
							<p>
								Welcome <b>{user.user.firstname}</b>
							</p>
						) : (
							<p>Welcome to our online store!</p>
						)}
					</div>
					<div className="navbar__cart">
						<Link to="/cart" className="item__bag">
							<LocalMallOutlined className="navbar__bag" />
							<span className="cart-length">{cart.length}</span>
						</Link>
					</div>
				</div>
				<ul className="nav__menu__items" onClick={showSidebar}>
					<li className="nav__text">
						<Link to="/" className="nav__text">
							Home
						</Link>
					</li>
					<li className="nav__text">
						<Link to="/about" className="nav__text">
							About
						</Link>
					</li>
					<li className="nav__text">
						<Link to="/register" className="nav__text">
							Signup
						</Link>
					</li>
					<li className="nav__text">
						{user ? (
							<>
								<Link onClick={logout} className="link-items">
									Logout
								</Link>
							</>
						) : (
							<>
								<Link to="/user/login" className="link-items">
									Signin
								</Link>
							</>
						)}
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Sidebar;
