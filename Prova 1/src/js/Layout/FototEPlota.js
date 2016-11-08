
import { Link } from "react-router";
import React, { Component } from 'react';

export default class FototEPlota extends React.Component {
	render() {
		var foto = this.props.Foto.toString();
		const styleImg ={
			maxWidth:"300px",
			maxHeight:"100%",
		}
		const styleDiv={
			border: "1px solid black",
			maxWidth:"400px",
			height:"400px",
			margin: "0 auto",
			textAlign: "center",
			padding:"20px",
		}
		return(
			<div style={styleDiv}>
				<img src={foto} style={styleImg}/>
			</div>
			);
	}
}