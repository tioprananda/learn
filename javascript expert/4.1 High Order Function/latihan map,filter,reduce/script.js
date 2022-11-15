// // AMBIL SEMUA ELEMEN VIDEO
// 	// array.from adalah method yg membuat data yg ditangkap dom yg awalnya node list menjadi array

// 	const videos = Array.from(document.querySelectorAll('[data-duration]'));
// 	console.log (videos);

// // PILIH HANYA JAVASCRIPT LANJUTAN
// 		// textContent = ambil tipe text pada html
// 		// includes() = yang terdapat ... ('javascript lanjutan')
// 	let video = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

	
// // AMBIL DURASI MASING2 VIDEO
// 	// dataset.duration = method yng mengambil durasi berupa angka
// 	.map(item => item.dataset.duration)
	

// // UBAH MENJADI INT, UBAH MENIT MENJADI DETIK
// 	// parsefloat = mengubah data menjadi pecahan
// 	// split() = memecah data yg besar menjadi beberapa data  // ex : 10:30 = [10,30], parameter split berfungsi sebagai pembatas (:)
// 	.map(waktu => {
// 		// tangkap waktu hapus pemisah data yaitu :
// 		let parts = waktu.split(':')
// 			// didalam parts terdapat 2 data (ex:10:30), data yg (30) masih string, pecah data yg (30) menjadi bentuk tipe angka berbentuk float
// 			.map(part => parseFloat(part));
// 		return parts[0] * 60 + parts[1] ;
// 	})

// // JUMLAHKAN SEMUA DETIK
// 	.reduce((acc,curr) => acc+curr);


// // UBAH FORMATNYA MEJADI FORMAT MENIT DETIK
// 	// math.floor = membulatkan angka kebawah
// 	// math.round = membulatkan angka terdekat perbandingan 5
	
// 	// ubah total detik yg telah didapat di variabel video menjadi jam
// 	let jam = Math.floor(video / 3600);

// 	// ambil sisa yg telah dibagi dari sisa jam tadi menjadi menit dan masukan ke var video
// 	video = video - jam *3600;

// 	// bulatkan menjadi menit
// 	let menit = Math.floor(video / 60);

// 	// ambil sisa yg telah dibagi dari jam dan menit lalu ambil sisa tsb jadi detik
// 	video = video - menit *60;

// 	console.log(jam)
// 	console.log(menit)
// 	console.log(video)



// // SIMPAN DI DOM
// 	// tangkap elemen p dengan class total durasi
// 	const pJam = document.querySelector('.total-durasi');
// 	// isi durasi waktu yg telah dibuat (jam,menit,detik) dalam pjam yang akan dikonversikan menjadi html
// 	pJam.textContent = `${jam} jam, ${menit} menit ${video} detik.`;

// 	// tangkan elemen p dengan class jumlah-video
// 	const pJmlVideo = document.querySelector('.jumlah-video');
// 	// isi total jumlah video dengan banyak total array didalam array videos
// 	const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
// 	// isi jumlah video kedalam html pjmlvideo
// 	pJmlVideo.textContent = `${jmlVideo} video.`

// 	console.log(jmlVideo)



















































// TES 2

// AMBIL SEMUA ELEMEN VIDEO
	// array.from adalah method yg membuat data yg ditangkap dom yg awalnya node list menjadi array
	const tangkapDurasi = Array.from(document.querySelectorAll('[data-duration]'));
	console.log(tangkapDurasi);

// PILIH HANYA JAVASCRIPT LANJUTAN
		// textContent = ambil tipe text pada html
		// includes() = yang terdapat ... ('javascript lanjutan')
	let tangkapDurasiLanjutan = tangkapDurasi.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

	
// AMBIL DURASI MASING2 VIDEO
	// dataset.duration = method yng mengambil durasi berupa angka
	.map(durasi => durasi.dataset.duration)
	

// UBAH MENJADI INT, UBAH MENIT MENJADI DETIK
	// parsefloat = mengubah data menjadi pecahan
	// split() = memecah data yg besar menjadi beberapa data  // ex : 10:30 = [10,30], parameter split berfungsi sebagai pembatas (:)
		// tangkap waktu hapus pemisah data yaitu :	
			// didalam parts terdapat 2 data (ex:10:30), data yg (30) masih string, pecah data yg (30) menjadi bentuk tipe angka berbentuk float

// JUMLAHKAN SEMUA DETIK

// UBAH FORMATNYA MEJADI FORMAT MENIT DETIK
	// math.floor = membulatkan angka kebawah
	// math.round = membulatkan angka terdekat perbandingan 5
	// ubah total detik yg telah didapat di variabel video menjadi jam
	// ambil sisa yg telah dibagi dari sisa jam tadi menjadi menit dan masukan ke var video
	// bulatkan menjadi menit
	// ambil sisa yg telah dibagi dari jam dan menit lalu ambil sisa tsb jadi detik


// SIMPAN DI DOM
	// tangkap elemen p dengan class total durasi
	// isi durasi waktu yg telah dibuat (jam,menit,detik) dalam pjam yang akan dikonversikan menjadi html
	// tangkan elemen p dengan class jumlah-video
	// isi total jumlah video dengan banyak total array didalam array videos
	// isi jumlah video kedalam html pjmlvideo


console.log(tangkapDurasiLanjutan);
