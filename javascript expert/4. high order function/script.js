// tangkap elemen data-duration dari node list ke array
const tangkapDurasi = Array.from(document.querySelectorAll('[data-duration]'));
console.log(tangkapDurasi);

// filter khusus yg ada tulisan javascript lanjutan
let tangkapDurasiLanjutan = tangkapDurasi.filter(waktu => waktu.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil jumlah durasinya
.map(item => item.dataset.duration)

// ubah durasinya menjadi array terpisah
// ubah durasi menjadi detik
.map(floatDurasi => {
    const parts = floatDurasi.split(':')
    .map(part => Math.floor(part))
    return parts[0] * 60 + parts[1];
})

// totalkan keseluruhan detik
.reduce((acc,curr) => acc+curr)

// ambil detik, ubah jadi jam
const jam = Math.floor(tangkapDurasiLanjutan / 3600);
tangkapDurasiLanjutan = tangkapDurasiLanjutan - jam * 3600;
console.log(jam)

// ambil sisa detik, ubah jadi menit
const menit = Math.floor(tangkapDurasiLanjutan / 60);
console.log(menit)

// tampilkan sisa detik
const detik = tangkapDurasiLanjutan - menit * 60;
console.log(detik)

// SIMPAN DI DOM
// tampilkan jumlah video
TangkapJmlVideo = tangkapDurasi.filter(waktu => waktu.textContent.includes('JAVASCRIPT LANJUTAN')).length;
TangkapSpanJmlVideo = document.querySelector('.jumlah-video');
TangkapSpanJmlVideo.textContent = `${TangkapJmlVideo} video.`;

// tampilkan durasi video (jam,menit,detik)
TangkapSpanDurasi = document.querySelector('.total-durasi');
TangkapSpanDurasi.textContent = `${jam} jam ${menit} menit ${detik} detik.`;

console.log(tangkapDurasiLanjutan)