// DESTRUCTION FUNCTION	YAITU PROSES UNPACK DATA FUNCTION YG BERISI VARIABEL ARRAY YANG ISI ARRAYNYA BISA DIBUAT VARIABELNYA MASING2 DILUAR PARENTNYA.

// 1. DESTCUTION VARIABEL ASSIGNMNET
const outlet = [`ak1`,`ak2`,`ak3`,`ak4`,`ak5`,`ak6`];
	// const tes1 memanggail isi outlet yaitu ak1 begitu seterusnya
	const [tes1, tes2, tes3] = outlet;
	console.log(tes1); 
	// skip item, langkaukan item yg tidak ingin diambil dengan mengosongkan itemnya dgn tanda koma kosong
	const [isiak1, , , , ,isiak6] = outlet;
	console.log(isiak6);

// 2. SWAP ITEMS : MENUKAR ISI ANTAR VARIABEL
let outlet2 = [`ak1`,`ak2`];
let outlet3 = [`ak3`,`ak4`];
	// consol sebelum ditukar
	console.log(outlet2);
	console.log(outlet3);
	[outlet2, outlet3] = [outlet3, outlet2];
	// consol setelah ditukar
	console.log(outlet2);
	console.log(outlet3);

// 3. RETURN VALUE PADA FUNCTION 
	function coba (ak1, ak2) {
		return [`isiak1`, `isiak2`];
	}
	// memanggil isi return function langsung dari argumentnya dan membuatnya kedalam variabel luar
	const [ak1, ak2] = coba();
	console.log(ak2);

// 4. REST PARAMETER : jika nilainya banyak, dapat disingkat dgn ...
	let [akPertama, ...allAk] = [`ak1`,`ak2`,`ak3`,`ak4`,`ak5`];
	console.log(akPertama);
	console.log(allAk);

// 5. DESTRUCTION OBJECT : memanggil isi objek dari luat sekaligus membuat variabel baru (nama variabel baru harus sama diengan property objectnya)
	const namaOutlet = {
		nama : `AK2`,
		SM : `ira`,
		AA : `tutik`
	}
	// jika ingin mengganti isi properti dengan nama property yg baru tanpa harus mengganti isi properti aslinya dengan :, jadi yg akan dieksekusi adalah nama property barunya
	const {nama, SM, AA: isiBaru} = namaOutlet;
	console.log(nama);
	console.log(SM);
	console.log(isiBaru);

// 6. MEMBERIKAN NILAI DEFAULT JIKA OBJECT BELUM ADA PROPERTY DAN JUGA ISINYA
	const namaOutlet7 = {
		
	}
	const {email =`emailkosong@gmail.com`} = namaOutlet7;
	console.log(email)

//7. REST PARAMETER PADA OBJECT, ... menangkap seluruh property pada object dan menampilkan data dalam bentuk object
	const storeManager = {
		namaSM1 : `neneng`,
		namaSM2 : `ira`,
		namaSM3 : `novi`
	}
	const {...allSM} = storeManager;
	console.log(allSM)

// 8. MEMBONGKAR ISI OBJECT DAN MENGAMBIL FIELDNYA SAJA UNTUK DIPROSES KEDALAM FUNCTION
	const akun = {
		id : 123,
		password : `abc`
	}
	function isiAkun ({password}) {
		return password;
	}
	console.log (isiAkun(akun));

// 9.DESTRUCTION FUNCTION YAITU MEMBONGKAR ISI FUNCTION DAN MEMBUAT ISI FUNCTION MENJADI VARIABEL TERSENDIRI
	function kalkulasi (a,b) {
		return {
			tambah : a+b,
			kurang : a-b,
			bagi : a/b,
			kali : a*b
		}
	}
	const {kurang, bagi, kali, tambah} = kalkulasi(2,5);
	console.log(kali);

// 10.DESTRUCTION FUNCTION ARGUMENTS
	const allOutlet = {
		otlt1 : `AK1`,
		otlt2 : `AK2`,
		namaSM : {
			AK1 : `NENENG`,
			AK2 : `IRA`
		}
	}
	// argument function yg digunakan untuk unpack object harus sesuai dengan object aslinya, jika ada object didalam object harus membuat :{isi object} didalam argumen functionnya 
	function filterOutlet ({otlt1, otlt2, namaSM: {AK1, AK2}}) {
		return `outlet ${otlt2}, SM = ${AK2}`;
	} 
	console.log(filterOutlet(allOutlet));	


// TES
const obat = {
	namaObat : `paramex`,
	isi : 10,
	obatLain : {
		obat1 : `paratusin`,
		obat2 : `sakatonik`,
		obat3 : `combipar`,
		obat4 : `nematoda`
	} 

}

function callObat ({namaObat, isi, obatLain : {obat1, obat2, ...obatDll}}) {
	return `obat batuk = ${namaObat}, isi = ${isi}, obat lainnya yaitu ${obat1} dan ${obat2}`
}

console.log(callObat(obat));