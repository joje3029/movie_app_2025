import React, { useEffect } from "react";
import MovieDetail from "../components/MovieDetail";
import { useMovieData } from "../hooks/useMovieData";

const Detail = () => {
  const { movieData, redirectToHome } = useMovieData();

  useEffect(() => {
    if (!movieData) {
      redirectToHome();
    }
  }, [movieData, redirectToHome]);

  return movieData ? <MovieDetail {...movieData} /> : null;
};

export default Detail;