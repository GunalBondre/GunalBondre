import React from "react";
import Images from "../../images/index";
import "./main.scss";
import { Link } from "react-router-dom";
const Main = () => {
	return (
		<div className="mainContainer">
			{/* hero-section */}
			<section className="section-1 center-column ">
				<div className="section-1-wrapper">
					<div className="section-1-wrapper__hero-info">
						<small className="small-text">Welcome to my portfolio</small>
						<h1 className="animated animated-text">
							<span className="pretext">Hey I am </span>
							<div className="animated-info">
								<span className="animated-item">Gunal Bondre</span>
								<span className="animated-item">Front End Developer</span>
								<span className="animated-item">Full Stack Developer</span>
							</div>
						</h1>
						<p className="para">
							Building a successfull product is challenge. I am highly energetic
							in User Interface Design and Web Development
						</p>
						<div className="contact-btn">
							<a href="#" className="theme-btn theme-btn--grey">
								Download Resume
							</a>
							<a href="#work" className="theme-btn theme-btn--dark-grey">
								View Projects
							</a>
						</div>
					</div>
					<div className="section-1-wrapper__hero-image">
						<img src={Images.hero_img} alt="hero-img" />
					</div>
				</div>
			</section>
			{/* hero-section ends */}

			<section className="section-2 center-column" id="about">
				<div className="section-2-wrapper d-flex">
					<div className="about-us-img ">
						<img src={Images.about_us} alt="" />
					</div>
					<div className="about-us-content ">
						<h2>Personal Info</h2>
						<p className="para mb-20">Get to know more about me</p>
						<p className="para">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consequuntur, sequi et. Nisi modi porro consectetur iure
							reprehenderit nostrum officiis architecto.
						</p>
						<p className="para">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
							sapiente neque nemo aliquam minima deserunt recusandae at
							voluptates magni molestiae.
						</p>
						<div className="skills">
							<ul>
								<li>HTML</li>
								<li>CSS</li>
								<li>SCSS</li>
								<li>REACT</li>
								<li>NODEJS</li>
								<li>MONGODB</li>
								<li>EXPRESS</li>
								<li>BOOTSTRAP</li>
								<li>GIT</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			{/* end of section-2  */}

			{/* section-3 projects */}

			<section className="section-3" id="work">
				<div className="section-3-heading">
					<h2 className="center">Projects</h2>
					<p className="para center">
						Here you can find some of the projects that I created recently
					</p>
				</div>
				<div className="section-3-wrapper column-center">
					<div className="projects">
						<div className="projects-wrapper">
							<div className="project-image">
								<img src={Images.huddle} alt="" />
							</div>
							<div className="project-info">
								<h3>Huddle Landing Page</h3>
								<p className="para">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Facere, alias.
								</p>
							</div>
							<div className="cta-btn">
								<Link
									to={{ pathname: "http://huddle8687.netlify.com/" }}
									target="_blank"
									className="theme-btn theme-btn--project-btn"
								>
									See Live
								</Link>
							</div>
						</div>
					</div>
					{/* project-2 */}
					<div className="projects">
						<div className="projects-wrapper">
							<div className="project-image">
								<img src={Images.sunnyside} alt="" />
							</div>
							<div className="project-info">
								<h3>sunnyside Landing Page</h3>
								<p className="para">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Facere, alias.
								</p>
							</div>
							<div className="cta-btn">
								<Link
									to={{ pathname: "http://sunnyside-8687.netlify.com/" }}
									target="_blank"
									className="theme-btn theme-btn--project-btn"
								>
									See Live
								</Link>
							</div>
						</div>
					</div>
					{/* project-3 */}
					<div className="projects">
						<div className="projects-wrapper">
							<div className="project-image">
								<img src={Images.biz4commerce} alt="" />
							</div>
							<div className="project-info">
								<h3>Biz4commerce agency website</h3>
								<p className="para">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Facere, alias.
								</p>
							</div>
							<div className="cta-btn">
								<Link
									to={{ pathname: "https://biz4commerce.com" }}
									target="_blank"
									className="theme-btn theme-btn--project-btn"
								>
									See Live
								</Link>
							</div>
						</div>
					</div>
					{/* project-4 */}
					<div className="projects">
						<div className="projects-wrapper">
							<div className="project-image">
								<img src={Images.biz4group} alt="" />
							</div>
							<div className="project-info">
								<h3>biz4group - landing page</h3>
								<p className="para">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Facere, alias.
								</p>
							</div>
							<div className="cta-btn">
								<Link
									to={{
										pathname: "https://biz4group.com/ecommerce-development",
									}}
									target="_blank"
									className="theme-btn theme-btn--project-btn"
								>
									See Live
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* end of section-3 */}
		</div>
	);
};

export default Main;
