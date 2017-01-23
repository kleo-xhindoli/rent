import React from "react";
import { Link } from "react-router";

export default class Nav extends React.Component {


	Home(){

	}

	render(){

		return(
			<div class="container">
		      <nav class="navbar navbar-light">

		        
		        <a class="navbar-brand" href="#">
		        	<img src={"./js/Layout/Images/logo.jpg"} class="img-fluid" style={{width:"70px"}} ></img>
		        </a>

		        
		        <ul class="nav navbar-nav pull-xs-right">
		          <li class="nav-item">
		          	<Link class="nav-link btn btn-primary" to="/">Home</Link>
		          </li>
		          <li class="nav-item">
		            <Link class="nav-link btn btn-primary" to="regjistrohu">Regjistrohu</Link>
		          </li>
		          
		        </ul>
		      </nav>
		    </div>
		);
	}

}