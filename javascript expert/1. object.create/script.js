// OBJECT.CREATE ADALAH TEKNIK MEMANGGIL OBJEK YG BERISI FUNCTION LAIN DILUAR OBJECT PARENTNYA

// MEMBUAT OBJECT DENGAN FUNCTION DECLARATION
    // OBJEK 1 MethodMahasiswa
const methodMahasiswa = {
    // objek1 membuat object constructor jadi tidak perlu return
    makan : function (porsi){
        this.energi += porsi;
        console.log (`selamat makan ${this.nama}`);
    },
    main : function (jam) {
        this.energi -= jam;
        console.log(`${this.nama} bermain dan energinya sekarang ${this.energi}`)
    }
    
};

    // OBJEK 2 mahasiswa
function Mahasiswa (nama, energi){
    // objec2 membuat objek function declaration jadi harus ada return
    // OBJECT.CREATE MEMANGGIL OBJECT methodMahasiswa;
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;

}

// buat variabel untuk wadah memanggil objek
// disini objek utama adalah objek2 dan objek1 sebagai supportnya
let tio = Mahasiswa('tio', 10);

// cara menggunakan function untuk memanggil objek;
tio.makan(100);
tio.main(50);