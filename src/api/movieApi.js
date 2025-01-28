import axios from "axios";

const movieApi = axios.create({
	baseURL: "https://yts-proxy.now.sh",
});

export const getMovies = () =>
	movieApi.get("/list_movies.json", {
		params: {
			sort_by: "rating",
		},
	});

export default movieApi;
