// // console log 
// *
// **
// ***
// ****
// *****

let s = "";

// pengulangan for alas segitiga bawah

for(a=0; a<=10; a++) {

	for(b=0; b<=a; b++){
	s+='*';
	}
	s+='\n';
}

// pengulanangan for alas segitiga atas
for(i=0; i<=10; i++) {

	for(j=10; j>=i; j--){
	s+='*';
	}

	s+='\n';
}

console.log(s);