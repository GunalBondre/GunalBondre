import React from "react";
import "./header.scss";
const Header = () => {
	const handleClick = () => {
		const hamburgerMenu = document.querySelector(".hamburger");
		const navItems = document.querySelector(".navbar-wrapper__items");

		document.querySelector(".menu").addEventListener("click", function () {
			document.querySelectorAll(".target").forEach((item) => {
				item.classList.toggle("active");
			});
		});
	};
	return (
		<div>
			<div className="menu target" onClick={handleClick}>
				<div className="menu-line menu-line-1"></div>
				<div className="menu-line menu-line-2"></div>
				<div className="menu-line menu-line-3"></div>
			</div>

			<nav className="navbar ">
				<div className="logo">GB</div>
				<div className="target">
					<a href="#home">Home</a>
					<a href="#about">About</a>
					<a href="#work">Projects</a>
					<a href="#contact">Contact</a>
				</div>
			</nav>
		</div>
	);
};

export default Header;
