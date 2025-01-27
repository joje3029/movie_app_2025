import React from "react";
import PropTypes from "prop-types";

function Movie({ id, title, rating, summary, poster }) {
	return <h4>{title}</h4>;
}

//props로 app에서 데이터 받음.
Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	summary: PropTypes.string,
	poster: PropTypes.string,
};

export default Movie;
