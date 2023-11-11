<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
  </head>
  <body>
  <form method="get" action="send_sms.php">
  <div class="form-group">
    <label for="exampleInputEmail1">Phone Number</label>
    <input type="number" class="form-control" name="contact_number" id="contact_number" aria-describedby="emailHelp" placeholder="Enter Number">
  </div>
  <!-- <div class="form-group">
    <label for="message">Message</label>
    <textarea class="form-control" name="msg"  id="message" rows="3"></textarea>
  </div> -->

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

  </body>
</html>
