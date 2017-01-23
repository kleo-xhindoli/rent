import React from "react";
import { Link } from "react-router";

export default class Regjistrohu extends React.Component {


	render(){

		return(
			<div class="container">

				<div class="card card-block">
				<div class="col-md-2"></div>
				<div class="col-md-8">
					<form encType="multipart/form-data" method="post" action="./a/regjistrohu.php" name="form">
						<h3 class="card-title">Regjistrohu</h3>
						<br/>
						<div class="form-group">
							<h4 class="card-text">Emri, mbiemri</h4>
							<input type="text" name="emrimbiemri" id="emrimbiemri" required="required"  />
						</div>

						<div class="form-group">
							<h4 class="card-text">Username</h4>
							<input type="text" name="username" id="username" required="required"  />
						</div>

						<div class="form-group">
							<h4 class="card-text">Password</h4>
							<input type="text" name="pass1" id="pass1" required="required"  />
						</div>

						<div class="form-group">
							<h4 class="card-text">Rishkruaj password-in</h4>
							<input type="text" name="pass2" id="pass2" required="required"  />
						</div>

						<div class="form-group">
							<h4 class="card-text">Email</h4>
							<input type="text" name="email" id="email" required="required" />
						</div>

						<div class="form-group">
							<h4 class="card-text">Numri cel</h4>
							<input type="text" name="mob_nomber" id="mob_nomber" required="required" />
						</div>
						<hr/>

						<h3 class="card-title">Vendosni informacionin rreth shtepise</h3>
						<br/>

						<div class="form-group">
							<h4 class="card-text">Titulli</h4>
							<input type="text" name="titulli" id="titulli" required="required" />
						</div>

						<div class="form-group">
							<h4 class="card-text">Adresa</h4>
							<input type="text" name="adresa" id="adresa" required="required" />
						</div>

						<div class="form-group">
							<h4 class="card-text">Madhesia</h4>
							<input type="text" name="madhesia" id="madhesia" required="required" /><span>m<sup>2</sup></span>
						</div>

						<div class="form-group">
							<h4 class="card-text">Cmimi</h4>
							<input type="text" name="cmimi" id="cmimi" required="required" /><i class="fa fa-eur" aria-hidden="true"></i>
						</div>

						<div class="form-group">
							<h4 class="card-text">Numri dhomave</h4>
							<select name="nrdhomave" class="form-control" id="exampleSelect2">
						      <option>1+1.</option>
						      <option>2+1.</option>
						      <option>3+1.</option>
						      <option>4+1.</option>
						      <option>Tjeter.</option>
						    </select>
						</div>

						<div class="form-group">
							<h4 class="card-text">Lloi</h4>
							<input type="text" name="lloi" id="lloi" required="required" />
						</div>

						<div class="form-group">
							<h4 class="card-text">Kati</h4>
							<input type="text" name="kati" id="kati" required="required" />
						</div>

						<div class="form-group">
							<h4 class="card-text">Zgjidhni foto per shtepine/apartamentin tuaj</h4>
							<input class="form-control-file" type="file" name="foto[]" id="foto" required="required" multiple />
						</div>

						<hr/>

						<h3 class="card-title">Informacione shtese</h3>
						<br/>

						<div class="form-group">
							<h4 class="card-text">Pershkrim</h4>
							<textarea class="form-control" name="pershkrim" id="pershkrim" rows="5" required="required"></textarea>
						</div>

						<div class="form-group">
							<h4 class="card-text">Parkimi</h4>
							<select name="parkimi" class="form-control" id="exampleSelect2" >
						      <option>Ka parkim.</option>
						      <option>Nuk ka parkim.</option>
						    </select>
						</div>

						<div class="form-group">
							<h4 class="card-text">Numri ballkoneve</h4>
							<input type="text" name="numri_ballkoneve" id="numri_ballkoneve" required="required" />
						</div>

						<div class="form-group">
							<h4 class="card-text">Mobilimi</h4>
							<select name="mobilimi" class="form-control" id="exampleSelect2">
						      <option>E Mobiluar.</option>
						      <option>E PaMobiluar.</option>
						    </select>
						</div>

						<div class="form-group">
							<h4 class="card-text">Orientimi</h4>
							<input type="text" name="orientimi" id="orientimi" required="required" />
						</div>
						<br/>

						<div style={{textAlign:"center"}}>
							<Link to="regjistrimi_ok"><input name="Submit" value="Regjistrohu" type="submit" class="btn btn-primary"/></Link>
						</div>

					</form>
				</div>
				<div class="col-md-2"></div>
					
				</div>

			</div>

			);
	}

}
