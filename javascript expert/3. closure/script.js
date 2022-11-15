
// KONSEP HOISTING
// fase creation phase::
    // 1. apakah ada variabel atau function didalam codingan, jika ada kasih nama variabelnya menjadi undefined. 
    // 2 jika itu function kasih nama functionnya sendiri atau kode function = fn() dan functionnya tidak akan dijalankan.

// fase execution phase :
// jika sayhello tidak memakai (), maka function tidak berjalan, namum menampilkan kode isi function.
console.log(sayHello);

// jika sayhhello() function berjalan normal tetapi isi variabel function tidak terpanggil (undefined).
console.log(sayHello());

var nama = 'tio';
var umur = 25;

// jika sayhello(), function berjalan normal karna function dijalankan setelah variabel global dibuat.
console.log(sayHello());

function sayHello(){
    return `halo nama saya ${nama}, saya berumur ${umur}`
}

// scope yaitu ruang lingkup function, javascript akan mengeksekusi pertama kali yang memiliki kaitan scope, jika tidak ada discope maka function akan mencari scope luar dari ruang lingkupnya.


// FUNCTION FACTORY!!!
// function factory yaitu sekumpulkan banyak function yg disatukan menjadi 1 function.

function ucapkanSalam (waktu) {
    return function (nama) {
        console.log(`halo ${nama}, selamat ${waktu}`)
    }
}

let selamatpagi = ucapkanSalam('pagi');
let selamatsiang = ucapkanSalam('siang');
let selamatmalam = ucapkanSalam('malam');

selamatpagi('tio');
selamatsiang('ucy');
selamatmalam('tiosuci');
