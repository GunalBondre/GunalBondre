import React from "react";
import "./footer.scss";
const Footer = () => {
	return (
		<div>
			<div className="footer center-column" id="contact">
				<p className="para center">Contact</p>
				<h2 className="center">Say Hello</h2>
				<hr />
				<div className="footer-wrapper">
					<div className="social-icons">
						<h4>Follow</h4>
						<div className="social-icons-wrapper">
							<i class="fab fa-facebook-square"></i>
							<i class="fab fa-linkedin"></i>
							<i class="fab fa-github"></i>
						</div>
					</div>
					<div className="contact">
						<h4 className="">
							<b>Email: </b>bondre.gunal@gmail.com
						</h4>
						<h4 className="">
							<b>Phone:</b> 8668597400
						</h4>
						<h4 className="">
							<b>Address: </b>Pune, Maharashtra
						</h4>
					</div>
				</div>
				<p className="para">copyright &copy; gunalbondre.in</p>
			</div>
		</div>
	);
};

export default Footer;
