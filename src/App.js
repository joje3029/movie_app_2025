import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";
import Detail from "./routes/Detail";
import { HashRouter, Route, Routes } from "react-router-dom";

/*기존 코드
function App() {
	return (
		<HashRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/movie-detail" element={<Detail />} />
			</Routes>
		</HashRouter>
	);
}
*/

/* 1차 라우트 설정 부분 분리
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movie-detail" element={<Detail />} />
    </Routes>
  );
};
*/

const routeConfig = [
	{ path: "/", element: <Home /> },
	{ path: "/about", element: <About /> },
	{ path: "/movie-detail", element: <Detail /> },
];

/* 2차 라우트 설정 부분 분리
const AppRouter = () => {
    return (
        <Routes>
            {routeConfig.map((route) => (
                <Route key={route.path} {...route} />
            ))}
        </Routes>
    );
};
*/

// 3차 라우트 설정 부분 분리 : 화살표 함수의 암시적 반환 사용
const AppRouter = () => (
	<Routes>
		{routeConfig.map((route) => (
			<Route key={route.path} {...route} />
		))}
	</Routes>
);

function App() {
	return (
		<HashRouter>
			<Navigation />
			<AppRouter />
		</HashRouter>
	);
}

export default App;
