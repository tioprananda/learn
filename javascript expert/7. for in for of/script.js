// FOR OF YAITU LOOPING PADA ARRAY YG INDEXNYA DIPRESENTASIKAN MENJADI CONST
// FOR OF BERFUNGSI HANYA PADA ARRAY, NODELIST DAN ARGUMENTS

	const obat = [`paratusin`, `konimex`,`darya`];
	// const o direpresentasikan sebagai index dari obat
	for(const o of obat){
		console.log(o);
	}


	const obat2 = [`paratusin`, `konimex`,`darya`];
	// menambah index ke i didalam const wajib menambah method entries() yaitu method untuk looping dalam for of
	for(const [o,i] of obat2.entries()){
		console.log(`id_${o} = ${i}`);
	}


	// FOR OF PADA NODELIST
		const liObat = document.querySelectorAll(`.obat`);
		// menggunakan forEach
		liObat.forEach( o => console.log(o.innerHTML))
		// menggunakan for of
		for (const o of liObat) {
			console.log(o.innerHTML)
		}
		console.log(liObat);

	// FOR PADA ARGUMENT
		// jika didalam function tidak membuat argument, maka isi seluruh argument tsb akan otomatis dibuat kedalam variabel namanya arguments
		function jmlObat ()
		{
			let jumlah = 0;
			// isiArgumen mengacu pada index argument pada jmlObat
			for (const isiArgumen of arguments) {
				jumlah += isiArgumen;
			}
			return jumlah;
		}

		console.log(jmlObat(2,2,2,2,4,5,65767657,2));


// FOR IN YAITU LOOPING YANG SAMA SEPERTI FOR OF HANYA SAJA DIGUNAKAN HANYA UNTUK OBJECT

	const dataObat = {
		namaObat : `bodrex`,
		isi : 100
	}

	for (const o in dataObat){
		console.log(o);
		// jika ingin mengambil nilai dari properti tambahakn nama objectnya dan index diisi const 0 jadi [0] yaitu sama dgn 1wwsa
		console.log(dataObat[o]);
	}