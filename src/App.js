import React from "react";

class App extends React.Component {
	/*클래스 내부에서는 const, let 같은 변수 선언 키워드 사용 안함. 클래스 문법 규칙 때문,
	  클래스는 개체의 설계도 이므로, 내부의 속성과 메소드는 클래스의 일부로 정의
	  클래스 필드와 메서드는 이미 클래스에 속해있기 때문에 별도의 선언 필요 안함.
	  이는 Java나 다른 객체지향 언어의 클래스 문법과 유사
	*/

	//state는 객체 형태의 데이터. stste를 사용하려면 반드시 클래스형 컴포넌트 안에서, 소문자를 이용하여 state라고 적음.
	state = {
		count: 0,
	};

	add = () => {
		this.setState((current) => {
			return { count: current.count + 1 };
		});
	};

	minus = () => {
		this.setState((current) => ({ count: current.count - 1 }));
	};

	//React.Component에 포함된 함수가 아닌 js 함수
	constructor(props) {
		super(props);
		console.log("hello"); //아래 render 보다 먼저 console에 출력
	}

	componentDidMount() {
		console.log("componentDidMount"); //render 후에 console에 출력 -> 즉 Mount 후 출력.
	}

	//constructor(), render(), componentDidMount() 순서로 출력. => Mount 함수 종류

	componentDidUpdate() {
		// 화면이 업데이트 (새로 그려지면) 실행, 그래서 아래의 add / minus 버튼이 누르면 출력
		console.log("componentDidUpdate");
	}

	//컴포넌트가 죽을때 = Unmount
	componentWillUnmount() {
		// 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 떄 많이 사용
		console.log("componentWillUnmount");
	}

	//클래스형 컴포넌트에서는 JSX 를 반환하기 위해 render() 메서드를 사용해야 함.
	render() {
		console.log("render");
		return (
			<div>
				<h1>I'm a class component</h1>
				<div> The number is : {this.state.count}</div>
				<button onClick={this.add}>Add</button>
				<button onClick={this.minus}>Minus</button>
			</div>
		);
	}
}

export default App;
