import React from "react";
import { Link } from "react-router";

import Elementi from "./Element";
import Store1 from "./Stores/Store1"
import * as Actions from "./Actions/Actions"

export default class Sorting extends React.Component {
	constructor(){
		super();
		this.state = {
			cmimi:"100",
			madhesia:"50",
			vendi:"Bllok"
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
	click(){
		Actions.Sort(this.state.vendi, this.state.madhesia, this.state.cmimi)
	}

	render() {
		const styleDiv2 = {
			width:"40%",
			minWidth:"200px",
			textAlign:"left",
			border:"3px solid rgba(100,100,100,0.6)",
			margin:"0 auto",
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
				<div>
					<div>
						<h1 style={s}>DuaShpi.com</h1>
					</div>
						<div style = {styleDiv2}>
							<div style={{width:"70%",margin:"0 auto"}}>
								<h1 style={{color:"black"}}>Cmimi</h1>
								<select onChange={this.handleCmimin.bind(this)} style={{width:"100px"}}>
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
								<h1 style={{color:"black"}}>Madhesia</h1>
								<select onChange={this.handleMAdhesia.bind(this)} style={{width:"100px"}}>
									<option value="50">50m</option>
									<option value="100">100m</option>
									<option value="150">150m</option>
									<option value="200">200m</option>
									<option value="250">250m</option>
									<option value="300">300m</option>
									<option value="350">350m</option>
								</select>
								<h1 style={{color:"black"}}>Vendi</h1>
								<select onChange={this.handleVendi.bind(this)} style={{width:"100px"}}>
									<option value="Bllok">Bllok</option>
									<option value="Selit">Selit</option>
									<option value="Medrese">Medrese</option>
									<option value="Selit e Vogel">Selit e Vogel</option>
									<option value="Dajt">Dajt</option>
									<option value="Kamez">Kamez</option>
									<option value="Myslym Shyr">Myslym Shyr</option>
								</select>
								<br></br>
								<br></br>
								<div style={{fontSize:"20px",textAlign:"center", backgroundColor:"rgba(40,40,40,0.6)",width:"30%",minWidth:"100px",margin:"0 auto"}}>
								<Link to="mundesit" onClick={this.click.bind(this)} >Shiko Me Shume</Link>
								</div>
							<br></br>
							</div>
						</div>
						<br></br>
				</div>
			);
	}

}