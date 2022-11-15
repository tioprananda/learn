// SPREAD OOPERATOR YAITU NOTASI ... PADA ARRAY ATAU ARGUMENT

	// 1. menggabungkan 2 array
		const obat1 = [`paratusin`, `napasin`, `konimex`];
		const obat2 = [`bodrex`, `antimo`, `amoxcilin`];
		const gabunganObat = [...obat1, ...obat2];
		console.log(gabunganObat)

	// 2. mengcopy array
		const obat3 = [`generik`,`vitamin`]
		const bungkusObat1 = [...obat3];
		// spread dapat mengubah isi obat3 tanpa mengubah array aslinya aslinya
		bungkusObat1[0] = `neucylin`;
		console.log(bungkusObat1);

	// 3 Spread Elemen html 
		const liobat4 = document.querySelectorAll(`.obat`);
		// saat li pada html ditangkap masih berbentuk nodelist, ubah node jadi array dgn spread...
		const obat4 = [...liobat4].map( o => o.innerHTML);
		console.log(obat4)

	// spread style
		const h1Obat = document.querySelector(`h1`);
		obat5 = [...h1Obat.textContent].map ( span => `<span>${span}</span>`).join(``);
		console.log(h1Obat)
		h1Obat.innerHTML = obat5;

	