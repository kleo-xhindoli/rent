
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <script
      src="https://code.jquery.com/jquery-3.1.1.js"
      crossorigin="anonymous"></script>
	  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <script src="https://npmcdn.com/axios/dist/axios.min.js"></script>
    <title>React</title>
    

    <!-- Bootstrap 4 alpha CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/css/bootstrap.min.css" crossorigin="anonymous">


    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"  crossorigin="anonymous"></script>

    <!-- Tether -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js"  crossorigin="anonymous"></script>

    <!-- Bootstrap 4 Alpha JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/js/bootstrap.min.js" crossorigin="anonymous"></script>

    <!-- Initialize Bootstrap functionality -->
    <script>
    // Initialize tooltip component
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    // Initialize popover component
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
    </script>


    <link href="./assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="./assets/css/custom.css" rel="stylesheet">
    <style type="text/css">

      .nav-link.btn.btn-primary{
        color: white;
      }
      .nav-link.btn.btn-primary:hover{
        color: white;
      }

      .carousel-control.left, {
          background-image: linear-gradient( to right, gray, rgba(255,255,255,.15) 65% );
      }
      .carousel-control.right{
        background-image: linear-gradient( to left, gray, rgba(255,255,255,.15) 80% );
      }
      .footer {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
      }
      button{
        cursor: pointer;
      }
      body {
        position: relative;
        margin: 0;
        padding-bottom: 6rem;
        min-height: 100%;
      }
      html {
        height: 100%;
        box-sizing: border-box;
      }
      .form-group {
          margin: 0 auto;
          padding-bottom: 20px;
      }
      .card-title{
        text-align: center;
      }
      .form-control{
        width: 50%
      }
    </style>
  </head>
  <body>
    <div id="app" style="margin: 0 auto;"></div>
    <script src="client.min.js"></script>

    
    <div class="footer " style="background-color: black; color: white;">
      <div class="container-fluid">
            <div>
                <div class="col-lg-12">
                    <div class="col-md-4">
                        <br>
                        <p style="font-size: 11px;">Copyright &copy; Rei Pano 2016</p>
                    </div>
                    <div class="col-md-4">
                        <br>
                        <p style="font-size: 11px;">E-mail: reipano123@gmail.com</p>
                    </div>
                </div>
            </div>    
        </div>
    </div>
    
    
  </body>

</html>