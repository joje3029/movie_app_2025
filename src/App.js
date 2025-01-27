import React from "react";
import Food from "./Potato";

function App() {
	const foodILike = [
		{
			id: 1,
			name: "kimchi",
			image: "https://sugaryums.com/wp-content/uploads/2023/03/Baechu-Kimchi-Cabbage-Kimchi-Recipe-SugarYums-17.jpg",
		},
		{
			id: 2,
			name: "samgiopsal",
			image: "https://english.visitkorea.or.kr/public/images/foodtrip/k-food-img/img_kfood_view_107.jpg",
		},
		{
			id: 3,
			name: "chukumi",
			image: "https://tblg.k-img.com/resize/640x360c/restaurant/images/Rvw/249684/107a648f49bc7889f2a28bc5a9367c10.jpg?token=3d0cb09&api=v2",
		},
		{
			id: 4,
			name: "bibimbap",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB32qrCC4gzonTMGeXpoX9jUO8QSj2dQsNQA&s",
		},
		{
			id: 5,
			name: "donkatsu",
			image: "https://mykoreankitchen.com/wp-content/uploads/2023/08/0.-Donkatsu.jpg",
		},
	]; //여기서 데이터 넘어옴 , 서버 대용

	return (
		<div>
			<h1>Hello World</h1>
			{foodILike.map((dish) => (
				<Food key={dish.id} name={dish.name} image={dish.image} />
			))}
			{/* key는 리액트의 props 고유성을 구분하기 위한것. 왜 그래서 vue에서도 v-for 쓰면 key값 하잖아. */}
		</div>
	);
}

export default App;
