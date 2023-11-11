<?php
  require "db_connection.php";

  if($conn) {
    if(isset($_GET["action"]) && $_GET["action"] == "delete") {
      $id = $_GET["id"];
      $query = "DELETE FROM client WHERE ID = $id";
      $result = mysqli_query($conn, $query);
      if(!empty($result))
    		showClients(0);
    }

    if(isset($_GET["action"]) && $_GET["action"] == "edit") {
      $id = $_GET["id"];
      showClients($id);
    }

    if(isset($_GET["action"]) && $_GET["action"] == "update") {
      $id = $_GET["id"];
      $name = ucwords($_GET["name"]);
      $contact_number = $_GET["contact_number"];
      $address = ucwords($_GET["address"]);
      $agent_name = ucwords($_GET["agent_name"]);
      updateClient($id, $name, $contact_number, $address, $agent_name);
    }

    if(isset($_GET["action"]) && $_GET["action"] == "cancel")
      showClients(0);

    if(isset($_GET["action"]) && $_GET["action"] == "search")
      searchClient(strtoupper($_GET["text"]));
  }

  function showClients($id) {
    require "db_connection.php";
    if($conn) {
      $seq_no = 0;
      $query = "SELECT * FROM client";
      $result = mysqli_query($conn, $query);
      while($row = mysqli_fetch_array($result)) {
        $seq_no++;
        if($row['ID'] == $id)
          showEditOptionsRow($seq_no, $row);
        else
          showClientRow($seq_no, $row);
      }
    }
  }

  function showClientRow($seq_no, $row) {
    ?>
    <tr>
      <td><?php echo $seq_no; ?></td>
      <!-- <td><?php echo $row['ID'] ?></td> -->
      <td><?php echo $row['NAME']; ?></td>
      <td><?php echo $row['CONTACT_NUMBER']; ?></td>
      <td><?php echo $row['ADDRESS']; ?></td>
      <td><?php echo $row['AGENT_NAME']; ?></td>
      <td>
        <button href="" class="btn btn-info btn-sm" onclick="editClient(<?php echo $row['ID']; ?>);">
          <i class="fa fa-pencil"></i>
        </button>
        <button class="btn btn-danger btn-sm" onclick="deleteClient(<?php echo $row['ID']; ?>);">
          <i class="fa fa-trash"></i>
        </button>
      </td>
    </tr>
    <?php
  }

function showEditOptionsRow($seq_no, $row) {
  ?>
  <tr>
    <td><?php echo $seq_no; ?></td>
    <!-- <td><?php echo $row['ID'] ?></td> -->
    <td>
      <input type="text" class="form-control" value="<?php echo $row['NAME']; ?>" placeholder="Name" id="client_name" onkeyup="validateName(this.value, 'name_error');">
      <code class="text-danger small font-weight-bold float-right" id="name_error" style="display: none;"></code>
    </td>
    <td>
      <input type="number" class="form-control" value="<?php echo $row['CONTACT_NUMBER']; ?>" placeholder="Contact Number" id="client_contact_number" onkeyup="validateContactNumber(this.value, 'contact_number_error');">
      <code class="text-danger small font-weight-bold float-right" id="contact_number_error" style="display: none;"></code>
    </td>
    <td>
      <textarea class="form-control" placeholder="Address" id="client_address"><?php echo $row['ADDRESS']; ?></textarea>
      <code class="text-danger small font-weight-bold float-right" id="address_error" style="display: none;"></code>
    </td>
    <td>
      <input type="text" class="form-control" value="<?php echo $row['AGENT_NAME']; ?>" placeholder="Agent's Name" id="client_agents_name" onkeyup="validateName(this.value, 'agent_name_error');">
      <code class="text-danger small font-weight-bold float-right" id="agent_name_error" style="display: none;"></code>
    </td>
    <td>
      <button href="" class="btn btn-success btn-sm" onclick="updateClient(<?php echo $row['ID']; ?>);">
        <i class="fa fa-edit"></i>
      </button>
      <button class="btn btn-danger btn-sm" onclick="cancel();">
        <i class="fa fa-close"></i>
      </button>
    </td>
  </tr>
  <?php
}

function updateClient($id, $name, $contact_number, $address, $agent_name) {
  require "db_connection.php";
  $query = "UPDATE client SET NAME = '$name', CONTACT_NUMBER = '$contact_number', ADDRESS = '$address', AGENT_NAME = '$agent_name' WHERE ID = $id";
  $result = mysqli_query($conn, $query);
  if(!empty($result))
    showClients(0);
}

function searchClient($text) {
  require "db_connection.php";
  if($conn) {
    $seq_no = 0;
    $query = "SELECT * FROM client WHERE UPPER(NAME) LIKE '%$text%'";
    $result = mysqli_query($conn, $query);
    while($row = mysqli_fetch_array($result)) {
      $seq_no++;
      showClientRow($seq_no, $row);
    }
  }
}

?>
