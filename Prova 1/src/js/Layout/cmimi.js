import React from "react";
import { Link } from "react-router";

export default class cmimi extends React.Component {
	render() {
		var cmimi = this.props.Cmimi;
		return(
			<div>
				<h3>Cmimi: {cmimi}</h3>
			</div>
			);
	}
}