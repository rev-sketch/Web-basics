function notNull(text, error) {
    var result = document.getElementById(error);
    result.style.display = "block";
    if(text < 0) {
      result.innerHTML = "Invalid!";
      return false;
    }
    else if(text.trim() == "") {
      result.innerHTML = "Must be filled out!";
      return false;
    }
    result.style.display = "none";
    return true;
  }
  
  function validateName(name, error) {
    var result = document.getElementById(error);
    result.style.display = "block";
    if(name.trim() == "") {
      result.innerHTML = "Must be filled out!";
      return false;
    }
    result.innerHTML = "Must contain only letters!";
    for(var i = 0; i < name.length; i++)
      if(!((name[i] >= 'a' && name[i] <= 'z') || (name[i] >= 'A' && name[i] <= 'Z') || name[i] == ' '))
        return false;
    result.style.display = "none";
    return true;
  }
  
  function validateContactNumber(contact_number, error) {
    var result = document.getElementById(error);
    result.style.display = "block";
    if(contact_number.length < 10) {
      result.innerHTML = "Must contain atleast 10 digits!";
      return false;
    }
    else
      result.style.display = "none";
    return true;
  }
  
  function addClient() {
    document.getElementById("client_acknowledgement").innerHTML = "";
    document.getElementById("client_acknowledgement1").innerHTML = "";
    var client_name = document.getElementById("client_name");
    var contact_number = document.getElementById("client_contact_number");
    var client_email = document.getElementById("client_email");
    var client_address = document.getElementById("client_address");
   
    console.log(client_name,contact_number,client_email,client_address);

    if(!validateName(client_name.value, "name_error"))
      client_name.focus();

    // else if(!validateName(agent_name.value, 'agent_name_error'))
    //   agent_name.focus();
    
    else {
      var xhttp2 = new XMLHttpRequest();
      xhttp2.onreadystatechange = function() {
        if(xhttp2.readyState = 4 && xhttp2.status == 200)
          document.getElementById("client_acknowledgement1").innerHTML = xhttp2.responseText;
      };
      xhttp2.open("GET", "php/send_email.php?email=" + client_email.value , true);
      xhttp2.send();

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if(xhttp.readyState = 4 && xhttp.status == 200)
          document.getElementById("client_acknowledgement").innerHTML = xhttp.responseText;
      };
      xhttp.open("GET", "php/add_new_client.php?name=" + client_name.value + "&contact_number=" + contact_number.value + "&email=" + client_email.value + "&address=" + client_address.value  , true);
      xhttp.send();

      var xhttp3 = new XMLHttpRequest();
      xhttp3.onreadystatechange = function() {
        if(xhttp3.readyState = 4 && xhttp3.status == 200)
          document.getElementById("client_acknowledgement2").innerHTML = xhttp3.responseText;
      };
      xhttp3.open("GET", "php/send_sms.php?contact_number=" + contact_number.value , true);
      xhttp3.send();
  
    }
    return false;
  }


