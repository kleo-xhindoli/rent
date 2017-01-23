import React from "react";
import { Link } from "react-router";
import Elementi from "./Element";

export default class Slider extends React.Component {


	render(){
		var Objektet1 = [];
		var Objektet2 = [];
		try
		{
			var el = this.props.objektet;
			var el1 = el.slice(0,3);
			var el2 = el.slice(3,6);
			Objektet1 = el1.map((el,i) => {
				return <Elementi key={i} {...el}/>
			});
			Objektet2 = el2.map((el,i) => {
				return <Elementi key={i} {...el}/>
			});
		}catch(e){

		}
		
		return(
			<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
			  <div class="carousel-inner" role="listbox">
			    <div class="carousel-item active">
				    <div class="col-lg-12" style={{paddingLeft:"10%",paddingRight:"10%"}} >
				    	<div >
				    		{Objektet1[0]} 
				    	</div>
				    	<div>
				    		{Objektet1[1]} 
				    	</div>
				    	<div >
				    		{Objektet1[2]} 
				    	</div>
				    </div>
			      
			    </div>
			    <div class="carousel-item">
			    	<div class="col-lg-12" style={{paddingLeft:"10%",paddingRight:"10%"}} >
			    		<div >
				    		{Objektet2[0]} 
				    	</div>
				    	<div >
				    		{Objektet2[1]} 
				    	</div>
				    	<div >
				    		{Objektet2[2]} 
				    	</div>
			    	</div>
			      
			    </div>
			  </div>
			  <a class="left carousel-control" href="#carouselExampleControls" role="button" data-slide="prev">
		        <span class="icon-prev" aria-hidden="true"></span>
		        <span class="sr-only">Previous</span>
		        </a>
		        <a class="right carousel-control" href="#carouselExampleControls" role="button" data-slide="next">
		        <span class="icon-next" aria-hidden="true"></span>
		        <span class="sr-only">Next</span>
		       </a>
			</div>
			);
	}
}