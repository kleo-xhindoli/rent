<?php
	$lidhja = mysqli_connect('localhost', '' ,'','databaza');
		  
	$temp = array();

	$Ndodhet = mysqli_query($lidhja,"SELECT `ID`, `title`, `price`, `area`, `rooms`, `location`, `zone`, `category`, `floor`, `gallery`, `phone_no`, `email`, `full_name`, `balcony_no`, `orientation`, `has_parking`, `is_furnished`, `has_user`, `featured`, `available` FROM `apartamentet` WHERE featured ='true' LIMIT 6");
	if(mysqli_num_rows($Ndodhet) > 0)
	  {
		  while($row = mysqli_fetch_assoc($Ndodhet))
		 {
			 array_push($temp, $row);
		 }
		 echo json_encode($temp);
	  }
	  else {
		 echo json_encode($temp);
	  }


?>