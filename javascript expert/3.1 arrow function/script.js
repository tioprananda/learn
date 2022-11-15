// ARROW FUNCTION YAITU CARA SINGKAT UNTUK MENULISKAN KODE FUNCTION

// FUNCTION EXPRESSION BIASA
let tes1 = function (isi) {
	return `halo ${isi}`;
}
console.log(tes1('boy'));

// FUNCTION EXPRESSION (ARROW FUNCTION LEBIH DR 1 PARAMETER)
let tes2 = (nama, umur) => {
	// function diubah jadi =>
	return `halo saya ${nama}, saya berumur ${umur}`;
}
console.log(tes2('tyo',11));

// FUNCTION EXPRESSION (ARROW FUNCTION HANYA 1 PARAMETER)
let tes3 = nama => {
	// jika parameter cuma 1, tanda kurung parameter boleh dihapus
	return `halo saya ${nama}`;
}
console.log(tes3('tyo'));

// FUNCTION EXPRESSION (ARROW FUNCTION ISINYA HANYA RETURN)
let tes4 = nama => 
	// jika function hanya return saja, kurung kurawal dan perintah return boleh dihapus.
	`halo saya ${nama}`;
console.log(tes4('tyo'));

// FUNCTION EXPRESSION (ARROW FUNCTION IDAK ADA PARAMETER)
let tes5 = () => 
	// jika function tidak ada parameter, parameter wajib menggunakan ().
	`halo saya`;
console.log(tes5());


// LATIHAN 1
function ucapkanSalam (waktu) {
	return nama => console.log(`halo ${nama}, selamat ${waktu}`);
	
}

let selamatpagi = ucapkanSalam('pagi');
let selamatsiang = ucapkanSalam('siang');
let selamatmalam = ucapkanSalam('malam');

selamatmalam('tyo');
selamatsiang('moch');
selamatpagi('orang');


// LATIHAN 2 ARRAY PADA ARROW FUNCTION	
const karyawan = ['moch','tyo'];
// hitung hurufnya, method map berfungsi memetakan isi array/object ke dalam function
hitungHuruf = karyawan.map (nama => nama.length);
	// cara baca : didalam variabel hitunghuruf, jalankan method map pada variabel karyawan yang didalam method mapnya terdapat sebuah function dengan parameter nama yang mengembalikan sebuah return berupa nama.length. (nama menangkap data pada isi array karyawan).
console.log(hitungHuruf);

// LATIHAN 3 OBJECT PADA ARROW FUNCTION
const jabatan = ['manager','staff'];
hitungHuruf2 = jabatan.map(nama => ({
	nama,
	jmlhuruf : nama.length
}))
// tampilkan nama dan jumlah huruf
// cara baca : didalam variabel hitunghuruf2 berisi dan jalan method map yang didalamnya method mapnya menjalankan function dalam bentuk object, karna sama2 menggunakan {} pada function dan object untuk mendeklarasikan perintah, maka bisa dringkas menjadi ({}), kemudian parameter function nama menangkap data dari array jabatan. object nama sama dengan nama : nama,  jika nama object dan nama parameter functionnya sama maka dapat digabungkan dalam 1 kalimat yaitu nama. kemudian object jumlah huruf menjalankan method nama.length. karna isinya hanya return saja maka perintah return tidak perlu ditulis.

console.table(hitungHuruf2);
// console table menampilkan data console dalam bentuk table
