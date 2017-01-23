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
			padding:"10px"
		}
		var Objektet = [];
		var Faqet = [];
		try{
			//Merr te dhena nga store dhe mbush array Faqet me elemente te tipit <NumratEFaqeve>
			const { NumriFaqeve } = this.state;
			Faqet = NumriFaqeve.map((faqia,j) => {
				return <NumratEFaqeve key={j} Numri={faqia}/>
			});
			console.log(NumriFaqeve);

			//Merr te dhena nga store dhe mbush array Objektet me elemente te tipit <Elementi>

			const { Elementet } = this.state;
			Objektet = Elementet.map((el,i) => {
				return <Elementi key={i} {...el}/>
			});
		}catch(e){

		}
		

		return(
			<div class="container">
				
				<div>
		            <div>
		              	{Objektet}
					</div>
					<div class="btn-group col col-md-12" style={{textAlign: "center"}}>
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