import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";
import Detail from "./routes/Detail";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
	// Route에는 2가지 props를 전달할 수 있는데, 하나는 URL을 위한 path props, 하나는 URL에 맞는 컴포넌트를 불러 주기 위한 Component props
	return (
		<HashRouter>
			{/* Link, Router 컴포넌트는 반드시 HashRouter 안에 포함되어야 함, 단 Routes 안에는 포함되면 안됨.
				Navigation 메뉴는 모든 페이지에서 보여야 하므로 Routes 밖에 위치해야함
			 */}
			<Navigation />
			{/* <Routes> 안에는 오직 <Route> 컴포넌트나 <React.Fragment>만 올 수 있음.  */}
			<Routes>
				<Route path="/" element={<Home />} />
				{/* HashrRouter는 url에 #를 사용함. 고로 http://localhost:3000/#/about 로 해야함. http://localhost:3000/about로 하고 싶으면 BrowserRouter 사용 */}
				<Route path="/about" element={<About />} />
				<Route path="/movie-detail" element={<Detail />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
