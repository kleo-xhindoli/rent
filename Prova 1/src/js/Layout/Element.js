import React from "react";
import { Link } from "react-router";

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
		const lloji = this.props.Lloji;
		const { location } = this.props;

		var Style = {
			border: "1px solid black",
			textAlign:"center",
		}
		return(
			<div style={{textAlign:"center"}}>
				<br></br>	
				<div>
		            <div>
		            	<div style={Style}>
			            	<Foto Foto = {foto}/>
			            	<br></br>
			            	<div>
			            		<p>Vendi: {vendi}</p>
				            	<p>Madhesia: {madhesia}</p>
				            	<p>Cmimi: {cmimi}</p>
				            	<p>Lloji: {lloji}</p>
			            	</div>
							<div class="btn btn-default">
								<Link to="postimi" query={{ id: id,NrF:nrf}}>Shiko Me Shume</Link>
							</div>
		            	</div>
					</div>	
				</div>
				<br></br>	
			</div>
		);
	}
}