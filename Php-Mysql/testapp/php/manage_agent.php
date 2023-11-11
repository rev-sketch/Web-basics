<?php
  require "db_connection.php";

  if($conn) {
    if(isset($_GET["action"]) && $_GET["action"] == "search")
    searchAgents(strtoupper($_GET["text"]));

    if(isset($_GET["action"]) && $_GET["action"] == "delete") {
      $id = $_GET["id"];
      $query = "DELETE FROM agent WHERE ID = '$id'";
      $query1 = "DELETE FROM login WHERE username = (SELECT USERNAME FROM agent WHERE ID = '$id')";

      $result = mysqli_query($conn, $query);
      $result1 = mysqli_query($conn, $query1);
      if(!empty($result) and !empty($result1) )
    		showAgents(0);
    }

    if(isset($_GET["action"]) && $_GET["action"] == "edit") {
      $id = $_GET["id"];
      showAgents($id);
    }

    if(isset($_GET["action"]) && $_GET["action"] == "update") {
      $id = $_GET["id"];
      $name = ucwords($_GET["name"]);
      $email = $_GET["email"];
      $phone = $_GET["phone"];
      // $username = $_GET["username"];
      // $password = $_GET["password"];
      updateAgent($id, $name,$email, $phone);
    }

    if(isset($_GET["action"]) && $_GET["action"] == "cancel")
      showAgents(0);
  }

  function showAgents($id) {
    require "db_connection.php";
    if($conn) {
      $seq_no = 0;
      $query = "SELECT * FROM agent";
      $result = mysqli_query($conn, $query);
      while($row = mysqli_fetch_array($result)) {
        $seq_no++;
        if($row['ID'] == $id)
          showEditOptionsRow($seq_no,$row);
        else
          showAgentRow($seq_no,$row);
      }
    }
  }

  function showAgentRow($seq_no,$row) {
    ?>
    <tr>
      <td><?php echo $seq_no; ?></td>
      <!-- <td><?php echo $row['ID']; ?></td> -->
      <td><?php echo $row['NAME']; ?></td>
      <td><?php echo $row['EMAIL']; ?></td>
      <td><?php echo $row['CONTACT_NUMBER']; ?></td>
      <td><?php echo date("d/m/y",strtotime($row['DATE_REGISTERED'])) ?></td>

      <td>
        <button href="" class="btn btn-info btn-sm" onclick="editAgent(<?php echo $row['ID']; ?>);">
          <i class="fa fa-pencil"></i>
        </button>
        <button class="btn btn-danger btn-sm" onclick="deleteAgent(<?php echo $row['ID']; ?>);">
          <i class="fa fa-trash"></i>
        </button>
      </td>
    </tr>
    <?php
  }

function showEditOptionsRow($seq_no,$row) {
  ?>
  <tr>
    <td><?php echo $seq_no; ?></td>
    <!-- <td><?php echo $row['ID'] ?></td> -->
    <td>
      <input type="text" class="form-control" value="<?php echo $row['NAME']; ?>" placeholder="Name" id="agent_name" onkeyup="validateName(this.value, 'name_error');" required>
      <code class="text-danger small font-weight-bold float-right" id="name_error" style="display: none;"></code>
    </td>
    <td>
      <input type="email" class="form-control" value="<?php echo $row['EMAIL']; ?>" placeholder="email" id="agent_email" required>
      <code class="text-danger small font-weight-bold float-right" id="doctor_name_error" style="display: none;"></code>
    </td>
    <td>
      <input type="number" class="form-control" value="<?php echo $row['CONTACT_NUMBER']; ?>" placeholder="Contact Number" id="agent_contact_number" onkeyup="validateContactNumber(this.value, 'contact_number_error');" required>
      <code class="text-danger small font-weight-bold float-right" id="contact_number_error" style="display: none;"></code>
    </td>
    <td><?php echo date("d/m/y",strtotime($row['DATE_REGISTERED'])) ?></td>
    <td>
      <button href="" class="btn btn-success btn-sm" onclick="updateAgent(<?php echo $row['ID']; ?>);">
        <i class="fa fa-edit"></i>
      </button>
      <button class="btn btn-danger btn-sm" onclick="cancel();">
        <i class="fa fa-close"></i>
      </button>
    </td>
  </tr>
  <?php
}

function updateAgent($id, $name, $email, $phone) {
  require "db_connection.php";
  $query = "UPDATE agent SET NAME = '$name',  EMAIL = '$email', CONTACT_NUMBER = '$phone' WHERE ID = '$id'";
  $result = mysqli_query($conn, $query);
  if(!empty($result))
    showAgents(0);
}

function searchAgents($text) {
  require "db_connection.php";
  if($conn) {
    $seq_no = 0;
    $query = "SELECT * FROM agent WHERE UPPER(NAME) LIKE '%$text%'";
    $result = mysqli_query($conn, $query);
    while($row = mysqli_fetch_array($result)) {
      $seq_no++;
      showAgentRow($seq_no,$row);
    }
  }
}

?>