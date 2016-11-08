import React from "react";
import { Link } from "react-router";

import Elementi from "./Element";
import Store1 from "./Stores/Store1"
import * as Actions from "./Actions/Actions"

export default class Mundesite_E_Zgjedhjes extends React.Component {

	constructor()
	{
		super();
		this.getEl = this.getEl.bind(this);
		this.state = {
			Elementet: Store1.getAll(),
		};
	}
	componentWillMount(){
		Store1.on("change", this.getEl);
	}
	componentWillUnmount(){
		Store1.removeListener("change",this.getEl);
	}
	NextPage(){
		Actions.NextPage();
	}
	getEl(){
		this.setState({
			Elementet: Store1.getAll(),
		});
	}
	render() {
		const s = {
			textAlign:"center",
			color: "black",
			background: "rgba(100,100,100,0.6)",
			height:"70px",
			padding:"15px"
		}
		const { Elementet } = this.state;
		const Objektet = Elementet.map((el,i) => {
			return <Elementi key={i} {...el}/>
		});
		return(
			<div>
				<div><h1 style={s}>DuaShpi.com</h1></div>
				<div>
		            <div>
		              	{Objektet}
					</div>
					<button	onClick={this.NextPage.bind(this)}>Faqia Tjeter</button>	
				</div>
				
				
			</div>
			);
	}

}