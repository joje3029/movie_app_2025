import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
	// Route에는 2가지 props를 전달할 수 있는데, 하나는 URL을 위한 path props, 하나는 URL에 맞는 컴포넌트를 불러 주기 위한 Component props
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* HashrRouter는 url에 #를 사용함. 고로 http://localhost:3000/#/about 로 해야함. http://localhost:3000/about로 하고 싶으면 BrowserRouter 사용 */}
				<Route path="/about" element={<About />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
