// EPISODE 1 TAMBAH PENUMPANG

const penumpang = [];
const tambahPenumpang = function(namaPenumpang, penumpang) {

// jika angkot kosong
if (penumpang.length == 0) {
	// tambah penumpang di awal array
	penumpang.push(namaPenumpang);
	// kembalikan isi array dan keluar dari function
	return penumpang;
	}

else {
// else
	// telurusi seluruh isi dari awal
	for(let i = 0; i<penumpang.length; i++) {
		// jika ada kursi kosong
		if (penumpang[i]==undefined) {
			// tambah penumpang dikursi tersebut
			penumpang[i]=namaPenumpang;
			// kembalikan isi array dan keluar dari function
			return penumpang;
			}
		// jika sudah ada nama yang sama 
		else if(penumpang[i]==namaPenumpang){
			// tampilkan pesan kesalahan
			alert('penumpang ' +penumpang[i]+ ' sudah ada.')
			// kembalikan isi array dan keluar dari function
			return penumpang;
			}
		// jika seluruh kursi terisi
		else if(i==penumpang.length-1){
			// tambah penumpang diakhir array
			penumpang.push(namaPenumpang);
			// kembalikan isi array dan keluar dari function
			return penumpang;
			}
		}
	}
}

// EPISODE 2 HAPUS PENUMPANG

let hapusPenumpang = function(namaPenumpang, penumpang) {
	// jika angkot kosong
	if(penumpang.length == 0){
			// tampilkan pesan bahwa angkot kosong
			alert('tidak ada penumpang lagi');
			// tidak mungkin ada penumpang turun
			return penumpang;
			}

	else {
	// else

		// telusuri isi array dari awal
			for (var i = 0; i < penumpang.length; i++) {
			// jika index penumpang sama dengan nama penumang
			if (penumpang[i] == namaPenumpang) {
			// hapus penumpang dengan mengubah namanya,
				penumpang[i] = undefined;
			// menjadi undefined
			// kembalikan isi array dan keluar dari function
			return penumpang;
			}
		// jika tidak ada nama yang sesuai
			else if(i == penumpang.length -1) {
			// tampilkan pesan kesalahan
			alert(namaPenumpang + ' tidak ada')
			// kembalikan isi array dan keluar dari function
			return penumpang;
			}
			}
		}
}
