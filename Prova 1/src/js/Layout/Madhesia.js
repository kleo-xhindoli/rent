import React from "react";
import { Link } from "react-router";

export default class Madhesia extends React.Component {
	render() {
		var madhesia = this.props.Madhesia;
		return(
			<div>
				<h3>Madhesia: {madhesia}</h3>
			</div>
			);
	}
}