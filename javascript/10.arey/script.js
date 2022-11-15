// array menyimpan banyak varialbel yg bisa string, integer, boolean, function, object
// index array diawali dengan angka 0

// menampilkan array dengan method length
let mugiwara = ['luffy','zoro','sanji'];
for(i=0;i<mugiwara.length;i++){
console.log('kru no.' + (i+1) + ' adalah ' + mugiwara[i]);
}

// menambah array dengan method push (ditambah di elemen terakhir)
let mugiwara2 = ['nami','usop','chopper'];
mugiwara2.push('brook');
console.log(mugiwara2 + '. tambahan array elemen akhir dengan method push (+brook)');

// menggabungkan isi array
let mugiwara3 = ['jinbei','franky'];
console.log(mugiwara3.join('-') + '. menggabungkan array dengan method join (-)')


// menghapus isi array dengan method pop (menghapus elemen terakhir)
let mugiwara4 = ['nico robin','nami']
mugiwara4.pop();
console.log(mugiwara4 + '. method pop menghapus isi array (-nami)')

// menambah array dengan method unshift (menambah di elemen awal)
let mugiwara5 = ['luffy'];
mugiwara5.unshift('hancock');
console.log(mugiwara5 + '. method unshift menambah isi array elemen awal (+hancock)')

// menghapus array dengan method shift (menghapus di elemen awal)
let mugiwara6 = ['zoro','sanji',['brook']];
mugiwara6.shift();
console.log(mugiwara6 + '. method shift menghapus isi array elemen awal (-zoro)')

// menambahkan elemen baru ditengah elemen dengan method splice
// splice(index awal, mau dihapus berapa index, elemenbaru1, elemenbaru2,...)
let mugiwara7 = ['luffy','zoro'];
mugiwara7.splice(1,0,'nami','nicorobin');
console.log(mugiwara7 + '. mehod splice menambah elemen array ditengah2 (+nami)')

// menampilkan elemen baru ditengah elemen namun menghapus elemen awal dan akhirnya dan juga harus wajib membuat arrya baru untuk menampugnya
// slice(index awal, index akhir dilebihkan 1, elemenbaru1, elemenbaru2...)
let mugiwara8 = ['franky','chopper', 'brook'];
let mugiwara9 = mugiwara8.slice(1,2);
console.log(mugiwara9 + '. method slice menampilkan array ditengah2 namun harus membuat array baru untuk menampungnya	')

// perulangan array menggunakan forEach, hanya menampilkan tidak dapat mengubah nilai array
// forEach(function expression (e, i(jika ingin menampilkan index ke-)) {aksi} )
let angka1 = [1,2,3,4,5,6,7,8,9];
angka1.forEach(function(e,i) {
	console.log('ini adalah index ke ' + i + ' pada array ke' + e);
});

// perulangan array menggunakan map, map dapat mengembalikan nilai array yg ingin diedit
let angka2 = [2,4,6,8];
let angka3 = angka2.map(function (e) {
	return e*2;
})
console.log('nilai awal array sebelum map = ' +angka2+ '. setelah menggunakan method map isi functionnya dikali 2 sehingga hasilnya = ' +angka3 + 'namun sekaligus melakukan perulangan for didalamnya')

// sort digunakan untuk mengurutkan angka terkecil ke terbesar atau alpahet a-z atau sebaliknya 
let mugiwara10 = ['zoro', 'sanji' ,'luffy'];
mugiwara10.sort();
console.log(mugiwara10 + '. sort dapat digunakan untuk mengurufkan abjad')
let angka4 = [34,78,213,98];
angka4.sort(function(a,b) {
return a-b; 
})
console.log(angka4 + '. sort dapat mengurutkan angka (pakai function didalam sortnya agar angka digit 2dst juga terurut)')

// filter digunakan untuk mencari data spesifik dalam bentuk array yang akan ditampilkan dalam array baru
let angka5 = [1,2,3,4,5,6,7,8,9];
let angka6 = angka5.filter(function (e) {
	return e > 4;
})
console.log(angka6 + '. filter menampilkan nilai spesifik sesuai function yang berada dalam filternya (filter angka > 4)');

// find digunakan untuk mencari data spesifik namun hanya 1 data saja dan data yg ditampilkan tidak berbentuk array
 let angka7 = [1,2,3,4,5,6,7,8,9];
 let angka8 = angka7.find(function(e) {
 	return e==9;
 })
 console.log('tampilkan angka '+angka8 + '. find digunakan untuk menampilkan 1 data saja (find angka 9 dari 1-9)')