isLoggedin = false;

function newvalidate() {
    var uname = document.forms["login-form"]["username"].value;
    var pswd = document.forms["login-form"]["password"].value;
    var role = document.forms["login-form"]["position"].value;
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if(xhttp.readyState = 4 && xhttp.status == 200)
              isLoggedin = xhttp.responseText;
      };
      xhttp.open("GET", "php/db_connection.php?action=is_logged_in" + uname + "&password=" + pswd, "&position=" + role,false);
      xhttp.send();
 
  }

function validateCredentials() {
    if(isLoggedin == "true"){
    alert("Username or password or role invalid!");
      return true;
    }
    alert(isLoggedin)
    return false;
  }

function validateForm(){
  var password = document.getElementsByName("password").value;
  var passwordConfirm = document.getElementsByName("password-confirm").value;
        if (password !== passwordConfirm) {
            alert("Password and Confirm Password must match.");
            return false; // Prevent the form from submitting
        }
        return true; // Allow the form to submit
}
  