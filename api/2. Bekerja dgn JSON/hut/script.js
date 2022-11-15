// CORS ADALAH BLOCK API JIKA MENGAMBIL API DARI DOMAIN LAIN

// tangkap api dengan fetch
fetch('data/pizza.json')
.then ((response) => response.json())
.then((response) => {
	let menu = response.menu;
	console.log(menu);
	let cards = ``;
	menu.forEach((m) => cards += isiCards(m));

const daftarMenu = document.querySelector(`.daftar-menu`);
daftarMenu.innerHTML = cards;
});

// function untuk mengisi card
function isiCards(m) {
	return `<div class="col md-4 my-3">
              <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="img/menu/${m.gambar}">
                <div class="card-body">
                  <h5 class="card-title">${m.nama}</h5>
                  <p class="card-text">${m.deskripsi}</p>
                  <h5 class="card-title">${m.harga}</h5>
                  <a href="#" class="btn btn-primary">Order</a>
                </div>
              </div>`;
}

// tambah kelas active pada navlink dan juga ubah judul halam sesuai dgn halaman yg aktvi(jquery)
$(`.nav-link`).on(`click`, function(){
	$(`.nav-link`).removeClass(`active`);
	$(this).addClass(`active`);
	let kategori = $(this).html();
	$(`h1`).html(kategori); 
})

// sortir jika halaman yg diklik makanan tampilkan data makanan dst

// tampilkan semua data di all menu