// angkot 1,2,3,4.6 beroperasi dengan baik
// angkot 5 lembur
// angkot 7 rusak
// angkot 8 lembur
// angkot 9 rusak
// angkot 10 lembur


let jmlAngkot = 10;
let noAngkot = 1;
let angkotBeroperasi = 6;


for (noAngkot; noAngkot<=jmlAngkot; noAngkot++){


	if (noAngkot <= 6 && noAngkot !== 5) {

		console.log("Angkot no." + noAngkot + " beroperasi dengan baik.")

	} else if (noAngkot===5 || noAngkot===8 || noAngkot===10) {

		console.log("Angkot no." + noAngkot + " sedang lembur.")

	} else {
		console.log("Angkot no." + noAngkot + " sedang tidak beroperasi.")
		noAngkot;
	} 

	
}
