<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

  <!-- Popper JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>

<?php
$back = false;
require "db_connection.php";
if ($conn) {
    $name = ucwords($_POST["name"]);
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $username = $_POST["username"];
    $password = $_POST["password"];

    $query = "SELECT * FROM agent WHERE USERNAME = '$username'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_array($result);
    if ($row) {
        ?>
      <div class="row">
          <div class="col-md-12" style="background-color: red;margin: 0 auto;">
            <h1 style="text-align: center;">Agent with Username <?php echo $username ?> already exists!</h1>
        </div>
      </div>
      <?php
      $back = true;
    }

    $query = "SELECT * FROM agent WHERE EMAIL = '$email'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_array($result);

    if ($row && !$back) {
      ?>
      <div class="row">
        <div class="col-md-12" style="background-color: red;margin: 0 auto;">
          <h1 style="text-align: center;">Agent with Email Id <?php echo $email ?> already exists!</h1>
        </div>
      </div>
      <?php
      $back = true;
    }

    $query = "SELECT * FROM agent WHERE CONTACT_NUMBER = '$phone'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_array($result);

    if ($row && !$back) {
        ?>
      <div class="row">
          <div class="col-md-12" style="background-color: red;margin: 0 auto;">
            <h1 style="text-align: center;">Agent with Phone No <?php echo $phone ?> already exists!</h1>
        </div>
      </div>
      <?php
      $back = true;

    }

   
    if ($back == true) {
      ?>
      <div class="border border-light p-3 mb-4">
        <div class="text-center">
          <button type="button" class="btn btn-danger"  onclick="history.go(-1);">Back</button>
        </div>
      </div>
      <?php
    } else {

      $query = "INSERT INTO agent (USERNAME, NAME,EMAIL, CONTACT_NUMBER ) VALUES('$username', '$name','$email', '$phone' )";
      $result = mysqli_query($conn, $query);
      if (!empty($result)) {
        $query = "INSERT INTO login (username,password, role) VALUES ('$username', '$password', 'agent')";
        $result = mysqli_query($conn, $query);
        if (!empty($result)) {
          ?>
          <div class="row">
            <div class="col-md-12" style="background-color: green;margin: 0 auto;">
                <h1 style="text-align: center;"><?php echo $username ?> Added successfully...</h1>
            </div>
          </div>
          <div class="border border-light p-3 mb-4">
            <div class="text-center">
              <button type="button" class="btn btn-success"  onclick="history.go(-1);">Back</button>
            </div>
          </div>
          <?php
        } else {
          ?>
          <div class="row">
            <div class="col-md-12" style="background-color: green;margin: 0 auto;">
                <h1 style="text-align: center;">Error: <?php echo mysqli_error($conn) ?></h1>
            </div>
          </div>
          <button onclick="history.go(-1);">Back</button>
          <div class="border border-light p-3 mb-4">
            <div class="text-center">
              <button type="button" class="btn btn-success"  onclick="history.go(-1);">Back</button>
            </div>
          </div>
          <?php
        }
      }
    }
}
?>