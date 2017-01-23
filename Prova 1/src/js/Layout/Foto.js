
import { Link } from "react-router";
import React, { Component } from 'react';

export default class Foto extends React.Component {

	render() {
		var hiden="none";
		var foto = this.props.Foto.toString();
		var nrf = this.props.Nrf;
		var featured = this.props.Promovuar;
		var style2 = {
			backgroundImage : "url("+foto+") no-repeat",
			backgroundSize: "cover",
		};
		if (featured=="true") {
			hiden="";
		}
		return(
			<div class="card-img-top">
				<div>
					<img src={foto} class="img-slider"  style = {{position:"absolute"}}/>
				</div>
				
			    <div class="head-tag" style={{display:hiden}}>Promovuar</div>
                <div class="gallery-count">
                    <span>{nrf} </span>
                    <span class="fa fa-picture-o"></span>
                </div>
    		</div>
			);
	}
}