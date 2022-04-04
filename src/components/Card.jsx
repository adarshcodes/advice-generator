import React from "react";
import Dice from "./Dice";
import Divider from "../assets/images/pattern-divider.svg";

export default function Card(props) {
	return (
		<div className="card">
			<h1 className="card__advice-number">Advice #117</h1>
			<h2 className="card__advice">
				"It is easy to sit up and take notice, what's difficult is getting up
				and taking action."
			</h2>
			<img src={Divider} alt="divider" className="card__divider" />
			<Dice />
		</div>
	);
}
