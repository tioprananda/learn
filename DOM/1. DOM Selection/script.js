// DOM DIGUNAKAN UNTUK MENANGKAP ELEMEN HTML DAN MEMANIPULASI DATANAYA DALAM BENTUK OBJECT.
// NODE LIST ADALAH KUMPULAN NODE-NODE YG ADA PADA DOCUMENT, ISI NODE BISA BERUPA ELEMEN HTML, CSS, DLL.
// HTML COLLECTION ADALAH KUMPULAN NODE-NODE YG ADA PADA DOCUMENT YG ISI NODENYA KHUSUS ELEMENT HTML SAJA.

// menangkap id output berupa elemen
const getID  = document.getElementById(`id`);
console.log(getID);

// menangkap tag outpuet berupa html collection
const getTag = document.getElementsByTagName(`p`);
console.log(getTag);

// menangkap class output berupa html collection
const getClass = document.getElementsByClassName(`test`);
console.log(getClass);

// menangkap 1 elemen isi apapun pada html output berupa eelemen
const getSelector = document.querySelector(`p`);
getSelector.style.color = `green`;

// menangkap seluruh isi elemen apapun pada html output berupa elemen
const getSelectorAll = document.querySelectorAll(`li`);
console.log(getSelectorAll);
// karna elemen all banyak maka harus dilooping untuk menangkap semuanya
for(i=0; i<getSelectorAll.length; i++){
	getSelectorAll[i].style.color = `green`;
}