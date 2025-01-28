import React from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import { getMovies } from "../api/movieApi";
import "./Home.css";

//독립적인 프레젠테이셔널 컴포넌트가 됨. 파일로도 뺄수 있음.
// const MovieList = ({ movies }) => (
// 	<div className="movies">
// 		{movies.map((movie) => (
// 			<Movie
// 				key={movie.id}
// 				title={movie.title}
// 				year={movie.year}
// 				rating={movie.rating}
// 				summary={movie.summary}
// 				poster={movie.medium_cover_image}
// 				genres={movie.genres}
// 			/>
// 		))}
// 	</div>
// );

class Home extends React.Component {
	state = {
		isLoding: true,
		movies: [],
	};

	// getMovies = async () => {
	// 	const {
	// 		data: {
	// 			data: { movies },
	// 		},
	// 	} = await axios.get(
	// 		"https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
	// 	);

	// 	this.setState({ movies, isLoding: false });
	// };

	getMovies = async () => {
		const {
			data: {
				data: { movies },
			},
		} = await getMovies();
		this.setState({ movies, isLoding: false });
	};

	componentDidMount() {
		this.getMovies();
	}

	render() {
		const { isLoding, movies } = this.state;
		return (
			<section className="container">
				{isLoding ? "Loading..." : <MovieList movies={movies} />}
			</section>
		);
	}
}

export default Home;
