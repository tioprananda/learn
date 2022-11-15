// BUBLING ADALAH METHOD YANG MEMBERHENTIKAN AKSI EVENT TERTENTU JIKA EVENT ITU BERADA DI HTML DAN PARENT YG SMA
// FUNGSI BUBLING APABILA DI 1 PARENT HTML MEMILIKI 2 EVENT YG BERJALAN BERSAMAAN MAKA, METHOD BUBLING BISA MEMISAHKAN EVENTNY DGN TOMBOL YG BERBEDA.
// namaelemen.stopPropagation(); untuk menghentikan aksi event dalam 1 parent


// bubling
	// tangkap container
	const container = document.querySelector(`.container`);
		// jalankan event target handler klik
		container.addEventListener(`click`, function(e) {

			// jika event target mengklik nama elemen yg bernama close,  maka
			if(e.target.className == `close`) {
				// jalankan event target, ambil parentnya, buat display none
				e.target.parentElement.style.display = `none`;
				// untuk jaga2 jika target terdapat link pake prevent
				e.preventDefault;
				// jalannkan stop propogation 
				e.stopPropagation();

				} else if(e.target.className == `card`){
			// else if, jika yg diklik bernama class card
				// alert ok
				alert(`ok`)
				}

		})
			


























// const ex = document.querySelectorAll(`.close`);
// ex.forEach((i) => {
	
// 	i.addEventListener(`click`,function(e){

// 		e.target.parentElement.style.display = `none`;
// 		e.stopPropagation();
	

// 		});
// 	});

// const cards = document.querySelectorAll(`.card`);
// cards.forEach((c) => {
// 	c.addEventListener(`click`,function(r) {
// 		alert(`ok`)

// 	})
// })

