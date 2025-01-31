import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";
import Detail from "./routes/Detail";
import { HashRouter, Route, Routes } from "react-router-dom";


const routeConfig = [
	{ path: "/", element: <Home /> },
	{ path: "/about", element: <About /> },
	{ path: "/movie-detail", element: <Detail /> },
];

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
