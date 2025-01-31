import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
	const location = useLocation(); //현재 페이지의 위치 정보와 state 데이터를 가져오는 hook
	const navigate = useNavigate(); //프로그래밍 방식으로 페이지 이동을 할 수 있게 해주는 hook
	//리다이렉트 처리 -> 컴파운드가 마운트될 때 실행함.
	React.useEffect(() => {
		if (!location.state) { //url로 직접 접근하거나 state가 없으면 홈(/)으로 리다이렉트
			navigate("/");
		}
	}, []);

	if (!location.state) return null; //state가 없으면 아무것도 렌더링하지 않음.

	return <div>{location.state.title}</div>; //state가 있으면 영화 제목을 렌더링 -> 즉, 추가로 내용을 하고 싶으면 이걸 더 내놓으면 됨.
}

export default Detail;
