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
			id: "0",
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

		const { location } = this.props;
		const { query } = location;
		var { id } = query;
		var Zgjedhja;

		var temp = Store1.getAll();
		for (var i = temp.length - 1; i >= 0; i--) {
			if(temp[i].id==id){
				Zgjedhja=temp[i];
			}
		}

		const vendi = Zgjedhja.Vendi;
		const madhesia = Zgjedhja.Madhesia;
		const cmimi = Zgjedhja.Cmimi;
		const nrDhomave = Zgjedhja.nrDhomave;
		const nrCel = Zgjedhja.nrCel;
		const email = Zgjedhja.Email;
		const kati = Zgjedhja.Kati;
		const lloji = Zgjedhja.Lloji;
		const emri = Zgjedhja.Emri_i_Plote;
		const mobilimi = Zgjedhja.Mobilimi;
		const ballkone = Zgjedhja.Numri_Ballkoneve;
		const parkimi = Zgjedhja.Parkim;
		const orjentimi = Zgjedhja.Orientimi;
		const pershkrimi = Zgjedhja.Pershkrimi;

		const foto = Zgjedhja.Img;
		

		const Obj_Fotot = foto.map((el,i) => {
			return <FototEPlota key={i} Foto={el}/>
		}); 

	    return (
	      <div class="container">
	      	<div>
	      		{Obj_Fotot[this.state.nr]}
	      	</div>
	      	<div style={{textAlign:"center"}}>
	      		{this.state.nr+1}/{Obj_Fotot.length}
	      	</div>
	      	<div style={btnPara}>
	      		<button class="btn btn-default" onClick={this.klikoPara.bind(this)}>Para</button>
	      	</div>
	      	<div style={btnPas}>
	      		<button class="btn btn-default" onClick={this.klikoPas.bind(this)}>Pas</button>
	      	</div>
	      	<div style={{marginTop:"60px"}}>
	      		 <ul class="list-group" style={{textAlign:"left",fontSize:"20px"}}>
					  <li class="list-group-item">Vendndodhja: {vendi}</li>
					  <li class="list-group-item">Madhesia Apartamentit: {madhesia}</li>
					  <li class="list-group-item">Cmimi Apartamentit: {cmimi}</li>
					  <li class="list-group-item">Numri i Dhomave: {nrDhomave}</li>
					  <li class="list-group-item">Emri, Mbiemri: {emri}</li>
					  <li class="list-group-item">Numri i Celularit: {nrCel}</li>
					  <li class="list-group-item">E-mail: {email}</li>
					  <li class="list-group-item">Lloji: {lloji}</li>
					  <li class="list-group-item">Kati: {kati}</li>
					  <li class="list-group-item">Mobilimi: {mobilimi}</li>
					  <li class="list-group-item">Ballkone: {ballkone}</li>
					  <li class="list-group-item">Parkimi: {parkimi}</li>
					  <li class="list-group-item">Orientimi: {orjentimi}</li>
					  <li class="list-group-item">Pershkrimi: {pershkrimi}</li>
				</ul>
	      	</div>
	      	<div>
	      	</div>
	      </div>
	    );
	}
}