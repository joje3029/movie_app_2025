import React from "react";
// React 17이후에는 단순히 JSX를 사용하기 위해 imort가 필수는 아님.

function Food({ name, image }) {
	return (
		<div>
			<h3>I love {name}</h3>
			<img src={image} alt={name} />
		</div>
	);
}

export default Food; // 컴포먼트 내보니개(export). 이제 다른 파일에서 Potato 컴포넌트 사용 가능.
