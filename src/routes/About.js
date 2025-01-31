import React from "react";
import "./About.css";

//현재 변경 안함으로 상수로 선언
const QUOTE = {
	text: "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.",
	author: "George Orwell",
	work: "1984"
};

const AboutContent = () => (
	<div className="about__container">
		<span>"{QUOTE.text}"</span>
		<span>- {QUOTE.author}, {QUOTE.work}</span>
	</div>
);

const About = () => {
	return <AboutContent />;
};

export default About;
