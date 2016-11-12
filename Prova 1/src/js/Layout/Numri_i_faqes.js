import React from "react";
import * as Actions from "./Actions/Actions"

export default class Numri_i_faqes extends React.Component {
	shkoteFaqia(){
		Actions.ShkoTeFaqia(this.props.Numri);
	}
	render() {
		var numri = this.props.Numri +1;
		return(
			<div class="btn-group">
					<button onClick={this.shkoteFaqia.bind(this)}>{numri}</button>
			</div>
			);
	}
}