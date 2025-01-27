import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
	const location = useLocation();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (!location.state) {
			navigate("/");
		}
	}, []);

	if (!location.state) return null;

	return <div>{location.state.title}</div>;
}

export default Detail;
