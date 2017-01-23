
import { Link } from "react-router";
import React, { Component } from 'react';

export default class FototEPlota extends React.Component {
	render() {
		var foto = this.props.Foto.toString();
		return(
			<div class="card">
				<img src={foto} class="img-slider"/>
			</div>
			);
	}
}