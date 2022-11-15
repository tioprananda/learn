<?php 

$data = file_get_contents('data/pizza.json');
$menu = json_decode($data, true);
$menu = $menu["menu"];
?>


<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>HUT</title>
  </head>
  <body>

    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img src="img/logo.png" width="120">
        </a>

      <!-- menu navbar -->
      <div class="container">
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home</a>
       
          </div>
        </div>
      </div>
  </nav>

    <!-- HALAMAN MENU -->
    <div class="container">
      <div class="row mt-3">
        <div class="col">
          <h1>HALAMAN MENU</h1>

          <!-- CARDS -->
          <div class="row">

          <?php forEach($menu as $row) : ?>
            <div class="col-md-4">
              <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="img/menu/<?= $row['gambar']; ?>">
                <div class="card-body">
                  <h5 class="card-title"><?= $row['nama']; ?></h5>
                  <p class="card-text"><?= $row['deskripsi']; ?></p>
                  <h5 class="card-title">Rp. <?= $row['harga']; ?></h5>
                  <a href="#" class="btn btn-primary">Order</a>
                </div>
              </div>
            </div>
          <?php endforeach; ?>

          </div>
        </div>
      </div> 
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>