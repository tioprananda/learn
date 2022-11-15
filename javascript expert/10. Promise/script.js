// http://www.omdbapi.com/?apikey=540f48a0&i=tt0848228

// PROMISE ADALAH OBJECT YG MEREPRESENTASIKAN KEBERHASILAN ATAU GAGAL DARI SEBUAH EVENT DALAM BENTUK ASYNCRONUST DI MASA YG AKAN DATANG.
// PROMISE (STATE) TERBAGI MENJADI TIGA YAITU TERPENUHI (FULFILLED) ATAU INGKAR (REJECTED) DAN MENUNGGU (PENDING).
// DIDALAM JS DIBUAT DALAM BENTUK FUNCTION CALLBACK ( RESOLVED(JANJINYA TERPENUHI) / REJECT(JANJI TDK TERPENUHI) / FINALLY (WAKTU TUNGGU SELESAI))
// DALAM PROMISE ADA AKSI YG HARUS DILAKUKAN KETIKA JANJI TERPENUI YAITU THEN(MENJALANKAN RESOLVE) DAN CATCH(MENJALANKAN REJECT).
// PROMISE DIGUNAKAN KETIKA KITA MENGGUNAKAN REQUESST KE API.

// CONTOH 1 
    let ditepati = true;
    // new promise adalah function khusus promise, paramater wajib resolve dan reject
    const janji1 = new Promise((resolve, reject) => {
        // jika ditepati atau true
        if(ditepati) {
            // jalankan function resolve 
            resolve(`janji ditepati janji ke-1`)
        } else {
            // jalankan function reject
            reject(`ingkar janji ke-1`)
        }
    });
    console.log(janji1)
    // jika ingin menangkap resolve dan reject
    janji1
        // .then menangkap resolve, response menangkap isi resolve/reject
        .then(response => console.log(`OK :` + response))
        // .catch menangkap reject
        .catch(response => console.log(`NOT OK :` + response));

// CONTOH 2 
    let ditepati2 = false;
    const janji2 = new Promise ((resolve, reject) => {
        if(ditepati2) {
            // settimeout menjeda eksekusi dalam waktu tertentu
            setTimeout(() => {
                resolve(`janji ditepati ke-2`)
            }, 2000);
        } else {
            setTimeout(() => {
                reject(`janji tidak ditepati ke-2`)
            }, 2000);
        }
    })
    // tes percobaan dgn waktu method finally
    console.log(`awal`);
    console.log(janji2);
    janji2
    // finally berisi value ketika waktu pending selesai
        .finally(() => console.log(`selesai menunggu`))
        .then(response => console.log(`OK :` + response))
        .catch(response => console.log(`NOT OK : ` + response))
        ;
    console.log(`akhir`);

// CONTOH 3, PROMISE.ALL (JIKA INGIN MENGAMBIL BANYAK API AGAR DIJALANKAN SEKALIGUS)

    let jalan = true;
    const film = new Promise ((resolve, reject) =>{
        
        if(jalan) {
            setTimeout(() => {
                // membuat data API Dummy
                resolve([{
                nama : `bleach`,
                episode : 101
                }]) 
            }, 1000);
        } else {
            setTimeout(() => {
                reject(`film tidak ditemukan.`)
            }, 1000);
        }
        
    });
    const karyawan = new Promise ((resolve, reject) => {
        if(jalan) {
            setTimeout(() => {
                resolve([{
                    nama : `tyo`,
                    jabatan : `IT`
                }])
            }, 500);
        } else {
            setTimeout(() => {
                reject (`data tidak ditemukan`);
            }, 500);
        }
    });
    Promise.all([film,karyawan])
    .then(response => {
        const [film, karyawan] = response;
        console.log(film);
        console.log(karyawan);
    })
    .catch(response => {
        console.log(`gagal diproses : ` + response);
    })


        