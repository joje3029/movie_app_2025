import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
	state = {
		isLoding: true,
		movies: [],
	};

	//구조 분해 할당
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
								<div className="movies">
									<Movie
										key={movie.id}
										title={movie.title}
										year={movie.year}
										rating={movie.rating}
										summary={movie.summary}
										poster={movie.medium_cover_image}
									/>
								</div>
							);
					  })}
			</section>
		);
	}
}

export default App;
