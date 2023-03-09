import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const MealItem = ({ data }) => {
	return (
		<>
			{!data
				? "Not Found"
				: data.map((item) => {
						return (
							<div className="w-auto rounded-2xl bg-slate-800 p-2">
								<img src={item.strMealThumb} alt="meal" className="rounded-2xl" />
								<h3 className="text-white text-lg">{item.strMeal}</h3>
								<Popup
									trigger={
										<button>
											{" "}
											<Popup
												trigger={
													<button>
														<h6 className="p-1 mt-1 bg-black rounded-lg">Click for more...</h6>
													</button>
												}
												position="top center"
											>
												<div>Popup content here !!</div>
											</Popup>
										</button>
									}
									position="right center"
								>
									<div>Popup content here !!</div>
								</Popup>
							</div>
						);
				  })}
		</>
	);
};

export default MealItem;
