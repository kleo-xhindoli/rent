import React from "react";
import { Link } from "react-router";

import Foto from "./Foto";
import Store1 from "./Stores/Store1"


export default class Element extends React.Component {

	render() {
		var promovuar = this.props.featured;
		var titulli = this.props.title;
		var vendi = this.props.zone.substring(0,this.props.zone.length-1);
		const madhesia = this .props.area;
		const cmimi = this.props.price;
		var foto = this.props.gallery;
		var temp = 0;
		for(var i=0;i<foto.length;i++){
			if(foto.charAt(i)==","){
				temp++;
			}
		}
		var index = foto.indexOf(",");
		foto = foto.substring(0,index);
		const id = this.props.ID;
		var nrf = temp;
		const lloji = this.props.category;
		var nrdhomave = this.props.rooms;
		nrdhomave = nrdhomave.substring(0,this.props.rooms.length-1);
		

		var Style = {
			border: "1px solid black",
			textAlign:"center",
		}
		return(
			<div class="col-lg-4 col-md-6 col-xs-12">
	            <div class="card">
	            	<Foto Foto = {foto} Nrf = {nrf} Promovuar = {promovuar}/>
	                
	                <ul class="list-group list-group-flush">
	                	<li class="list-group-item">
	                        <h4 class="card-title">{titulli}</h4>
	                    </li>
	                	<li class="list-group-item">
	                        <span class="fa fa-money card-icon"></span>
	                        <span>{cmimi}</span>
	                    </li>
	                    <li class="list-group-item">
	                        <span class="fa fa-map-marker card-icon"></span>
	                        <span>{vendi}</span>
	                    </li>
	                    <li class="list-group-item">
	                        <span class="fa fa-home card-icon"></span>
	                        <span>{nrdhomave}</span>
	                    </li>
	                    <li class="list-group-item">
	                        <span class="fa fa-th-large card-icon"></span>
	                        <span>{madhesia}<sup>2</sup></span>
	                    </li>
	                    <li class="list-group-item" style={{textAlign:"center"}}>
	                    	<Link class="btn btn-primary" to="postimi" query={{ id: id,NrF:nrf}}>Shiko Me Shume</Link>
	                    </li>
	                </ul>
	            </div>
	        </div>
			// <div style={{textAlign:"center"}}>
			// 	<br></br>	
			// 	<div>
		 //            <div>
		 //            	<div style={Style}>
			//             	<Foto Foto = {foto}/>
			//             	<br></br>
			//             	<div>
			//             		<p>Vendi: {vendi}</p>
			// 	            	<p>Madhesia: {madhesia}</p>
			// 	            	<p>Cmimi: {cmimi}</p>
			// 	            	<p>Lloji: {lloji}</p>
			//             	</div>
			// 				<div class="btn btn-default">
			// 					<Link to="postimi" query={{ id: id,NrF:nrf}}>Shiko Me Shume</Link>
			// 				</div>
		 //            	</div>
			// 		</div>	
			// 	</div>
			// 	<br></br>	
			// </div>
			);
	}
}