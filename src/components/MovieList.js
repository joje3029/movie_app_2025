import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => (
	<div className="movies">
		{movies.map((movie) => (
			<Movie
				key={movie.id}
				title={movie.title}
				year={movie.year}
				rating={movie.rating}
				summary={movie.summary}
				poster={movie.medium_cover_image}
				genres={movie.genres}
			/>
		))}
	</div>
);

export default MovieList;

/*
프레젠테이셔널 컴포넌트는:
데이터를 어떻게 보여줄지에만 집중
props로 데이터를 받아서 표시만 함
보통 상태를 가지지 않음
UI 렌더링에만 집중
*/
