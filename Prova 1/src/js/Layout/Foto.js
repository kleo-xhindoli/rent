
import { Link } from "react-router";
import React, { Component } from 'react';

export default class Foto extends React.Component {
	render() {
		var foto = this.props.Foto.toString();
		var Style ={
			height:"60%",
			width:"60%",
		}
		return(
			<div>
				<img src={foto}  style={Style}/>
			</div>
			);
	}
}