<?php 

// konek ke database, tangkap database karyawan
$dbh = new PDO('mysql:host=localhost;dbname=db_karyawan', 'root', '');
$db = $dbh->prepare('SELECT * FROM karyawan');
$db -> execute();
$karyawan = $db->fetchALL(PDO::FETCH_ASSOC);

// json encode mengubah data dari databsae/api menjadi json
$data = json_encode($karyawan);
echo $data;

 ?>