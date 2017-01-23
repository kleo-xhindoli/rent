<?php
	$lidhja = mysqli_connect('localhost', '' ,'','databaza');


	if(isset($_POST['Submit'])){

		$EmriMbiemri =mysqli_real_escape_string($lidhja,  $_POST['emrimbiemri']);
		$Username = mysqli_real_escape_string($lidhja, $_POST['username']);

		$Pass = mysqli_real_escape_string($lidhja, $_POST['pass1']);
		$hash = password_hash($Pass,PASSWORD_BCRYPT);
		$Pass = $hash;

		$Email = mysqli_real_escape_string($lidhja, $_POST['email']);
		$MobNumber = mysqli_real_escape_string($lidhja, $_POST['mob_nomber']);
		$Titulli = mysqli_real_escape_string($lidhja, $_POST['titulli']);
		$Adresa = mysqli_real_escape_string($lidhja, $_POST['adresa']).".";
		$Madhesia = mysqli_real_escape_string($lidhja, $_POST['madhesia'])."m";
		$Cmimi = mysqli_real_escape_string($lidhja, $_POST['cmimi'])."$";
		$NrDhomave = mysqli_real_escape_string($lidhja, $_POST['nrdhomave']);
		$Lloi = mysqli_real_escape_string($lidhja, $_POST['lloi']).".";
		$Kati = mysqli_real_escape_string($lidhja, $_POST['kati']);
		$Pershkrim = mysqli_real_escape_string($lidhja, $_POST['pershkrim']);
		$Parkimi = mysqli_real_escape_string($lidhja, $_POST['parkimi']);
		$NrBallkoneve = mysqli_real_escape_string($lidhja, $_POST['numri_ballkoneve']);
		$Mobilimi = mysqli_real_escape_string($lidhja, $_POST['mobilimi']).".";
		$Orientimi = mysqli_real_escape_string($lidhja, $_POST['orientimi']);


		$Fotot = "";
		$i = 0;
		$upload_path = "../js/Layout/Images/";

		$arrlength = count($_FILES['foto']['name']);

		for($x = 0; $x < $arrlength; $x++) {
			$tmp =explode('.',$_FILES['foto']['name'][$x]); //Nje emer i perkohshem qe do perdoret per gjetjen e llojit te files.		$ext = strtolower(end($tmp)); //Gjen llojin e file-s.
			$ext = strtolower(end($tmp));
			$filename = $Username . $EmriMbiemri . '.' . $ext; //Ndryshon emrin e files qe te korenspondoj me ID.
			$uploadfile = $upload_path . basename($filename);
			$str = substr($uploadfile,1);
			$Fotot=$Fotot.$str.",";
			move_uploaded_file($_FILES['foto']['tmp_name'][$x],$uploadfile);
		}

		$d=strtotime("+3 Months");
		$Exp_Date = date("Y-m-d h:i:sa", $d);
		

		mysqli_query($lidhja,"INSERT INTO apartamentet (ID,title,description,price,area,rooms,zone,category,floor,gallery,phone_no,email,full_name,balcony_no,orientation,has_parking,is_furnished,has_user,approved,expiration_date,password,featured,available,username) VALUES (NULL, '".$Titulli."', '".$Pershkrim."', '".$Cmimi."', '".$Madhesia."', '".$NrDhomave."', '".$Adresa."', '".$Lloi."', '".$Kati."', '".$Fotot."', '".$MobNumber."', '".$Email."', '".$EmriMbiemri."', '".$NrBallkoneve."', '".$Orientimi."', '".$Parkimi."', '".$Mobilimi."', '".false."','".true."', '".$Exp_Date."', '".$Pass."','".true."','".true."','".$Username."')");
	}
	echo '<a href="http://localhost/rootfolder/">Kthehu ne faqen e pare</a>'
?>