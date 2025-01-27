import React from "react";
import Food from "./Potato";

function App() {
	const food = [
		{
			name: "kimchi",
			image: "https://sugaryums.com/wp-content/uploads/2023/03/Baechu-Kimchi-Cabbage-Kimchi-Recipe-SugarYums-17.jpg",
		},
		{
			name: "samgiopsal",
			image: "https://english.visitkorea.or.kr/public/images/foodtrip/k-food-img/img_kfood_view_107.jpg",
		},
		{
			name: "chukumi",
			image: "https://tblg.k-img.com/resize/640x360c/restaurant/images/Rvw/249684/107a648f49bc7889f2a28bc5a9367c10.jpg?token=3d0cb09&api=v2",
		},
		{
			name: "bibimbap",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB32qrCC4gzonTMGeXpoX9jUO8QSj2dQsNQA&s",
		},
		{
			name: "donkatsu",
			image: "https://mykoreankitchen.com/wp-content/uploads/2023/08/0.-Donkatsu.jpg",
		},
	]; //여기서 데이터 넘어옴 , 서버 대용

	return (
		<div>
			<h1>Hello World</h1>
			{/* 여기를 잘 이해하고 알아야 겠네. */}
			{food.map((dish) => (
				<Food name={dish.name} image={dish.image} />
			))}
		</div>
	);
}

export default App;
