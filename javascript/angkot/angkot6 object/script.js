// 1. BUAT FUNCTION CONSTRUCTOR ANGKOT
	// fungsi angkot (sopir, trayek, penumpang, kas)
	function Angkot (sopir, trayek, penumpang, kas) {

		this.sopir = sopir;
		this.trayek = trayek;
		this.penumpang = penumpang;
		this.kas = kas;

		// fungsi naik penumpang
		this.penumpangNaik = function (namaPenumpang) {
			// jika kursi kosong 
			if (this.penumpang.length == 0 ) {
				// tambah penumpang dengan nama penumpang
				this.penumpang.push(namaPenumpang);
				// return this.penumpang
				return this.penumpang;
				}
			
			else {
				// lakukan penelusuran
				for (var i = 0; i < this.penumpang.length; i++) {
					// jika ada penumpang dengan nama yang sama 
					if (this.penumpang[i] == namaPenumpang) {
						// tampilkan pesan kesalahan 
						console.log(namaPenumpang + ' sudah ada didalam angkot.')
						// return this.penumpang
						return this.penumpang; }

					else if(i == this.penumpang.length -1){
						this.penumpang.push(namaPenumpang);
						return this.penumpang;
						}	

					}
				}
		}
			
		// fungsi turun penumpang
		this.penumpangTurun = function (namaPenumpang, bayar) {

			// jika angkot berisi penumpang
				if (this.penumpang.length === 0) {
				// hapus penumpang
				console.log('Seluruh penumpang sudah turun.')
				return false;
				}

				else {
					for (var i = 0; i < this.penumpang.length; i++) {
						if (this.penumpang[i] == namaPenumpang ) {
							this.penumpang[i] = undefined;
							this.kas += bayar;
							this.penumpang.pop(undefined);
							console.log(namaPenumpang +' sudah turun dan membayar ' + bayar +'. Total kas = ' + this.kas)
							return this.penumpang;
						}
					
				}
			}

		}
	}

// 2. VARIABEL ANGKOT1 = function naik/function turun
let angkot1 = new Angkot('moch',['perawang','pekanbaru'],[],0);
// 3. VARIABEL ANGKOT2 = function naik/function turun
let angkot2 = new Angkot('tyo',['pekanbaru','perawang'],[],0);