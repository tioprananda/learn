// function adalah program yang berjalan didalam program atau disebut sub program.
// paramater function adalah nilai luar, dan boleh kosong dan boleh dimasukan operasi matematika didalamnya.
// kembalikan data yang telah diolah dengan return.

// arguments.length = menangkap isi parameter function walaupun parameternya kosong
function cekArgumen() {
	for(i=1; i<arguments.length; i++){
		i=arguments[i];
	}
	return(i);
}
alert(cekArgumen(1,2,3))

// function normal
function kaliAngka(a, b) {
	const jml1 = a*a;
	const jml2 = b*b;
	const total= jml1 + jml2;
return total;
} 
alert(kaliAngka(2,2));

// refactoring function : mensederhakan kode program agar lebih simple dan hemat memori
function tambahAngka(a, b) {
return a+a+a+b+b+b;
} 
alert(tambahAngka(2,2));

// function rekursif : function yang memanggil dirinya sendiri didalam functionnya sendiri
// rekursif juga bisa sebagai pengganti looping pada function
function panggilSendiri (n) {
	if (n === 0)
		{return;}
	console.log(n);
	panggilSendiri(n-1);
}
panggilSendiri(10);

// faktorial
function faktorial (n) {
	if (n === 0 ) return 1;
return n * faktorial(n-1);
}console.log(faktorial(5));  


// function expression : membuat function dengan cara lain yaitu function yg dimasukan kedalam variabel.
const tesExpresion = function (nama) {
	return alert('halo ' + nama + " ini adalah tes function expresiion"); 
}

tesExpresion('tio');









