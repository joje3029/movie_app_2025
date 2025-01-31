import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const NavigationContent = () => (
	<div className="nav">
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
	</div>
);

const Navigation = () => {
	return <NavigationContent />;
};

export default Navigation;
