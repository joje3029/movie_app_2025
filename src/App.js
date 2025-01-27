import React from "react";

class App extends React.Component {
	state = {
		isLoding: true,
		movies: [],
	};

	//컴포넌트 마운트 후 실행되는 함수(생명주기 함수)
	componentDidMount() {
		//영화 데이터 로딩이 완료되면 state에 저장
		setTimeout(() => {
			this.setState({ isLoding: false });
		}, 6000);
	}

	render() {
		const { isLoding } = this.state;
		return <div>{isLoding ? "Loading..." : "We are ready"}</div>;
	}
}

export default App;
