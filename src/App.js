import React from "react";
import Food from "./Potato";

function App() {
	return (
		<div>
			<h1>Hello World</h1>
			<Food
				fav="kimchi"
				something={true}
				papapapa={["kimchi", "ramen", 1, 2, 3]}
			/>
			<Food fav="ramen" />
			<Food fav="samgiopsal" />
			<Food fav="chukumi" />
		</div>
	);
}

export default App;
