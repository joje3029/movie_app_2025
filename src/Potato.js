import React from "react";
// React 17이후에는 단순히 JSX를 사용하기 위해 imort가 필수는 아님.

function Food(props) {
	//react는 props를 인자로 받는 구나!
	console.log(props); //  위에서 보낸게 객체라서 Object 출력인거고.
	console.log(props.fav); // 객체에서 fav만이니까 인거고.
	return <h3>I love {props.fav}</h3>;
}

export default Food; // 컴포먼트 내보니개(export). 이제 다른 파일에서 Potato 컴포넌트 사용 가능.
