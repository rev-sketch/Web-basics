
<?php
session_start(); 


function myValidate()
{
    require "php/db_connection.php";
    if ($conn) {
        $username = $_POST["username"];
        $password = $_POST["password"];
        $role = $_POST["position"];
        

        $query = "SELECT * FROM login WHERE username = '$username' AND password = '$password' AND role = '$role'";

        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_array($result);
        if ($row) {
            if ($row['role'] == 'admin') {
                $_SESSION["userlogin"] = $_POST["username"];
                header("Location:admin.php");
            }
            else if ($row['role'] == 'agent') {
                $_SESSION["userlogin"] = $_POST["username"];
                $result1= mysqli_query($conn,"SELECT * FROM agent WHERE USERNAME ='$username'");
                $row1= mysqli_fetch_array($result1);
                $_SESSION["username"]=$row1['NAME'];
                header("Location:agent.php");
            }
            
        } else {
            
            echo "<script>
            alert('invalid credentials');
            window.location.href='/';
            </script>";

        }

    }
}

function writeMsg() {
    echo "Hello world!";
  }
  

myValidate();

?>