<?php

class Produk
{

    // variabel didalam class
    public
        $judul = "judul",
        $penulis = "penulis",
        $penerbit = "penerbit",
        $harga = 0;

    // function didalam klass
    public function sayHello()
    {
        return "helloWorld";
    }
}

// panggil class
$produk1 = new Produk();
// mengisi/menimpa isi variabel didalam class
$produk1->judul = 'naruto';

// panggil class 2
$produk2 = new Produk();
// isi class variabel2 berbeda dgn variabel1 karna produk2 mengambil nilai default class prduk
$produk2->judul = "bleach";
// jika tidak ada property dgn nama yg dipanggil, maka secara otomatis class akan menambah proprery baru
$produk2->chapter = 129;

// echo property
$produk3 = new Produk();
$produk3->judul = 'One Piece';
$produk3->penulis = 'Eiichiro Oda';
$produk3->penerbit = 'Shounen Jump';
$produk3->harga = 12000;
echo ("komik : $produk3->judul, $produk3->penulis");

// echo function
echo "<br>";
echo $produk3->sayHello();
