import React from "react";

import Store1 from "./Stores/Store1"
import Artikulli from "./Artikulli";
import Madhesia from "./Madhesia";
import Cmimi from "./cmimi";
import FototEPlota from "./FototEPlota";

export default class Postimi extends React.Component {
	constructor(){
		super();
		this.state = {
			nr: "0",
		};
	}
	klikoPas()
	{
		var i = this.state.nr;
		var j = this.props.location.query.NrF;
		i++;
		if(i>j-1){
			i=0;
		}
		this.setState({nr:i});
		console.log(i);
	}
	klikoPara()
	{
		var i = this.state.nr;
		var j = this.props.location.query.NrF;
		i--;
		if(i<0){
			i=j-1;
		}
		this.setState({nr:i});
		console.log(i);
	}

	render(){
		/*const vendi = this.props.params.Vendi;
		const madhesia = this.props.params.Madhesia;
		const cmimi = this.props.params.Cmimi;
		const foto = this.props.params.Foto;
		const id = this.props.params.ID;
		*/
		var btnPas = {
			float:"right"
		}
		var btnPara = {
			float:"left"
		}
		var divS ={
			maxWidth:"90%",
			margin:"0 auto",
			textAlign: "left",
		}
		var divB ={
			border: "3px solid rgba(100,100,100,0.6)",
			width:"60%",
			minWidth:"410px",
			margin:"0 auto",
		}
		const { location } = this.props;
		const { query } = location;
		const { id } = query;
		var obj=null;

		var temp = Store1.getAll();
		for (var i = temp.length - 1; i >= 0; i--) {
			if(temp[i].id==id){
				obj=temp[i];
			}
		}

		const vendi = obj.Vendi;
		const madhesia = obj.Madhesia;
		const cmimi = obj.Cmimi;
		const nrDhomave = obj.nrDhomave;
		const nrCel = obj.nrCel;
		const foto = obj.Img;

		const Objektet = foto.map((el,i) => {
			return <FototEPlota key={i} Foto={el}/>
		}); 

	    return (
	      <div >
	      	<div style={divB}>
	      		<br></br>
	      		{Objektet[this.state.nr]}
	      		<br></br>
	      		<div>
	      			{this.state.nr+1}/{this.props.location.query.NrF}
	      		</div>
	      		<br></br>
	      		<div style={divS}>
	      			<button onClick = {this.klikoPara.bind(this)} style={btnPara}>Para</button>
	      			<button onClick = {this.klikoPas.bind(this)} style={btnPas}>Pas</button>
	      		</div>
	      		<div style={divS}>
	      			<br></br>
      				<li><h2>Vendi : {vendi}</h2></li>
	      			<li><h2>Madhesia : {madhesia}</h2></li>
	      			<li><h2>Cmimi : {cmimi}</h2></li>
	      			<li><h2>Nr Dhomave : {nrDhomave}</h2></li>
	      			<li><h2>Nr Cel : {nrCel}</h2></li>
	      		</div>
	      	</div>
	      </div>
	    );
	}
}