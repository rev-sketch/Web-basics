<?php session_start();?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>restory</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>


    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- <script src="bootstrap/js/jquery.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script> -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="shortcut icon" href="images/icon.svg" type="image/x-icon">
    <link rel="stylesheet" href="css/index.css">
    <!-- <script src="js/index.js"></script> -->
    <script src="js/login.js"></script>
    <!-- <script src="js/validateForm.js"></script> -->
  
</head>

<body>
<div class="container">

    <div id="login-form" class="card m-auto p-2">
        <div class="card-body">
            <form name="login-form" class="login-form" action="final_reset.php" method="post" onsubmit="return validateForm()">
                    <div class="logo">
                        <img src="images/login_logo_23.png" style="width:120px;height:120px;" class="profile" />
                        <h1 class="logo-caption"><span class="tweak">Resetting Password</span></h1>
                    </div> <!-- logo class -->

                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-key text-white"></i></span>
                        </div>
                        <input name="password" type="password" class="form-control" placeholder="Enter New Password"
                            onkeyup="validate();" required>
                    </div>

                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-key text-white"></i></span>
                        </div>
                        <input name="password-confirm" type="password" class="form-control" placeholder="Confirm New Password"
                            onkeyup="validate();" required>
                    </div>
                    <div class="input-group form-group">
                        <button class="btn btn-default btn-block btn-custom" >Reset</button>
                    </div>
            </form><!-- form close -->
        </div>
    </div>
</div>
</body>
</html>


