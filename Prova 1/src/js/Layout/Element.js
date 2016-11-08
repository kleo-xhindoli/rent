import React from "react";
import { Link } from "react-router";

import Artikulli from "./Artikulli";
import Madhesia from "./Madhesia";
import Cmimi from "./cmimi";
import Foto from "./Foto";
import Store1 from "./Stores/Store1"


export default class Element extends React.Component {

	render() {
		const vendi = this.props.Vendi;
		const madhesia = this .props.Madhesia;
		const cmimi = this.props.Cmimi;
		const foto = this.props.Img[0];
		const id = this.props.id;
		const nrf = this.props.NrF;
		const { location } = this.props;

		var Style ={
			border: "1px solid black",
			width:"90%",
			maxWidth:"700px",
			height:"90%",
			maxHeight:"700px",
			margin: "0 auto",
			textAlign: "center",
			padding:"20px",
		}
		return(
			<div>
				<br></br>	
				<div class="row">
		            <div class="col-lg-12">
		            	<div style={Style}>
			            	<Foto Foto = {foto} />
			              	<Madhesia Madhesia = { madhesia } />
							<Cmimi Cmimi = {cmimi}/>
							<Artikulli Vendi = {vendi}/>
							<Link to="element" query={{ id: id,NrF:nrf}}>Shiko Me Shume</Link>
		            	</div>
					</div>	
				</div>
				<br></br>	
			</div>
		);
	}
}