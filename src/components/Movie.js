import React from "react";
import "../components/Movie.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MovieGenres from "./MovieGenres";
import MovieInfo from "./MovieInfo";

const Movie = ({ title, year, rating, summary, poster, genres }) => (
	<div className="movie">
		<Link
			to="/movie-detail"
			state={{ year, title, summary, poster, genres }}
		>
			<img src={poster} alt={title} title={title} />
			<MovieInfo title={title} year={year} rating={rating} summary={summary} />
			<MovieGenres genres={genres} />
		</Link>
	</div>
);


Movie.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	rating: PropTypes.number,
	summary: PropTypes.string,
	poster: PropTypes.string,
	genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
