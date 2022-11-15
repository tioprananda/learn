// http://www.omdbapi.com/?apikey=540f48a0&i=tt0848228 untuk id
// http://www.omdbapi.com/?apikey=540f48a0&s=avenger untuk search
// FETCH adalh sebuah API yg bertugas mengambil data secara asyncronus ke javascript
// ASYNC ADALAH 


    // SEARCH (REFACTOR)
    const SearchButton = document.querySelector(`.search-button`);
    // tangkap elemen searchbutton, lalu jalankanfungsi ketika diklik maka,
    SearchButton.addEventListener(`click`, async function(){

    // tangkap elemen inputkeyword, 
    const inputKeyword = document.querySelector(`.input-keyword`);

    // buat variabel Movies yg berisi function fetch json yg parameternya menunggu inputkeyword.value
    const movies = await getMovies(inputKeyword.value);
    console.log(movies)
    // buat function berisi update cards yg parameternya mengambil data movies yg telah selesai diproses
    updateUI(movies);
})

        // function getMOvies
        function getMovies (input) {
           return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=540f48a0&s=` + input)
                    // tangkap promise janji ditepati kedalam response, ubah response menjadi json
                    .then((response) => response.json())
                    // ubah response yg sudah jadi json menjadi data object yg berbentuk data
                    .then((response) => response.Search)
        };

        // function updateUI
        function updateUI(updateCard) {
                  let cards = ``;
                    // looping movies dan tampung kedalam cards
                    updateCard.forEach(m => {
                        cards += showcard(m);
                    });
                    // masukan movie kedalam class movie-conainer di html yg ditangkap dengan elemen movie-container
                    const movieContainer = document.querySelector(`.movie-container`);
                    // isikan class cards kedalam class movie container
                    movieContainer.innerHTML = cards;
        };

    // DETAIL MOVIES (REFACTOR)
        // apapun yg diklik user, ketika diklik kjalankan fungsi,
        document.addEventListener(`click`, async function (e) {
            // jika elemen yg diklik mengandung kata detail-film, maka
            if(e.target.classList.contains(`detailFilm`)){
            // ambil dataset imdbid masukan kedalam const imdbid
            const imdbid = e.target.dataset.imdbid;
            // lakukan fetch yg dimasukan kedalam const yng constnya berisi function fetch dll
            const detailMovies = await getDetailMovies(imdbid);
            // buat fungsi yg menjalankan update UI di html
            updateDetailUI(detailMovies);
            }
        });

            // function detailMovies
            function getDetailMovies(imdbid) {
                // fetch menangkap id berbeda dgn fetch yg menangkap search, jd copy url baru lg dr insomnia
               return fetch (`http://www.omdbapi.com/?apikey=540f48a0&i=`+ imdbid)
                // jadikan promise ke json
                .then((response) => response.json())
                .then (m => m);
            };

            // function updateDetailUI
            function updateDetailUI(m) {
                // buat variabel detailmovies yg berisi function detailcard(response)
                const dataDetailMovies = detailCard(m);
                // tangkap elemen html modal-body masukan ke variabel modalbody
                const modalBody = document.querySelector(`.modal-body`);
                // isikan class modalbody dgn detailmovies
                modalBody.innerHTML = dataDetailMovies;                        
            };
    
    // showcard() untuk menampung card
        function showcard (m) {
            return `<div class="col md-5 my-3">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${m.Poster}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary detailFilm" data-toggle="modal" data-target="#detailFilm" data-imdbid="${m.imdbID}">Detail</a>
                </div>
            </div>
        </div>`;
        }

    // detailcard() untuk menampung detail card
        function detailCard (m) {
            return `<div class="cointainer-fluid">
            <div class="row">
                <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid">
                </div>
                <div class="col-md">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">Judul = ${m.Title}</li>
                        <li class="list-group-item">Tahun = ${m.Year}</li>
                        <li class="list-group-item">Genre = ${m.Genre}</li>
                        <li class="list-group-item">Actor = ${m.Actors}</li>
                        <li class="list-group-item">Plot = ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`
        }


// CODE AWAL
  // // tangkap class search-button di html
    // const SearchButton = document.querySelector('.search-button');
    
    // // ketika tombol search-button diklik, jalankan function berikut
    // SearchButton.addEventListener(`click`, function(){
    //         // tangkap class input-keyword di html untuk mendapatkan value apapun yg diketik user dikeyword
    //         const inputKeyword = document.querySelector(`.input-keyword`);
    //         // tangkap url api dengan fetch + masukan hasil input keyword
    //         fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=540f48a0&s=` + inputKeyword.value)
    //         // tangkap promise janji ditepati kedalam response, ubah response menjadi json
    //         .then((response) => response.json())
    //         // tangkap kembali promise yg sudah diubah dalam bentuk json
    //             // ISI CARD
    //             .then(response => {
    //                 // movie diisi dgn apapun yg dihasilkan dari search response
    //                 const movies = response.Search;
    //                 // buat cards kosong untuk menampung film
    //                 let cards = ``;
    //                 // looping movies dan tampung kedalam cards
    //                 movies.forEach(m => {
    //                     cards += showcard(m);
    //                 });
    //                 // masukan movie kedalam class movie-conainer di html yg ditangkap dengan elemen movie-container
    //                 const movieContainer = document.querySelector(`.movie-container`);
    //                 // isikan class cards kedalam class movie container
    //                 movieContainer.innerHTML = cards;
                
    //             // ISI DETAIL CARD
    //                 //tangkap tombol detailfilm pada html card
    //                 const buttonDetailFilm = document.querySelectorAll(`.detailFilm`);
    //                 // looping tombol detail film untuk mencari id film
    //                 buttonDetailFilm.forEach((btn) => {
    //                     // ketika tombol diklik jalankan function berikut
    //                     btn.addEventListener(`click`, function () {
    //                         // dataset berfungsi mengisi value dari class data-imdbid di html card (awal class wajib membuat data-)
    //                         const imdbid = this.dataset.imdbid;
    //                         // fetch menangkap id berbeda dgn fetch yg menangkap search, jd copy url baru lg dr insomnia
    //                         fetch (`http://www.omdbapi.com/?apikey=540f48a0&i=`+ imdbid)
    //                         // jadikan promise ke json
    //                         .then((response) => response.json())
    //                         // looping response yg sudah jadi objek
    //                         .then((response) => {
    //                             // buat variabel detailmovies yg berisi function detailcard(response)
    //                             const detailMovies = detailCard(response);
    //                             // tangkap elemen html modal-body masukan ke variabel modalbody
    //                             const modalBody = document.querySelector(`.modal-body`);
    //                             // isikan class modalbody dgn detailmovies
    //                             modalBody.innerHTML = detailMovies;
    //                         })
    //                     })
    //                 })
              
            
            

    //         });
    // });