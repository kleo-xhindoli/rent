<?php
		  $lidhja = mysqli_connect('localhost', '' ,'','databaza');
		  
		  $temp = array();

		  $Vendi = $_POST['Vendi'];
		  $Madhesia = $_POST['Madhesia'];
		  $Cmimi = $_POST['Cmimi'];
		  $Dhomat = $_POST['Dhomat'];
		  $LLoji = $_POST['LLoji'];
		  $Mobilimi = $_POST['Mobilimi'];


		  $Ndodhet = mysqli_query($lidhja,"SELECT * FROM apartamentet WHERE available='true' AND approved = 'true' ");
		  

			while($row = mysqli_fetch_array($Ndodhet)){
				if(strpos($row ['zone'], $Vendi )!==false && strpos($row ['rooms'], $Dhomat )!==false && strpos($row ['category'], $LLoji )!==false && strpos($row ['is_furnished'], $Mobilimi )!==false){
						if(substr($Madhesia, 0, -1) >= substr($row ['area'], 0, -1) && substr($Cmimi, 0, -1)>= substr($row ['price'], 0, -1)){
							array_push($temp, $row);
						}
				}
			}
		  echo json_encode($temp);
/*
		  if(mysqli_num_rows($Ndodhet) > 0)
		  {
			  while($row = mysqli_fetch_assoc($Ndodhet))
			 {
				 array_push($temp, $row);
			 }
			 echo json_encode($temp);
		  }
		  else {
    		 echo "0 results";
		  }
		  */
		  
?>