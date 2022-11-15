// object merupakan sebuah variabel yang dapat menampung banyak variabel seperti string, integer, boolean, array, function, dan object didalam object


// 1. OBJECT LITERAL
let produk = {
	nama : 'obat',
	isi : 3,
	jenis : ['keras','biasa'],
	alamat : {
		kota : 'pekanbaru',
		provinsi : 'riau'
	}
}

// carA panggil data di console:
// produk.nama = panggil data yang ada object produk variabel nama isi obat
// produk.jenis[0] = panggil data yang ada di object produk array jenis dengan nomor index 0 yaitu keras
// produk.alamat.kota = panggil data yang ada di objecr produk didalam object alamat didalam variabel kota isi pekanbaru 

// 1.1 PANGGIL DAN ISI DATA DENGAN FUNCTION DECLARATION
	function isiObat (nama, isi, jenis,alamat) {
		produk = {};
		produk.nama = nama;
		produk.isi = isi;
		produk.jenis = jenis;
		produk.alamat = alamat;
		return produk;
	};
	let produk1 = isiObat('comtusi',10,'batuk','pekanbaru');


// 1.2 PANGGIL DAN ISI DATA DENGAN CONSTRUCTOR FUNCTION
	function IsiProduk (nama, isi, jenis, alamat) {
		this.nama = nama;
		this.isi = isi;
		this.jenis = jenis;
		this.alamat = alamat;
	}
	let produk2 = new IsiProduk('antimo',100,'demam','bandung');

// PERBEDAAN THIS PADA TIAP-TIAP FUNCTION
	// 1. Object Literal
	obj1 = {nama : 'tyo'};
	obj1.tes = function(){
		console.log('ini adalah function object literal, isi this mengembalikan object local')
		console.log(this);
	}
	obj1.tes();	

	// 2. Function Declaration
	function halo(){
		console.log('ini adalah function declaration, isi thisnya mengembalikan object global');
		console.log(this);
	}
	halo();

	// 3. Function Constructor
	function ObjIsi () {
		console.log('ini adalah function Constructor, isi this mengembalikan object tergantung variabel yg memanggilnya')
		console.log(this);
	}
	let obj2 = new ObjIsi();
	let obj3 = new ObjIsi();

	
