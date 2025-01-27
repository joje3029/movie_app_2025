import React from "react";
import axios from "axios";
import Movie from "./Movie";
class App extends React.Component {
	state = {
		isLoding: true,
		movies: [],
	};

	//구조 분해 할당
	getMovies = async () => {
		const {
			data: {
				//여기서 data ->
				data: { movies }, //여기서 data -> movies 진행
			},
		} = await axios.get(
			"https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
		);

		this.setState({ movies, isLoding: false }); // 위의 데이터 movies를 stat의 movies에 넣고 isLoding을 false로 변경
	};

	//컴포넌트 마운트 후 실행되는 함수(생명주기 함수)
	componentDidMount() {
		//영화 데이터 로딩이 완료되면 state에 저장
		this.getMovies();
	}

	render() {
		const { isLoding } = this.state;
		return (
			<div>
				{isLoding
					? "Loading..."
					: this.state.movies.map((movie) => {
							// console.log(movie);
							return (
								<Movie
									key={movie.id} //앞에서 본 컴포넌트마다 고유한 key
									title={movie.title}
									rating={movie.rating}
									summary={movie.summary}
									poster={movie.medium_cover_image}
								/>
							);
					  })}
			</div>
		);
	}
}

export default App;
