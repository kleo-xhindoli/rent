import React from "react";
import { Link } from "react-router";

	export default class Regjistrimi_OK extends React.Component {
		render(){

			return(
				<div class="container">
				    <div class="card" style="text-align: center; margin-top: 20%">
				      <div class="card-title"><h2>Regjistrimi u krye</h2></div>S
					      <div class="card-block">
					      	<Link to="/">Kthehu ne faqen e pare</Link>
					      </div>
				    </div>
				</div>
			);
		}
	}