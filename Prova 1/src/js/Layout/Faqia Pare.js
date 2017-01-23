import React from "react";
import { Link } from "react-router";

import Elementi from "./Element";
import Slider from "./Slider";
import Store1 from "./Stores/Store1"
import * as Actions from "./Actions/Actions"

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export default class FaqiaPare extends React.Component {
	constructor(){
		super();
		this.getEl = this.getEl.bind(this);
		this.state = {
			cmimi:"999999999$",
			madhesia:"999999999m",
			vendi:".",
			nrDhomave:".",
			lloji:".",
			mobilimi:".",
			featured :Store1.getFeatured(),
		};
	}



	componentWillMount(){
		Store1.on("Featured", this.getEl);
	}
	componentWillUnmount(){
		Store1.removeListener("Featured",this.getEl);
	}
	getEl(){
		this.setState({featured :Store1.getFeatured()});
	}

	handleCmimin(e){
		this.setState({cmimi: e.target.value});
	}
	handleMAdhesia(e){
		this.setState({madhesia: e.target.value});
	}
	handleVendi(e){
		this.setState({vendi: e.target.value});
	}
	handleDhomat(e){
		this.setState({nrDhomave: e.target.value});
	}
	handleLlojin(e){
		this.setState({lloji: e.target.value});
	}
	handleMobilimi(e){
		this.setState({mobilimi: e.target.value});
	}
	click(){
		var Zgedhjet_e_Perdoruesit =[this.state.vendi, this.state.madhesia, this.state.cmimi, this.state.lloji, this.state.nrDhomave, this.state.mobilimi];

		var JSON_Zgjedhjet = JSON.stringify(Zgedhjet_e_Perdoruesit);
		localStorage.setItem('Zgjedhjet',JSON_Zgjedhjet);

		Actions.Sort(this.state.vendi, this.state.madhesia, this.state.cmimi, this.state.nrDhomave, this.state.lloji, this.state.mobilimi);
	}

	render() {
		const styleDiv2 = {
			marginTop: "40px",
			margin:"0 auto",
			width:"80%"
		}
		var Objektet = [];
		var tilulli = "Zgjidhni karakteristikat e shtepise";
		var slider = <Slider/>

		try{
			const { featured } = this.state;
			Objektet = featured.map((el,i) => {
				return <Elementi key={i} {...el}/>
			});
			slider = <Slider objektet = {featured}/>
		}catch(e){

		}
		
		return(
			<div>
				<div class="container">
					<div class="card" style = {styleDiv2}>
						<div class="card-block" style={{textAlign:"center",marginTop:"30px"}}>
							<h4 class="card-title">{tilulli}</h4>
							<div class="col-sm-4 col-md-4" style={{padding:"30px",textAlign:"left"}}>
								<h5 style={{color:"black"}}>Cmimi Deri Ne</h5>
								<select onChange={this.handleCmimin.bind(this)} style={{width:"100%"}}>
									<option value="">Zgjidh Cmimin</option>
									<option value="100$">100$</option>
									<option value="150$">150$</option>
									<option value="200$">200$</option>
									<option value="250$">250$</option>
									<option value="300$">300$</option>
									<option value="350$">350$</option>
									<option value="400$">400$</option>
									<option value="450$">450$</option>
									<option value="500$">500$</option>
									<option value="550$">550$</option>
								</select>
							</div>
							<div class="col-sm-4 col-md-4" style={{padding:"30px",textAlign:"left"}}>
								<h5  style={{color:"black"}}>Madhesia</h5>
								<select onChange={this.handleMAdhesia.bind(this)} style={{width:"100%"}}>
									<option value="">Zgjidh Madhesin</option>
									<option value="50m">50m</option>
									<option value="100m">100m</option>
									<option value="150m">150m</option>
									<option value="200m">200m</option>
									<option value="250m">250m</option>
									<option value="300m">300m</option>
									<option value="350m">350m</option>
								</select>
							</div>
							<div class="col-sm-4 col-md-4" style={{padding:"30px",textAlign:"left"}}>
								<h5 style={{color:"black"}}>Vendi</h5>
								<select onChange={this.handleVendi.bind(this)} style={{width:"100%"}}>
									<option value="">Zgjidh Vendin</option>
									<option value="Bllok">Bllok</option>
									<option value="Selite">Selite</option>
									<option value="Medrese">Medrese</option>
									<option value="Selit e Vogel">Selit e Vogel</option>
									<option value="Dajt">Dajt</option>
									<option value="Kamez">Kamez</option>
									<option value="Myslym Shyr">Myslym Shyr</option>
								</select>
							</div>
							<div class="col-sm-4 col-md-4" style={{padding:"30px",textAlign:"left"}}>
								<h5 style={{color:"black"}}>Numri Dhomave</h5>
								<select onChange={this.handleDhomat.bind(this)} style={{width:"100%"}}>
									<option value="">Zgjidh Numrin e Dhomave</option>
									<option value="1+1">1+1</option>
									<option value="2+1">2+1</option>
									<option value="3+1">3+1</option>
									<option value="4+1">4+1</option>
								</select>
							</div>
							<div class="col-sm-4 col-md-4" style={{padding:"30px",textAlign:"left"}}>
								<h5 style={{color:"black"}}>Lloji Shtepis</h5>
								<select onChange={this.handleLlojin.bind(this)} style={{width:"100%"}}>
									<option value="">Zgjidh Llojin</option>
									<option value="Shtepi Private">Shtepi Private</option>
									<option value="Apartament">Apartament</option>
								</select>
							</div>
							<div class="col-sm-4 col-md-4" style={{padding:"30px",textAlign:"left"}}>
								<h5 style={{color:"black"}}>Mobilimi</h5>
								<select onChange={this.handleMobilimi.bind(this)} style={{width:"100%"}}>
									<option value="">Zgjidh Mobilimin</option>
									<option value="E Mobiluar">E Mobiluar</option>
									<option value="E PaMobiluar">E PaMobiluar</option>
								</select>
							</div>
							<div class="col-sm-4 col-md-4" ></div>
							<div class="col-sm-4 col-md-4" style={{marginTop:"30px", fontSize:"20px", padding:"20px"}}>
								<Link class="btn btn-primary" style={{cursor:"pointer"}} to="mundesit" onClick={this.click.bind(this)} >Shiko Me Shume</Link>
							</div>
						<br></br>
						</div>
					</div>
				</div>
				<div class="container-fluid">
					<div style={{marginTop:"50px"}}>
						{slider}
					</div>
				</div>
			</div>
				
			);
	}

}