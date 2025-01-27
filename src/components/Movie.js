import React from "react";
import "../components/Movie.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ title, year, rating, summary, poster, genres }) {
	return (
		<div className="movie">
			<Link
				to={{
					pathname: "/movie-detail", // 클릭시 http://localhost:3000/#/movie-detail 즉, 해당 영화의 상세보기로 이동,
					state: { year, title, summary, poster, genres }, // 상세보기에서 사용할 데이터를 state로 전달
				}}
			>
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
			</Link>
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
