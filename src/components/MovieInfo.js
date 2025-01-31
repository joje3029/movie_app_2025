import React from "react";
import "../components/Movie.css";
import PropTypes from "prop-types";


// MovieInfo 컴포넌트 분리
const MovieInfo = ({ title, year, rating, summary }) => (
	<div className="movie__data">
		<h3 className="movie__title">{title}</h3>
		<h5 className="movie__year">{year}</h5>
		<p className="movie__rating">{rating}</p>
		<p className="movie__summary">
			{summary.length > 180 ? `${summary.slice(0, 180)}...` : summary}
		</p>
	</div>
);
MovieInfo.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	rating: PropTypes.number,
	summary: PropTypes.string,
};

export default MovieInfo;
