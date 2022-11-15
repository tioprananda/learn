// PROTOTYPE ADALAH teknik memanggil objeck lain yang keluar dari parentnya.
// prototype sama seperti object create, namun digunakan untuk constructor function

// object support untuk mahasiswa
Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    console.log (`${this.nama} sudah makan jadi energinya bertambah ${porsi}, dan sekarang energinya ${this.energi}`);
}

Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    console.log(`${this.nama} sedang bermain jadi energinya berkurang ${jam}, dan sekarang energinya ${this.energi}`)
}

// OBJECK UTAMA DENGAN CONSTRUCTOR FUNCTION
function Mahasiswa (nama, energi) {
    this.nama = nama;
    this.energi = energi;

}

let tio = new Mahasiswa ('tio', 10);
