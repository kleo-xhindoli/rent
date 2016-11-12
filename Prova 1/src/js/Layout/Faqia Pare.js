import React from "react";
import { Link } from "react-router";

import Elementi from "./Element";
import Store1 from "./Stores/Store1"
import * as Actions from "./Actions/Actions"

export default class FaqiaPare extends React.Component {
	constructor(){
		super();
		this.state = {
			cmimi:"",
			madhesia:"",
			vendi:"",
			nrDhomave:"",
			lloji:"",
			mobilimi:"",
		};
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
		Actions.Sort(this.state.vendi, this.state.madhesia, this.state.cmimi, this.state.nrDhomave, this.state.lloji, this.state.mobilimi);
	}

	render() {
		const styleDiv2 = {
			textAlign:"left",
			border:"3px solid rgba(100,100,100,0.6)",
			backgroundColor:"rgba(255,255,255,0.6)",
			color:"black",
			marginTop: "40px"
		}
		const s = {
			textAlign:"center",
			color: "white",
			background: "rgba(100,100,100,0.6)",
			height:"70px",
			padding:"15px"
		}
		
		return(
				<div class="container" >
					<div>
						<h1 style={s}>DuaShpi.com</h1>
					</div>
						<div style = {styleDiv2}>
							<div class="row" style={{textAlign:"center",marginTop:"30px"}}>
								<div class="col-sm-4 col-md-4" style={{padding:"30px"}}>
									<h1 style={{color:"black"}}>Cmimi Deri Ne</h1>
									<select onChange={this.handleCmimin.bind(this)} style={{width:"135px"}}>
										<option value="">Zgjidh Cmimin</option>
										<option value="100">100$</option>
										<option value="150">150$</option>
										<option value="200">200$</option>
										<option value="250">250$</option>
										<option value="300">300$</option>
										<option value="350">350$</option>
										<option value="400">400$</option>
										<option value="450">450$</option>
										<option value="500">500$</option>
										<option value="550">550$</option>
									</select>
								</div>
								<div class="col-sm-4 col-md-4" style={{padding:"30px"}}>
									<h1 style={{color:"black"}}>Madhesia</h1>
									<select onChange={this.handleMAdhesia.bind(this)} style={{width:"135px"}}>
										<option value="">Zgjidh Madhesin</option>
										<option value="50">50m</option>
										<option value="100">100m</option>
										<option value="150">150m</option>
										<option value="200">200m</option>
										<option value="250">250m</option>
										<option value="300">300m</option>
										<option value="350">350m</option>
									</select>
								</div>
								<div class="col-sm-4 col-md-4" style={{padding:"30px"}}>
									<h1 style={{color:"black"}}>Vendi</h1>
									<select onChange={this.handleVendi.bind(this)} style={{width:"135px"}}>
										<option value="">Zgjidh Vendin</option>
										<option value="Bllok">Bllok</option>
										<option value="Selit">Selit</option>
										<option value="Medrese">Medrese</option>
										<option value="Selit e Vogel">Selit e Vogel</option>
										<option value="Dajt">Dajt</option>
										<option value="Kamez">Kamez</option>
										<option value="Myslym Shyr">Myslym Shyr</option>
									</select>
								</div>
								<div class="col-sm-4 col-md-4" style={{padding:"30px"}}>
									<h1 style={{color:"black"}}>Numri Dhomave</h1>
									<select onChange={this.handleDhomat.bind(this)} style={{width:"135px"}}>
										<option value="">Zgjidh Numrin e Dhomave</option>
										<option value="1+1">1+1</option>
										<option value="2+1">2+1</option>
										<option value="3+1">3+1</option>
										<option value="4+1">4+1</option>
									</select>
								</div>
								<div class="col-sm-4 col-md-4" style={{padding:"30px"}}>
									<h1 style={{color:"black"}}>Lloji Shtepis</h1>
									<select onChange={this.handleLlojin.bind(this)} style={{width:"135px"}}>
										<option value="">Zgjidh Llojin</option>
										<option value="Shtepi Private">Shtepi Private</option>
										<option value="Apartament">Apartament</option>
									</select>
								</div>
								<div class="col-sm-4 col-md-4" style={{padding:"30px"}}>
									<h1 style={{color:"black"}}>Mobilimi</h1>
									<select onChange={this.handleMobilimi.bind(this)} style={{width:"135px"}}>
										<option value="">Zgjidh Mobilimin</option>
										<option value="E Mobiluar">E Mobiluar</option>
										<option value="E PaMobiluar">E PaMobiluar</option>
									</select>
								</div>
								<div class="col-sm-4 col-md-4" ></div>
								<div class="col-sm-4 col-md-4" style={{marginTop:"30px", fontSize:"20px", padding:"20px"}}>
									<Link class="btn btn-primary" to="mundesit" onClick={this.click.bind(this)} >Shiko Me Shume</Link>
								</div>
							<br></br>
							</div>
						</div>
						<br></br>
				</div>
			);
	}

}