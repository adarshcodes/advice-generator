import React from "react";
import DiceIcon from "../assets/images/icon-dice.svg";

export default function Dice(props) {
	return (
		<div className="dice" onClick={props.handleChange}>
			<img src={DiceIcon} alt="dice" className="dice__icon" />
		</div>
	);
}
