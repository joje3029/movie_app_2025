import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
	state = {
		isLoding: true,
		movies: [],
	};

	getMovies = async () => {
		const {
			data: {
				data: { movies },
			},
		} = await axios.get(
			"https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
		);

		this.setState({ movies, isLoding: false });
	};

	componentDidMount() {
		this.getMovies();
	}

	render() {
		const { isLoding } = this.state;
		return (
			<section className="container">
				{isLoding
					? "Loading..."
					: this.state.movies.map((movie) => {
							return (
								<div className="movies" key={movie.id}>
									<Movie
										title={movie.title}
										year={movie.year}
										rating={movie.rating}
										summary={movie.summary}
										poster={movie.medium_cover_image}
										genres={movie.genres}
									/>
								</div>
							);
					  })}
			</section>
		);
	}
}

export default Home;
