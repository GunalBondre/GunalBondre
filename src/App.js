import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/theme.scss";
import "./styles/common.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
const App = () => {
	return (
		<div>
			<Header />
			<Router>
				<Route exact path="/" component={Main}></Route>
			</Router>
			<Footer />
		</div>
	);
};

export default App;
