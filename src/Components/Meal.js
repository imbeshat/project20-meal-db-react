import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";

const Meal = () => {
	const [search, setSearch] = useState();
	const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
	const [show, setShow] = useState(false);
	const [item, setItem] = useState("");

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setItem(data.meals);
				setShow(true);
			});
	}, [url]);

	const handleSubmit = (e) => {
		setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
	};

	return (
		<>
			<div className="flex flex-col items-center justify-center py-6">
				<h1 className="text-4xl">Search Food</h1>
				<div className="flex flex-row items-center justify-evenly mt-4" onKeyDown={handleSubmit}>
					<input
						type="search"
						placeholder="Enter Food to Search"
						className="w-[70%] md:w-[80%] text-lg rounded-md text-black pl-2"
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button type="submit" onClick={handleSubmit}>
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 24 24"
							height="2em"
							width="2em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g>
								<path fill="none" d="M0 0h24v24H0z"></path>
								<path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
							</g>
						</svg>
					</button>
				</div>
			</div>
			<div className="w-[80%] mx-auto grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">{show ? <MealItem data={item} /> : "Not Found"}</div>
		</>
	);
};

export default Meal;
