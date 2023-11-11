function searchAgent(text) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState = 4 && xhttp.status == 200)
        document.getElementById('agents_div').innerHTML = xhttp.responseText;
    };
    xhttp.open("GET", "php/manage_agent.php?action=search&text=" + text, true);
    xhttp.send();
  }
  
function deleteAgent(id) {
    var confirmation = confirm("Are you sure?");
    if(confirmation) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if(xhttp.readyState = 4 && xhttp.status == 200)
          document.getElementById('agents_div').innerHTML = xhttp.responseText;
      };
      xhttp.open("GET", "php/manage_agent.php?action=delete&id=" + id, true);
      xhttp.send();
    }
  }
  
  function editAgent(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState = 4 && xhttp.status == 200)
        document.getElementById('agents_div').innerHTML = xhttp.responseText;
    };
    xhttp.open("GET", "php/manage_agent.php?action=edit&id=" + id, true);
    xhttp.send();
  }
  
  function updateAgent(id) {
    var agent_name = document.getElementById("agent_name");
    var agent_email = document.getElementById("agent_email");
    var agent_contact_number = document.getElementById("agent_contact_number");
    if(!validateName(agent_name.value, "name_error"))
      agent_name.focus();
    // else if(!validateContactNumber(agent_contact_number.value, "contact_number_error"))
    //   agent_contact_number.focus();
    else {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if(xhttp.readyState = 4 && xhttp.status == 200)
          document.getElementById('agents_div').innerHTML = xhttp.responseText;
      };
      xhttp.open("GET", "php/manage_agent.php?action=update&id=" + id + "&name=" + agent_name.value  + "&email=" + agent_email.value + "&phone=" + agent_contact_number.value , true);
      xhttp.send();
    }
  }
  
  function cancel() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState = 4 && xhttp.status == 200)
        document.getElementById('agents_div').innerHTML = xhttp.responseText;
    };
    xhttp.open("GET", "php/manage_agent.php?action=cancel", true);
    xhttp.send();
  }
  

  