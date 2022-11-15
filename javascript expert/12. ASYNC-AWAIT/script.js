// ASYNC AWAIT ADALAH ASYNCRONUS FUNCTION YG MEMBERHENTIKAN SEMENTARA EKSEKUSI FUNCTIONNYA SAMBIL MENUNGGU PROMISE SELESAI
// ASYNC AWAIT TERBAGI 2, JIKA PROMISE RESOLVE PAANGGIL TRY, JIKA REJECT MAKA REJECT

// promise biasa
const coba = new Promise((resolve, reject) => {
    const waktu = 2000;
    if(waktu < 3000) {
    setTimeout(() => {
        resolve(`ok tanpa asyncawait`)
    }, waktu);}
    else {
        reject(`not ok tanpa asyncawait`)
    }
}); 
coba
    // jika promise resolve tangkap dengan then 
    .then((coba) => console.log(coba))
    // jika promise reject tangkap dengan catch
    .catch((coba) => console.log(coba))

// promise async await
    function cobaPromise () {
        return new Promise((resolve, reject) => {
            const waktu = 400;
            if(waktu < 3000) {
            setTimeout(() => {
                resolve(`ok dgn async`)
            }, waktu);}
            else {
                reject(`not ok dgn async`)
            }
        }); 
    }
    // sebelum function cobaasync dieksusi, async menjeda terlebih dahulu eksekusinya untnuk menjalankan function coba promise, 
    async function cobaAsync(){
        // try sama dgn then, namun khusus jika async wajib try
        try{
        // tambahkan await pada function yg prmoisenya ingin di asyin
        const coba = await cobaPromise();
        console.log(coba);

        // catch() berisi parameter yg isi parameternya adalah hasil promise reject
        } catch(err) {
            console.log(err)
        }

        
    }

    cobaAsync();