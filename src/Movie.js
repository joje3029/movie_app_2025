import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";

function Movie({ title, year, rating, summary, poster, genres }) {
	return (
		<div className="movie">
			<img src={poster} alt={title} title={title} />
			<div className="movie__data">
				<h3 className="movie__title">{title}</h3>
				<h5 className="movie__year">{year}</h5>
				<ul className="movie__genres">
					{genres.map((genre, index) => (
						//여기도 map을 사용했고 해당 각 결과의 고유 키가 필요
						<li key={index} className="genres__genre">
							{genre}
						</li>
					))}
				</ul>
				<p className="movie__rating">{rating}</p>
				<p className="movie__summary">{summary.slice(0, 180)}...</p>
			</div>
		</div>
	);
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	rating: PropTypes.number,
	summary: PropTypes.string,
	poster: PropTypes.string,
	genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
