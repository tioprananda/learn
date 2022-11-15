

// perulangan pertanyaan
let tanya=true;

while(tanya){

	// tangkap pilihan player 
	let p = prompt('pilih : gajah/semut/orang');


	// tangkap pilihan computer
	let c = Math.random();

	// buat bilangan math random
	let comp = "";

	if (c<0.34) {
		comp = 'gajah';

	} else if (c>0.34 && c<0.67) {
		comp = 'semut';
	} else {
		comp = 'orang';
	}

	// tentukan rules dan tampilkan hasil
	if (p == comp) {
	alert('kamu memilih ' + p +' dan komputer memilih ' +comp+ ' maka hasilnya seri')} 

	else if (p=='gajah') {
		if(comp=='orang'){
			alert('kamu memilih ' + p +' dan komputer memilih ' +comp+ ' maka kamu menang')} 
		else if(comp=='semut'){
			alert('kamu memilih ' + p +' dan komputer memilih ' +comp+ ' maka kamu kalah')} 
	}

	else if (p=='orang') {
		if(comp=='semut'){
			alert('kamu memilih ' + p +' dan komputer memilih ' +comp+ ' maka kamu menang')} 
		else if(comp=='gajah'){
			alert('kamu memilih ' + p +' dan komputer memilih ' +comp+ ' maka kamu kalah')} 
		}

	else if (p=='semut') {

		if(comp=='gajah'){
			alert('kamu memilih ' + p +' dan komputer memilih ' +comp+ ' maka kamu menang')} 
		else if(comp=='orang'){
			alert('kamu memilih ' + p +' dan komputer memilih ' +comp+ ' maka kamu kalah')} 
		} 

	else {
		alert('yang kamu masukan salah')
	}

tanya=confirm('lagi?')

}

alert('terimakasih sudah bermain')


