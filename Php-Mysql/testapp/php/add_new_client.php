<?php
session_start();

  require "db_connection.php";
  if($conn) {
    $name = ucwords($_GET["name"]);
    $contact_number = $_GET["contact_number"];
    $email = $_GET["email"];
    $address = ucwords($_GET["address"]);
    $agent_name= $_SESSION["username"];

    $query = "SELECT * FROM client WHERE CONTACT_NUMBER = '$contact_number'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_array($result);
    if($row)
      echo "Client ".$row['NAME']." with contact number $contact_number already exists!";
    else {
      $query = "INSERT INTO client (NAME, CONTACT_NUMBER, EMAIL, ADDRESS, AGENT_NAME) VALUES ('$name', '$contact_number', '$email', '$address', '$agent_name')";
      $result = mysqli_query($conn, $query);
      if(!empty($result))
  			echo "$name added";
  		else
  			echo "Failed to add $name!";
    }
  }
?>
