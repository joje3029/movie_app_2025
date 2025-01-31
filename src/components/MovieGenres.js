import React from "react";
import "../components/Movie.css";
import PropTypes from "prop-types";

// MovieGenres 컴포넌트 분리
const MovieGenres = ({ genres }) => (
	<ul className="movie__genres">
		{genres.map((genre, index) => ( //key={index} 대신 key={genre-${genre}}를 사용하여 더 안정적인 키 값 제공
			<li key={`genre-${genre}`} className="genres__genre">
				{genre}
			</li>
		))}
	</ul>
);

MovieGenres.propTypes = {
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieGenres;
