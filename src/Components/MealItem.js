import React from "react";
import IngredientsPopup from "./IngredientsPopup";

const MealItem = ({ data }) => {
	return (
		<>
			{!data
				? "Not Found"
				: data.map((item) => {
						return (
							<div key={item.idMeal} className="w-auto rounded-2xl bg-slate-800 p-2">
								<img src={item.strMealThumb} alt="meal" className="rounded-2xl" />
								<h3 className="text-white text-lg">{item.strMeal}</h3>
								<IngredientsPopup data={item} />
							</div>
						);
				  })}
		</>
	);
};

export default MealItem;
