// HIGH ORDER FUNCTION ADALAH FUNCTION YG MEMILIKI ARGUMEN, DIDALAM ARGUMENNYA BERISI FUNCTION YG MEMANGGIL FUNCTION YG LAIN SERTA FUNCTION YANG MERETURN FUNCTION.

// high order function memiliki 3 method yaitu :
// 1. array.prototype.map()
// 2. array.prototype.filter()
// 3. array.prototype.reduce()


// CARI ANGKA >= 3, MENGGUNAKAN FOR BIASA
const angka = [-1,8,9,1,4,-5,-4,3,2,9];
console.log(angka);

const angkaBaru = [];
for (var i = 0; i < angka.length; i++) {
	if (angka[i] >= 3) {
		angkaBaru.push(angka[i]);
	}
}
	console.log(angkaBaru);

// CARI ANGKA >=3 MENGGUNAKAN METHOD HIGH ORDER FUNCTION
	// 1. ARRAY.PROTOTYPE.filter
		// digunakan untuk array, berfungsi untuk mencari data secara spesifik pada kelompok tertentu.
		const angkaBaru1 = angka.filter(function (a){
			return a>=3;
		});
		console.log(angkaBaru1);

// SETIAP ANGKA KALIKAN 2
	// 2. ARRAY.PROTOTYPE.map
		// digunakan untuk array, berfungsi memeceah isi variabel array, didalam 1 data array dapat dipecah dan diberikan function atau kode laiinya yang pecahan itu menghasilkan array baru. (mirip foreach bedanya foreach tidak menghasilkan array baru).
		const angkaBaru2 = angka.map(function(a){
			return a*2;
		});
		console.log(angkaBaru2);

// SETIAP ANGKA DITAMBAHKAN
// -1+8+9+1+4+-5+-4+3+2+9
	// 3. ARRAY.PROTOTYPE.reduce
		// digunakan untuk array, berfungsi menggabungkan kembali data array yang telah dipecah menjadi satu variabel, data yg dipecah ini bisa dari berbagai sumber data array.
		const angkaBaru3 = angka.reduce(function(accumulator, currentValue){
			// accumulator adalah index array awal
			// currentvalue adalah index array berikutnya
			return accumulator + currentValue ;
		})
		console.log(angkaBaru3);

// METHOD CHAINING YAITU MENGGABUNGKAN BANYAK METHOD DALAM SATU KODE DENGAN PENGHUBUNG METHODNYA MENGGUANAKAN TANDA "."
	// cari angka > 5, kalikan 3, tambahkan gabungan index seluruhnya
	const hasil = 
		angka.filter(a => a > 5)
		.map(a => a * 3)
		.reduce((acc, curr) => acc+curr)
	;
	console.log(hasil);