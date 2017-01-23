import React from "react";

import Store1 from "./Stores/Store1"
import Artikulli from "./Artikulli";
import Madhesia from "./Madhesia";
import Cmimi from "./cmimi";
import FototEPlota from "./FototEPlota";

export default class Postimi extends React.Component {
	constructor(){
		super();
		this.getEl = this.getEl.bind(this);
		this.state = {
			id: "0",
			nr: "0",
			all: Store1.getAll(),
		};
	}

	componentWillMount(){
		Store1.on("change", this.getEl);
	}
	componentWillUnmount(){
		Store1.removeListener("change",this.getEl);
	}

	getEl(){
		this.setState({
			all: Store1.getAll(),
		});
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

		var temp = [];
		var vendi = "";
		var cmimi = "";
		var madhesia = "";
		var nrDhomave = "";
		var nrCel = "";
		var email = "";
		var kati = "";
		var lloji = "";
		var emri = "";
		var mobilimi = "";
		var orjentimi = "";
		var pershkrimi = "";
		var foto = [];
		var Obj_Fotot = [];
		var ballkone = "";
		var parkimi = "";
		var exp_date = "";
		var titulli = "";

		try{

			const { location } = this.props;
			const { query } = location;
			var { id } = query;
			var Zgjedhja = [];

			temp = this.state.all;
			for (var i = temp.length - 1; i >= 0; i--) {
				if(temp[i].ID==id){
					Zgjedhja=temp[i];
				}
			}

			titulli=Zgjedhja.title;
			vendi = Zgjedhja.zone.substring(0,Zgjedhja.zone.length-1);
			madhesia = Zgjedhja.area;
			cmimi = Zgjedhja.price;
			nrDhomave = Zgjedhja.rooms.substring(0,Zgjedhja.rooms.length-1);
			nrCel = Zgjedhja.phone_no;
			email = Zgjedhja.email;
			kati = Zgjedhja.floor;
			lloji = Zgjedhja.category.substring(0,Zgjedhja.category.length-1);
			emri = Zgjedhja.full_name;
			mobilimi = Zgjedhja.is_furnished;
			ballkone = Zgjedhja.balcony_no;
			parkimi = Zgjedhja.has_parking;
			orjentimi = Zgjedhja.orientation;
			pershkrimi = Zgjedhja.description;
			exp_date = Zgjedhja.expiration_date;

			foto = [];
			var tempf = Zgjedhja.gallery;
			var start = 0;

			for (var i = 0; i < tempf.length; i++) {
				if(tempf.charAt(i)==","){
					var t = tempf.substring(start,i);
					start = i+1;
					foto.push(t);
				}
			}

			Obj_Fotot = foto.map((el,i) => {
				return <FototEPlota key={i} Foto={el}/>
			}); 

		}catch(e){

		}
		

	    return (
	      <div class="container">
	      	<div class="col-xs-12">
	      		{Obj_Fotot[this.state.nr]}
	      	</div>
	      	<div style={{textAlign:"center"}}>
	      		{this.state.nr+1}/{Obj_Fotot.length}
	      	</div>
	      	<div style={btnPara}>
	      		<button class="btn btn-primary btn-block" onClick={this.klikoPara.bind(this)}>Para</button>
	      	</div>
	      	<div style={btnPas}>
	      		<button class="btn btn-primary btn-block" onClick={this.klikoPas.bind(this)}>Pas</button>
	      	</div>

	      	<div style={{marginTop:"60px"}}>
	      		 <div class="col-xs-12">
		            <div class="card card-single">
		                <div class="card-block">
		                    <h3 class="card-title">{titulli}</h3>
		                    <h3 class="pull-right"></h3>
		                </div>
		                <ul class="list-group list-group-flush">
		                    <li class="list-group-item">
		                        <span class="fa fa-map-marker card-icon"></span>
		                        <span>{vendi}</span>
		                    </li>
		                    <li class="list-group-item">
		                        <span class="fa fa-money card-icon"></span>
		                        <span>{cmimi}/muaj</span>
		                    </li>
		                    <li class="list-group-item">
		                        <span class="fa fa-home card-icon"></span>
		                        <span>2+1</span>
		                    </li>
		                    <li class="list-group-item">
		                        <span class="fa fa-th-large card-icon"></span>
		                        <span>{madhesia}<sup>2</sup></span>
		                    </li>
		                    <li class="list-group-item">
		                        <span class="fa fa-user-circle card-icon"></span>
		                        <span>{emri}</span>
		                    </li>
		                </ul>
		                <div class="card-block">
		                    <div class="col-md-6" style={{paddingBottom:"10px"}}>
		                        <div class="btn btn-primary btn-block"><span class="fa fa-phone card-icon"></span><span>{nrCel}</span></div>
		                    </div>
		                    <div class="col-md-6">
		                        <div class="btn-primary btn btn-block"><span class="fa fa-envelope card-icon"></span><span>{email}</span></div>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <div class="col-xs-12">
		            <div class="card description">
		                <div class="card-header">
		                    Description
		                </div>
		                <div class="card-block">
		                    <p>{pershkrimi}</p>
		                </div>
		            </div>
		        </div>
		        <div class="col-xs-12">
		            <div class="card description">
		                <div class="card-header">
		                    Informacione mbi banesen
		                </div>
		                <ul class="list-group list-group-flush">
		                    <li class="list-group-item">
		                        <div class="col-xs-6 text-xs-center">
		                            <h6>Lloji i baneses</h6>
		                            <p>{lloji}</p>
		                        </div>
		                        <div class="col-xs-6 text-xs-center">
		                            <h6>Kati</h6>
		                            <p>{kati}</p>
		                        </div>
		                        <div class="clearfix"></div>
		                    </li>
		                    <li class="list-group-item">
		                        <div class="col-xs-6 text-xs-center">
		                            <h6>Numri Dhomave</h6>
		                            <p>{nrDhomave}</p>
		                        </div>
		                        <div class="col-xs-6 text-xs-center">
		                            <h6>Mobilimi</h6>
		                            <p>{mobilimi}</p>
		                        </div>
		                        <div class="clearfix"></div>
	                        </li>
	                        <li class="list-group-item">
		                        <div class="col-xs-6 text-xs-center">
		                            <h6>Ballkone</h6>
		                            <p>{ballkone}</p>
		                        </div>
		                        <div class="col-xs-6 text-xs-center">
		                            <h6>Parkimi</h6>
		                            <p>{parkimi}</p>
		                        </div>
		                        <div class="clearfix"></div>
	                        </li>
	                        <li class="list-group-item">
		                        <div class="col-xs-6 text-xs-center">
		                            <h6>Orientimi</h6>
		                            <p>{orjentimi}</p>
		                        </div>
		                        <div class="clearfix"></div>
		                    </li>
		                </ul>
		            </div>
		        </div>
	      	</div>
	      </div>
	    );
	}
}