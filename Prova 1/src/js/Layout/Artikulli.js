import React from "react";
import { Link } from "react-router";

export default class Artikulli extends React.Component {
	render() {
		var vendi = this.props.Vendi;
		return(
			<div>
				<h3>Vendi: {vendi}</h3>
			</div>
			);
	}
}