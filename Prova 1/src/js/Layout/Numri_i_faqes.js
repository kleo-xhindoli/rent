import React from "react";
import * as Actions from "./Actions/Actions"

export default class Numri_i_faqes extends React.Component {
	shkoteFaqia(){
		Actions.ShkoTeFaqia(this.props.Numri);
	}
	render() {
		const Butoni = {
			float: "left",
		}
		var numri = this.props.Numri +1;
		return(
			<div style={Butoni}>
					<button onClick={this.shkoteFaqia.bind(this)}>{numri}</button>
			</div>
			);
	}
}