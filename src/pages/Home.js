import React from "react";
import "./home.scss";

const Home = () => {
	return (
		<div>
			{/* section-1 starts */}
			<section className="section-1">
				<div className="section-1__wrapper">
					<h3 className=" pretext">HELLO THERE</h3>
					<h1 className="intro">
						I am Gunal Bondre. <br /> I am a Web Developer
					</h1>
					<button className="theme-btn theme-btn__outline" id="#projects">
						Latest Projects
					</button>
					<button className="theme-btn theme-btn__outline" id="#about">
						About Me
					</button>
				</div>
			</section>
			{/* end of section-1 */}

			{/* section-2 starts */}
			<section className="section-2  center-column">
				<div className="section-2__wrapper  ">
					<div className="about-us-header">
						<p className="about fs-20">ABOUT</p>
						<h2>Personal Info</h2>
						<p className="para fs-20">Get to know more about me</p>
					</div>

					<div className="about-us-content">
						<div className="about-us-content__wrapper">
							<h2>Hello</h2>
							<p className="para">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Voluptatem, qui nemo soluta ea totam ut? Voluptatum assumenda
								nisi laborum, optio ut eligendi adipisci, dicta, reiciendis
								minus enim voluptatibus dolorem fugit.
							</p>
							<p className="para">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Officiis voluptatem sint non quam perspiciatis illo.
							</p>
						</div>
						<div className="skill">
							<ul>
								<li>HTML</li>
								<li>CSS</li>
								<li>SCSS</li>
								<li>JAVASCRIPT</li>
								<li>REACT</li>
								<li>NODE</li>
								<li>EXPRESS</li>
								<li>MOMGODB</li>
								<li>BOOTSTRAP</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			{/* end of section-2 */}

			{/* section-2 */}
			<section className="section-3">
				<div className="section-3__wrapper"></div>
			</section>
			{/* end of section-3 */}
		</div>
	);
};

export default Home;
