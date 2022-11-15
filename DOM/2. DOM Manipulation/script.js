// 1. inner html mengubah isi teks html, bisa berupa teks saja maupun penambahan elemen2 htlml yg baru.
	// tangkap id 
	const tangkapId = document.querySelector(`#judul`);
	// isi tangkap isi dengan isiId
	const isiId = `<p>Judul telah diubah oleh javascript</p>`;
	// tangkap id lalu diisi id dengan isiId
	tangkapId.innerHTML = isiId;
	// ubah style tang
	tangkapId.style.backgroundColor = `black`;
	tangkapId.style.color = `white`;

// 2. set atrbut untuk menambah atribut baru dalam elemen yg diseleksi
	const tangkapSelectionA = document.querySelector(`#a`);
		// menambah atribut(atributnya, nama atribur) baru / jika ada atribut sebelumnya maka dia akan menimpa dgn atribut  baru
		tangkapSelectionA.setAttribute(`class`, "halo");
		
		// menangkap atribut(atributnya)
		tangkapSelectionA.getAttribute(`id`);
	
		// menghapus atribut(atributnya)
		tangkapSelectionA.removeAttribute(`class`);

// 3. classlist.add untuk menambah class baru
	const classLi = document.querySelectorAll(`li`);
		classLi[0].classList.add(`kelasBaru`);
		classLi[0].classList.add(`satu`);
		classLi[0].classList.add(`dua`);

		// classlist.remove = menghapus class 
		classLi[0].classList.remove(`kelasBaru`);

		// classlist.toggle = memberikan true/false pada class
		classLi[0].classList.toggle(`kelasBaru`);

		// classlist.item = jika terdapat banyak kelas dalam 1 item, tampilkan kelas yg dinginkan sesuai index // (2) menampilkan index 3 di class 
		classLi[0].classList.item(`dua`);

		// classlist.contains = menanyakan apakah dalam item ada nama kelas yg sesuai, jika ada true : false
		classLi[0].classList.contains(`satu`);

		// classlist.replace = mereplace kelas lama dengan nama kelas baru
		classLi[0].classList.contains(`sembilan`);

	

// 4. MENAMBAH ELEMEN P BARU DI AKHIR PARAGRAF BARU
	// document.createElement() = membuat node baru
	const p4 = document.createElement(`p`);
	// document.createTextNode() = mengisi elemen pada node baru
	const isiP4 = document.createTextNode(`Paragraf 4`);
	// masukan isip4 kedalam p4 dengan appendChild
	p4.appendChild(isiP4);
	// sekarang p4 sudah dibuat, selanjutnya masukan p4 kebawah p3, tangkap parent element yaitu id : a
	const sectionA = document.getElementById(`a`);
	// masukan p4 kedalam section a
	sectionA.appendChild(p4);

// 5. menambah elemen li baru ditengah sebelum li yg ke 2
	const liBaru = document.createElement(`li`);
	const isiLiBaru = document.createTextNode(`Li yang baru ditambah`);
	liBaru.appendChild(isiLiBaru);
	// masukan li yg baru kedalam html, tangkap ul untuk parent pengisinya
	const tangkapUl = document.querySelector(`ul`);
	// tangkap li2 karna, li baru akan dimasukan sebelum li2
	const li2 = document.querySelector(`#b ul li:nth-child(2)`);
	// masukan li baru sebelum li2 dengan insertBefore (elemen baru yg ingin ditambah, letak elemen sebelum elemen baru ditambah)
	tangkapUl.insertBefore(liBaru,li2);

// 6. menghapus child pada elemen html
	// tangkap id a sebagai parentnya
	const idA = document.querySelector(`#a`);
	// tangkap a yg ada didalam id a
	const tangkapA = document.querySelector(`a`);
	// hapus a didalam id A dengan removeChild
	idA.removeChild(tangkapA);

// 7. mengubah paragraf4 menjadi h1
	// tangkap paragraf4 di id b
	const tangkapP4 = document.querySelector(`#b p`);
	// tangkap parent p4 yaitu id b
	const idB = document.querySelector(`#b`);
		// buat elemen h1
		const h1Baru = document.createElement(`h1`);
		// isi h1
		const isiH1 = document.createTextNode(`Paragraf 4 sudah diganti dengan H1`);
		// masukan isi h1 kedalam elemen h1
		h1Baru.appendChild(isiH1);
	// masukan h1baru kedalam html id b, replaceChild(elemen yg mau diganti, elemen lama yg ingin diganti)
	idB.replaceChild(h1Baru,tangkapP4);