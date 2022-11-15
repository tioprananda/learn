// THIS PADA ARROW FUNCTION TIDAK ADA, JIKA MEMBUAT THIS PADA ARROW FUNCTION MAKA YG MUNCUL BUKAN OBJECT YG DIINGINKAN MELAINKAN LANGSUNG MENANGKAP DATA WINDOW.

// konsep this pada constructor function 

// CONSTRUCTOR FUNCTION
	// const karyawan = function () {
	// 	this.nama = 'tyo' ,
	// 	this.umur = 11,
	// 	this.sayHello = function () {
	// 	console.log(`halo nama saya ${this.nama}, saya berumur ${this.umur}`)
	// 	}
	// }

	// let Panggil = new karyawan();


// 1. CONSTRUCTOR FUNCTION (ARROW)
	const karyawan = function () {
	// constructor tidak bisa dijadikan arrow function
		this.nama = 'tyo' ,
		this.umur = 11,
		this.sayHello = () => {
			// method pada constructor bisa dijadikan arrow function
		console.log(`halo nama saya ${this.nama}, saya berumur ${this.umur}`)
			// arrow function tidak mengenal this, jika tidak ada this diluar parent function, maka this akan menjadi window
		}
	}

	let Panggil = new karyawan();


//2. OBJECT LITERAL (ARROW) 
const karyawan2 = {	
	nama : 'moch',
	umur : 22,
	sayHello : ()=>{
		console.log(`halo ${this.nama} kamu berumur ${this.umur}`);
		// this disini akan menjadi undefined karna tidak ada this diluar method functionnya.
	}
}
karyawan2.sayHello();

// 3. FUNCTION EXPRESSION (ARROW)
// const Karyawan3 = function(){
// 	this.nama = 'tio',
// 	this.umur = 44,
// 	this.sayHello = function(){
// 		console.log(`halo ${this.nama}, kamu berumur ${this.umur}`)
// 	}

// 	// method setInterval berfungsi memberikan set waktu tertentu untuk mengaktifkan eksekusi.
// 	// SetInterval adalah function declaration.
// 	setInterval(

// 		// arrow function disini menangkap this diluar function setInterval karna this arrow function itu adalah window, jadi jika tidak ada this difunction parentnya maka dia akan mengambil this diluar parent.
// 		()=>{
// 			console.log(this.umur++);
// 		}, 500

// 		);
// }

// let Call = new Karyawan3();



// -------------------------------------------------------

// KOTAK
// 1. tangkap class box di html.
const box = document.querySelector('.box');
// 2. ketika box diklik jalankan function berikut
box.addEventListener('click', function(){
	// 6. buat variabel untuk memindahkan isi data size dan caption
	let satu = 'size';
	let dua = 'caption';

	// 7. jika box yang sudah ada isinya (satu) diklik, pindahkan satu adalah caption dan dua adalah size
	if (this.classList.contains(satu)) {
		[satu,dua] = [dua,satu];
	}

	// 3. tambahkan += class size pada class box
	this.classList.toggle(satu);
	// 4. set waktu selama 600 detik dan jalankan function berikut
	setTimeout(()=>{
		// 5. tambahkan += class caption setelah class size caption
		this.classList.toggle(dua);
	}, 600);
})