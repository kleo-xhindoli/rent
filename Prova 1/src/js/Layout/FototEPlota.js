
import { Link } from "react-router";
import React, { Component } from 'react';

export default class FototEPlota extends React.Component {
	render() {
		var foto = this.props.Foto.toString();
		var Style = {
			maxWidth:"100%",
			maxHeight:"100%",
			minWidth:"80%",
			minHeight:"80%",
		};
		var StyleDiv = {
			border: "1px solid black",
			textAlign:"center",
		};
		return(
			<div style={StyleDiv}>
				<img src={foto} style={Style}/>
			</div>
			);
	}
}