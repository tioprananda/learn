// SYSTEM RUANGAN KP APOTEK KELUARGA

// ARRAY RUANGAN KP
const ruanganKP = [];

// FUNCTION KARYAWAN MASUK
const karyawanMasuk = function (nama, masuk) {

	// jika ruangan kp kosong
	if (ruanganKP.length == 0) {
		// tambahkan karyawan
		ruanganKP.push(nama);
		// return ruangan kp
		return ruanganKP;
		}

	// jika tidak
	else {
		// telusuri isi ruangan kp dari index 0
		for (var i = 0; i < ruanganKP.length; i++) {
			
			// jika ada kursi kosong (undefined) diruangan kp
			if (ruanganKP[i] == undefined) {
				// tambahkan karyawan masuk
				ruanganKP[i] = nama;
				// return ruangan kp
				return ruanganKP;
				}

			// jika ada nama karyawan yg sama diruangan
			else if(ruanganKP[i] == nama) {
				// tampilkan pesan karyawan tsb sudah ada diruangan
				console.log(ruanganKP[i] + ' sudah ada diruangan');
				// return ruangan kp
				return ruanganKP;
				}

			// jika ada ruangan kp penuh
			else if(i==ruanganKP.length-1) {
				// tambahkan kursi diakhir nama karyawan 
				ruanganKP.push(nama);
				// return ruangan kp
				}
		}
	}

}

// FUNCTION KARYAWAN KELUAR

const karyawanKeluar = function (nama, keluar) {

		// jika tidak ada karyawan lagi diruangan kp
		if (ruanganKP.length == 0) {
			// tampilkan pesan tidak ada orang diruangan
			alert('ruangan kp sudah kosong');
			// return ruanganKP
			return ruanganKP;
			}
		// ELSE
		else {
			// telusuri isi ruangan dari awal
			for (var i = 0; i < ruanganKP.length; i++) {

				// jika ada orang diruangan 
				if (ruanganKP[i] == nama) {
					// buat kursi menjadi undefined
					nama == undefined;
					// return ruangan kp
					return ruanganKP;
					}

				// jika orang sudah keluar dari ruangan
					// tampilkan pesan bahwa nama org sudah keluar
					// return ruangan Kp

				}
			
		}









}