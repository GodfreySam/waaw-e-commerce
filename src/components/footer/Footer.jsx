import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as GrIcons from "react-icons/gr";
import "./footer.css";
const Footer = () => {
	return (
		<div className="footer home">
			<h4 className="footer__header">
				<span>@FOLLOW US ON INSTAGRAM</span>
			</h4>
			<div className="footer__first-item">
				<div className="footer__first-item_img">
					<img
						src="https://res.cloudinary.com/freyman/image/upload/v1635417548/grp1-ecom/images/asset11_qg7fgj.png"
						alt="cup of juice"
					/>
				</div>
				<div className="footer__first-item_img">
					<img
						src="https://res.cloudinary.com/freyman/image/upload/v1635417548/grp1-ecom/images/asset12_wbxftp.png"
						alt="cup of juice"
					/>
				</div>
				<div className="footer__first-item_img">
					<img
						src="https://res.cloudinary.com/freyman/image/upload/v1635417548/grp1-ecom/images/asset13_swfdf5.png"
						alt="cup of juice"
					/>
				</div>
				<div className="footer__first-item_img">
					<img
						src="https://res.cloudinary.com/freyman/image/upload/v1635417550/grp1-ecom/images/asset14_ifecor.png"
						alt="cup of juice"
					/>
				</div>
				<div className="footer__first-item_img">
					<img
						src="https://res.cloudinary.com/freyman/image/upload/v1635417548/grp1-ecom/images/asset15_hnvjzg.png"
						alt="cup of juice"
					/>
				</div>
				<div className="footer__first-item_img">
					<img
						src="https://res.cloudinary.com/freyman/image/upload/v1635417549/grp1-ecom/images/asset16_wiqpmx.png"
						alt="cup of juice"
					/>
				</div>
			</div>
			<div className="footer__second-item">
				<ul className="footer__second-item_item">
					<li className="footer__second-item_item-header contact-header">
						Contact us
					</li>
					<li className="footer__second-item_item-list footer-address-list">
						<MdIcons.MdOutlineLocationOn className="footer-icon" />
						<span className="item-list address">
							<span className="address1">Address: 2168 S Archer Ave, Chicago,</span>
							<br />
							<span className="address2">United State</span>
						</span>
					</li>
					<li className="footer__second-item_item-list footer-address-list">
						<FiIcons.FiPhoneCall className="footer-icon" />
						<span className="item-list">Phone: +(01) 312-808-1999</span>
					</li>
					<li className="footer__second-item_item-list footer-address-list">
						<HiIcons.HiOutlineMail className="footer-icon" />
						<span className="item-list">Email: support@althothemes.com</span>
					</li>
					<li className="footer__second-item_item-list">
						<ul className="footer__second-item_item-payment__platform">
							<li className="payment__platform-img">
								<img
									src="https://res.cloudinary.com/freyman/image/upload/v1635417550/grp1-ecom/images/visa_esqjxq.png"
									alt="visa"
								/>
							</li>
							<li className="payment__platform-img">
								<img
									src="https://res.cloudinary.com/freyman/image/upload/v1635417550/grp1-ecom/images/master-card_ingwtf.png"
									alt="mastercard"
								/>
							</li>
							<li className="payment__platform-img">
								<img
									src="https://res.cloudinary.com/freyman/image/upload/v1635417550/grp1-ecom/images/union-pay_anzwbi.png"
									alt="unionpay"
								/>
							</li>
							<li className="payment__platform-img">
								<img
									src="https://res.cloudinary.com/freyman/image/upload/v1635417549/grp1-ecom/images/discover_qimnqv.png"
									alt="discoverpay"
								/>
							</li>
							<li className="payment__platform-img">
								<img
									src="https://res.cloudinary.com/freyman/image/upload/v1635417549/grp1-ecom/images/giro-pay_jc4nro.png"
									alt="giropay"
								/>
							</li>
							<li className="payment__platform-img">
								<img
									src="https://res.cloudinary.com/freyman/image/upload/v1635417545/grp1-ecom/images/amex_gmnq8y.png"
									alt="amexpay"
								/>
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
								<FaIcons.FaFacebookF className="footer-icon" />
							</li>
							<li>
								<FaIcons.FaPinterestP className="footer-icon" />
							</li>
							<li>
								<GrIcons.GrInstagram className="footer-icon" />
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
