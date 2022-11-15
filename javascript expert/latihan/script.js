// http://www.omdbapi.com/?apikey=c14cf722&s=naruto
// http://www.omdbapi.com/?apikey=c14cf722&s=naruto

// search box + Cards
	// tangkap elemen button search
	const searchButton = document.querySelector(`.tombol-cari`);
	// jalankan fungsi klik, ketika tombol search diklik maka
	searchButton.addEventListener(`click`, function(){
			const input = document.querySelector(`.input-keyword`);
			// fetch, panggil url api
			fetch (`http://www.omdbapi.com/?apikey=c14cf722&s=` + input.value)
			// then tangkap promise, ubah jadi json
			.then((response) => response.json())
			// looping hasil json 
			.then((response) => {
				// isi movies adalah value hasil pencarian response json
				const movies = response.Search;
				// buat variabel kosong untuk menampoung cards
				let cards = ``;
				// loooping movie 1 1 dan masukan hasil looping kedalam card yg berisi dfuncition showcard
				movies.forEach((m) => cards += showCard(m));
				// tangkap elemen html card film
				const cardJS = document.querySelector(`.card-film`);
				// cari elemen card-film dan isikan didalam elemen htmlnya dgn cards
				cardJS.innerHTML = cards;
			});

	
	
	});





function detailCard (m) {
	return `<div class="col-md-4">
                          <img class="card-img-top" src="${m.Poster}">
                            <ul class="list-group">
                           </div>
                           <div class="col">
                              <li class="list-group-item">Judul :${m.Title}</li>
                              <li class="list-group-item">Genre :${m.Genre}</li>
                              <li class="list-group-item">Actor :${m.Actors}</li>
                              <li class="list-group-item">Rilis :${m.Year} </li>
                              <li class="list-group-item">Plot : ${m.Plot}</li>
                            </ul>
                          </div>`
};

function showCard (m) {
	return ` <div class="col-md-4 my-3">
           <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${m.Poster}">
          <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="text-muted">${m.Year}</h6>
            <a href="#" class="btn btn-primary tombol-detail" data-toggle="modal" data-target="#detail-film" data-imdbid="${m.imdbID}" >Detail</a>
          </div>
        </div>
        </div>`
}