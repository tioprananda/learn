// ASYNCRHONUST YAITU 1 JALUR YG DAPAT BERPINDAH EKSEKUSI DALAM 1 WAKTU TERTENTU.

// CALLBACK ADALAH FUNCTION DIDALAM ARGUMEN FUNCTION YG LAIN, YG AKAN DIEKSEKUSI SETELAH FUNCTION YG LAIN DIJLANKAN

	// 1. Callback Syncronus : calback yg berjalan di 1 jalur yg sama dgn waktu yg sama.
	function alertNama (nama) {
		return alert(`halo ${nama}`)
	}

	function panggilNama (alertNama) {
		nama = prompt(`isikan nama`);
		return alertNama(nama);
	}
	panggilNama(alertNama);

	// 2. Callback Assyncronus : callback yg berjalan di 1 jalur yg sama dgn waktu yg berbeda.
	console.log(`mulai`);
	// memanggil json api dengan menggunakan library jquery cdn
	$.ajax({
		url : 'obat.json',
		success : (obat) => {
			console.log(obat);
		},
		error : (e) => {
			console.log(e.responseText);
		}
	})

	console.log(`selesai`);