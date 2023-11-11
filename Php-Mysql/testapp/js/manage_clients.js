function deleteClient(id) {
    var confirmation = confirm("Are you sure?");
    if(confirmation) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if(xhttp.readyState = 4 && xhttp.status == 200)
          document.getElementById('clients_div').innerHTML = xhttp.responseText;
      };
      xhttp.open("GET", "php/manage_clients.php?action=delete&id=" + id, true);
      xhttp.send();
    }
  }
  
  function editClient(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState = 4 && xhttp.status == 200)
        document.getElementById('clients_div').innerHTML = xhttp.responseText;
    };
    xhttp.open("GET", "php/manage_clients.php?action=edit&id=" + id, true);
    xhttp.send();
  }
  
  function updateClient(id) {
    var client_name = document.getElementById("client_name");
    var contact_number = document.getElementById("client_contact_number");
    var client_address = document.getElementById("client_address");
    var agent_name = document.getElementById("client_agents_name");
    if(!validateName(client_name.value, "name_error"))
      client_name.focus();
    else if(!validateName(agent_name.value, 'agent_name_error'))
      agent_name.focus();
    else {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if(xhttp.readyState = 4 && xhttp.status == 200)
          document.getElementById('clients_div').innerHTML = xhttp.responseText;
      };
      xhttp.open("GET", "php/manage_clients.php?action=update&id=" + id + "&name=" + client_name.value + "&contact_number=" + contact_number.value + "&address=" + client_address.value + "&agent_name=" + agent_name.value , true);
      xhttp.send();
    }
  }
  
  function cancel() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState = 4 && xhttp.status == 200)
        document.getElementById('clients_div').innerHTML = xhttp.responseText;
    };
    xhttp.open("GET", "php/manage_clients.php?action=cancel", true);
    xhttp.send();
  }
  
  function searchClient(text) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState = 4 && xhttp.status == 200)
        document.getElementById('clients_div').innerHTML = xhttp.responseText;
    };
    xhttp.open("GET", "php/manage_clients.php?action=search&text=" + text, true);
    xhttp.send();
  }
  