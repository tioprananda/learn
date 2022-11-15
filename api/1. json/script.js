// web api adalah interaksi antara 2 jaringan yg berbeda.
// rest api adalah sebuah aturan2 untuk membuat web api.
// json adalah file format yg dgigunakan untuk pertukaran data, isi json adalah object key dan value


// JSON.stringify() mengubah object menjadi json
let obat = {
	nama : 'combiphar',
	jumlah : 100
};
console.log(JSON.stringify(obat));

// JSON.parse() mengubah json menjadi object
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
// 	if (xhr.readyState == 4 && xhr.status == 200) {
// 		let obat = JSON.parse(this.responseText);
// 		console.log(obat);
// 	}	
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

