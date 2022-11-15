// 1. HTML FRAGMENT
// memanggil elemen html didalam javascript degan string template
const outlet = {
	nama : `neneng`,
	ak : `ak1`
}

const el = `

	<div class="ak1">

	<h1>Outlet ${outlet.ak} = ${outlet.nama}</h1>

	</div>

	`;

// memasukan elemen html dari javascript kedalam index.html


// 2. LOOPING LITERAL
	// melakukan looping object dengan menggunakan map array high order function 

	// const  outlet2 berisi array yang didalamnya ada objek karna method high order function hanya berjalan di array
	const outlet2 = [{
		nama : `ira`,
		ak : `ak2`
	}
	,
	{
		nama : `riski`,
		ak : `ak11`
	
	}];

	// const el2 berisi looping pada outlet2 dengan menggunakan method map
	const el2 = `
	<div class = "ak2"> 
		${outlet2.map(m => 
				// dalam class ak2, lakukan looping ul dan li dengan menthod map
			`<ul> 
				<li>${m.nama}</li>
				<li>${m.ak}</li>
			</ul>`
			)
		// method join menggabungkan data outlet2 menimpa , dengan ""
		.join(``)} 
	</div>
	`

// 3. CONDITIONAL TERNARY
	// membuat kondisi if else dengan 1 perbandingan dengan membuat kode ? dan : 
	const outlet3 = {
		nama : `novi`,
		ak : `ak3`,
		AA : `wira`
	}


	const el3 = `
	<div class = "ak3"> 

	// jika ada variabel AA didalam outlet3 tampilkan nama dan AA jika tidak tampilkan nama only.
	<h1> Nama Manager : ${outlet3.AA ? `${outlet3.nama} dan wakilnya ${outlet3.AA}` : `${outlet3.nama}`} </h1>
	<h2> Outlet : ${outlet3.ak} </h3>


	</div>
	`;

// NESTED (HTML FRAGMENT BERSARANG)
	// function html yang memanggil function berisi html lainnya
const outlet4 = {
	namaSM : `ira`,
	ak : `ak2`,
	AA : [`asisten ak2 pertama`,`asisten ak2 kedua`,`asisten ak3 ketiga`]
}

function cetakAA (isiAA) {
	return `

		<ol>
			${isiAA.map(item =>

				 `<li>${item}</li>`).join('')}
		</ol>

	`
}

const el4 = `

	<div class = "ak4">

		<h1>NAMA SM : ${outlet4.namaSM}</h1>
		<h2>OUTLET : ${outlet4.ak}</h2>
	
		${cetakAA(outlet4.AA)}

	</div>

`
	
document.body.innerHTML = el4;



// TAGGED TEMPLATE
	// tag template adalah proses pemisahan string dan juga ekspresion dalam sebuah template literal, string dan ekspresiion ini akan dijadikan sebuah variabel tergantung jumlah kalimatnya dan pemisahnya menggunakan ekpresion.

	const outlet5 = {

		nama : `SMak5`,
		ak : `outlet5`

	}

	function cetak (str, ...args){
		// argumen str berisi string kata yg dijadikan array 
		// argumen ...args berisi ${ekpresioon}
		console.log(str)
		console.log(args)

	}

	const el5 = cetak`<h1> halaman pada ${outlet5.ak} oleh ${outlet5.nama}</h1>`


