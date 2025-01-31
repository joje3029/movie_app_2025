import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

const Detail = () => {
	const location = useLocation(); //현재 페이지의 위치 정보와 state 데이터를 가져오는 hook
	const navigate = useNavigate(); //프로그래밍 방식으로 페이지 이동을 할 수 있게 해주는 hook
	
	// state 유효성 검사를 위한 custom hook으로 분리 가능
	const isValidMovieData = useMemo(() => {
		if (!location.state) return false; //없으면 돌려보내고
		
		const { title, year, summary, poster, genres } = location.state; //있으면 구조분해할당
		//Boolean()은 값을 trun/false 로 명시적으로 변환함 -> 여기서는 모든 필수 데이터가 조재하는지 확인하는 용도
		return Boolean(
			title && 
			year && 
			summary && 
			poster && 
			Array.isArray(genres)
		);
	}, [location.state]);

	useEffect(() => {
		// 유효하지 않은 접근 처리
		if (!isValidMovieData) { // 위의 memo로 검사한 값으로 함.
			alert("올바르지 않은 접근입니다.");
			navigate("/", { replace: true }); // 유효하지 않은 접근이면 홈으로 리다이렉트
		}
	}, [isValidMovieData, navigate]);

	return <MovieDetail {...location.state} />;
}

export default Detail;
