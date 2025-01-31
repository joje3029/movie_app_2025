import React from "react";
import PropTypes from "prop-types";

const MovieDetail = ({ title, year, summary, poster, genres }) => (
	<div className="movie-detail">
		<img src={poster} alt={title} />
		<div className="movie-detail__data">
			<h3 className="movie-detail__title">{title}</h3>
			<h5 className="movie-detail__year">{year}</h5>
			<ul className="movie-detail__genres">
				{genres.map(genre => (
					<li key={`genre-${genre}`}>{genre}</li>
				))}
			</ul>
			<p className="movie-detail__summary">{summary}</p>
		</div>
	</div>
);

MovieDetail.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default MovieDetail;
