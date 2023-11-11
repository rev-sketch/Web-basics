<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Manage Client</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
		<!-- <script src="bootstrap/js/jquery.min.js"></script>
		<script src="bootstrap/js/bootstrap.min.js"></script> -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="shortcut icon" href="" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/sidenav.css">
    <link rel="stylesheet" href="css/home.css">
    <script src="js/manage_clients.js"></script>
    <script src="js/validateForm.js"></script>
    <!-- <script src="js/restrict.js"></script> -->
  </head>
  <body style="max-height: 100%;">
    <!-- including side navigations -->
    <?php include("sections/admin_sidenav.html"); ?>

    <div class="container-fluid">
      <div class="container">

        <!-- header section -->
        <?php
          require "php/header.php";
          createHeader('handshake', 'Manage Client', 'Manage Existing Client');
        ?>
        <!-- header section end -->

        <!-- form content -->
        <div class="row">

          <div class="col-md-12 form-group form-inline">
            <label class="font-weight-bold" for="">Search :&emsp;</label>
            <input type="text" class="form-control" id="" placeholder="Search client" onkeyup="searchClient(this.value);">
          </div>

          <div class="col col-md-12">
            <hr class="col-md-12" style="padding: 0px; border-top: 2px solid  #02b6ff;">
          </div>

          <div class="col col-md-12 table-responsive">
            <div class="table-responsive">
            	<table class="table table-bordered table-striped table-hover">
            		<thead>
            			<tr>
            				<th style="width: 2%;">SL.</th>
                    <!-- <th style="width: 10%;">client ID</th> -->
            		<th style="width: 13%;">Client Name</th>
                    <th style="width: 13%;">Contact Number</th>
                    <th style="width: 17%;">Address</th>
                    <th style="width: 13%;">Agent's Name</th>
                    <th style="width: 15%;">Action</th>
            			</tr>
            		</thead>
            		<tbody id="clients_div">
                  <?php
                    require 'php/manage_clients.php';
                    showClients(0);
                  ?>
            		</tbody>
            	</table>
            </div>
          </div>

        </div>
        <!-- form content end -->
        <hr style="border-top: 2px solid #ff5252;">
      </div>
    </div>
  </body>
</html>
