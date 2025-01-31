import React from "react";
import "../components/Movie.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/*
const Movie = ({ title, year, rating, summary, poster, genres }) => {
	return (
		<div className="movie">
			<Link
				to="/movie-detail"
				state={{ year, title, summary, poster, genres }}
			>
				<img src={poster} alt={title} title={title} />
				<div className="movie__data">
					<h3 className="movie__title">{title}</h3>
					<h5 className="movie__year">{year}</h5>
					<ul className="movie__genres">
						{genres.map((genre, index) => (
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
};

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	rating: PropTypes.number,
	summary: PropTypes.string,
	poster: PropTypes.string,
	genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
*/


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

/*
key={index}의 문제점 : 배열의 인덱스를 key로 사용하면 배열이 변경될때, 해당 key 값이 변경됨.
이로 인해 React가 불필요한 리렌더링을 하거나 예상치 못한 동작을 할 수 있음.
     // 초기 genres 배열
     ['액션', '코미디', '로맨스']  
     // 액션(key=0), 코미디(key=1), 로맨스(key=2)

     // '액션'이 제거된 genres 배열
     ['코미디', '로맨스']
     // 코미디(key=0), 로맨스(key=1)

key={`genre-${genre}`}의 장점 : - 장르 이름 자체를 key에 포함시키므로 고유한 값을 가짐
=> 배열이 변경되어도 각 항목의 key 값은 변하지 않음. React가 DOM 업데이트를 더 효율적으로 처리할 수 있음.

// 초기 genres 배열
['액션', '코미디', '로맨스']
// genre-액션, genre-코미디, genre-로맨스
// '액션'이 제거된 genres 배열
['코미디', '로맨스']
// genre-코미디, genre-로맨스

*/


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

// PropTypes 정의
MovieGenres.propTypes = {
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

MovieInfo.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	rating: PropTypes.number,
	summary: PropTypes.string,
};

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	rating: PropTypes.number,
	summary: PropTypes.string,
	poster: PropTypes.string,
	genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
