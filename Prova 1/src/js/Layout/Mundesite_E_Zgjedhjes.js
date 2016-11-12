import React from "react";
import { Link } from "react-router";

import Elementi from "./Element";
import NumratEFaqeve from "./Numri_i_faqes";
import Store1 from "./Stores/Store1"
import * as Actions from "./Actions/Actions"

export default class Mundesite_E_Zgjedhjes extends React.Component {

	constructor()
	{
		super();
		this.getEl = this.getEl.bind(this);
		this.state = {
			Elementet: Store1.getAll(),
			NumriFaqeve: Store1.getNumrinEFaqeve(),
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
	PrevPage(){
		Actions.PreviousPage();
	}
	getEl(){
		this.setState({
			Elementet: Store1.getAll(),
			NumriFaqeve: Store1.getNumrinEFaqeve(),
		});
	}
	render() {
		//Style
		const s = {
			textAlign:"center",
			color: "black",
			background: "rgba(100,100,100,0.6)",
			padding:"15px"
		}

		//Merr te dhena nga store dhe mbush array Faqet me elemente te tipit <NumratEFaqeve>
		const { NumriFaqeve } = this.state;
		const Faqet = NumriFaqeve.map((faqia,j) => {
			return <NumratEFaqeve key={j} Numri={faqia}/>
		});

		//Merr te dhena nga store dhe mbush array Objektet me elemente te tipit <Elementi>

		const { Elementet } = this.state;
		const Objektet = Elementet.map((el,i) => {
			return <Elementi key={i} {...el}/>
		});

		return(
			<div class="container text-center">
				<div><h1 style={s}>DuaShpi.com</h1></div>
				<div>
		            <div style={{textAlign:"center"}}>
		              	{Objektet}
					</div>
					<div class="btn-group">
						<button class="btn-primary" onClick={this.PrevPage.bind(this)}>Faqia Para</button>
						<div class="pagination">
							{Faqet}
						</div>
						<button class="btn-primary"	onClick={this.NextPage.bind(this)}>Faqia Pas</button>
					</div>
				</div>
				
				
			</div>
			);
	}

}