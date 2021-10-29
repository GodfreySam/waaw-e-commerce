import React from "react";
import Asset11 from "../../images/asset11.png";
import Asset12 from "../../images/asset12.png";
import Asset13 from "../../images/asset13.png";
import Asset14 from "../../images/asset14.png";
import Asset15 from "../../images/asset15.png";
import Asset16 from "../../images/asset16.png";
import Visa from "../../images/visa.png"
import Mastercard from "../../images/master-card.png"
import Unionpay from "../../images/union-pay.png"
import Discover from "../../images/discover.png"
import Giro from "../../images/giro-pay.png"
import Amex from "../../images/amex.png";

import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as GrIcons from "react-icons/gr";




import './footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__first-item">
				<div className="footer__first-item_img">
					<img src={Asset11} alt="" srcset="" />
				</div>
				<div className="footer__first-item_img">
					<img src={Asset12} alt="" srcset="" />
				</div>
				<div className="footer__first-item_img">
					<img src={Asset13} alt="" srcset="" />
				</div>
				<div className="footer__first-item_img">
					<img src={Asset14} alt="" srcset="" />
				</div>
				<div className="footer__first-item_img">
					<img src={Asset15} alt="" srcset="" />
				</div>
				<div className="footer__first-item_img">
					<img src={Asset16} alt="" srcset="" />
				</div>
			</div>
			<div className="footer__second-item">
				<ul className="footer__second-item_item">
					<li className="footer__second-item_item-header contact-header">
						Contact us
					</li>
					<li className="footer__second-item_item-list">
						<MdIcons.MdOutlineLocationOn />
						<span className="item-list">
							<span>Address:2168 S Archer Ave, Chicago,</span>
							<br />
							<span className="address">United State</span>
						</span>
					</li>
					<li className="footer__second-item_item-list">
						<FiIcons.FiPhoneCall />
						<span className="item-list">Phone: +(01) 312-808-1999</span>
					</li>
					<li className="footer__second-item_item-list">
						<HiIcons.HiOutlineMail />
						<span className="item-list">Email: support@althothemes.com</span>
					</li>
					<li className="footer__second-item_item-list">
						<ul className="footer__second-item_item-payment__platform">
							<li className="payment__platform-img">
								<img src={Visa} alt="visa" srcset="" />
							</li>
							<li className="payment__platform-img">
								<img src={Mastercard} alt="mastercard" srcset="" />
							</li>
							<li className="payment__platform-img">
								<img src={Unionpay} alt="unionpay" srcset="" />
							</li>
							<li className="payment__platform-img">
								<img src={Discover} alt="discoverpay" />
							</li>
							<li className="payment__platform-img">
								<img src={Giro} alt="giropay" />
							</li>
							<li className="payment__platform-img">
								<img src={Amex} alt="amexpay" />
							</li>
						</ul>
					</li>
				</ul>
				<ul className="footer__second-item_item">
					<li className="footer__second-item_item-header">Information</li>
					<li>My account</li>
					<li>Wishlist</li>
					<li>Cart</li>
					<li>Latest Post</li>
					<li>About Us</li>
				</ul>
				<ul className="footer__second-item_item">
					<li className="footer__second-item_item-header">Support</li>
					<li>Testimonials</li>
					<li>Privacy Policy</li>
					<li>Cookies</li>
					<li>Terms & Condition</li>
					<li>FAQ's</li>
				</ul>
				<ul className="footer__second-item_item">
					<li className="footer__second-item_item-header">Extras</li>
					<li>Search</li>
					<li>Wishlist</li>
					<li>News</li>
					<li>All Collection</li>
					<li className="footer__second-item_icon">
						<ul className="footer__second-item_item-icons">
							<li>
								<FaIcons.FaFacebookF />
							</li>
							<li>
								<FaIcons.FaPinterestP />
							</li>
							<li>
								<GrIcons.GrInstagram />
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<ul className="footer__third-item">
				<li>Copyright &cpoy; 2021.frooto</li>
			</ul>
		</div>
	);
};

export default Footer;
