import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../App.css";

let id = "";
const IngredientsPopup = ({ data }) => {
	if (data) {
		const strYoutube = data.strYoutube;
		const str = strYoutube.split("=");
		id = str[str.length - 1];
	}

	return (
		<>
			<Popup
				trigger={
					<button className="button">
						{" "}
						<h6 className="p-1 mt-1 bg-black rounded-lg text-sm">Click for more...</h6>{" "}
					</button>
				}
				modal
				nested
			>
				{(close) => (
					<div className="modal">
						<button className="close" onClick={close}>
							&times;
						</button>
						<div className="header">
							<h1>{data.strMeal}</h1>
							<h6 className="text-sm text-left italic">{data.strArea} Food</h6>
						</div>
						<div className="content">
							{""}
							{data.strInstructions}
						</div>
						<div className="actions">
							<Popup trigger={<button className="m-1 p-1 border-2 border-stone-800 rounded"> Ingredients </button>} position="top center" nested>
								<ul className="text-left text-xs">
									{data &&
										Object.keys(data)
											.filter((key) => key.includes("Ingredient"))
											.map(
												(key) =>
													data[key] && (
														<li key={key} className="mb-2">
															{data[key]} - {data[`strMeasure${key.slice(-1)}`]}
														</li>
													)
											)}
								</ul>
							</Popup>
							<Popup trigger={<button className="m-1 p-1 border-2 border-stone-800 rounded"> Youtube Tutorial </button>} position="top center" nested>
								<iframe width="260" height="170" title="recipeVideo" src={`https://www.youtube.com/embed/${id}`}></iframe>
							</Popup>
							<button
								className="m-1 p-1 border-2 border-stone-800 rounded"
								onClick={() => {
									close();
								}}
							>
								Close
							</button>
						</div>
					</div>
				)}
			</Popup>
		</>
	);
};

export default IngredientsPopup;
