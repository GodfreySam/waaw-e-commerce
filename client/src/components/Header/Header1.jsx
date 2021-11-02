import React,{useContext} from "react";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import { AuthContext } from "../../context/AuthContext";

const Header1 = () => {
	const { user } = useContext(AuthContext);
    
	return (
		<div className="header1 home">
			<div className="header1__left">
				{user ? (
					<p>Welcome <b>{user.user.firstname}</b></p>
				) : (
					<p>Welcome to our online store!</p>
				)}
			</div>

			<div className="header1__right">
				<div className="header1__right--searchbox">
					<PhoneInTalkOutlinedIcon className="header1__right--icon" />
					<p>+1-801-524--45411</p>
				</div>

				<div className="header1__right--cart">
					<WatchLaterOutlinedIcon className="header1__right--icon" />
					<p>Mon-Sat 8:00am-18:00 Sunday CLOSED</p>
				</div>
			</div>
		</div>
	);
};

export default Header1;
