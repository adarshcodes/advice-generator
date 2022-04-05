import React from "react";
import Dice from "./Dice";
import Divider from "../assets/images/pattern-divider.svg";

export default function Card(props) {
	return (
		<div className="card">
			<h1 className="card__advice-number">Sigma Rule #{props.id}</h1>
			<h2 className="card__advice">{props.adviceText}</h2>
			<img src={Divider} alt="divider" className="card__divider" />
			<Dice handleChange={props.fetchAdvice} />
		</div>
	);
}
