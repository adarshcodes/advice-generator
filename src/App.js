import React, { useState, useEffect } from "react";
import "./assets/sass/main.css";

import Card from "./components/Card";

function App() {
	const [advice, setAdvice] = useState([]);

	useEffect(() => {
		adviceFetcher();
	}, []);

	function adviceFetcher() {
		fetch(`https://api.adviceslip.com/advice`)
			.then((res) => res.json())
			.then((data) => {
				setAdvice(data.slip);
			});
	}

	console.log(advice);

	return (
		<main className="main-container">
			<Card
				id={advice.id}
				adviceText={advice.advice}
				fetchAdvice={adviceFetcher}
			/>
		</main>
	);
}

export default App;
