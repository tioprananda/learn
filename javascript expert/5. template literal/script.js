// TAGGED TEMPLATE LITERAL


const mhs = {
    nama : `tio`,
    umur : 25
}

// function coba berisi parameter strings = seluruh string dr console log dan args = seluruh ekspresion dr console log dalam bentuk array yg disimpan kedalam argumen function coba
function coba (strings, ...args){
    console.log(strings)
    console.log(args)

    // kembalikan isi function coba berupa string yg sudah digabung dengan ekspresion. 
    return strings.reduce((acc, curr, i) => `${acc} ${curr} ${args[i] || ''}`, '');
        // tangkap strings, gabung accumulator + currentValue string
}

console.log(coba `halo nama saya ${mhs.nama}, saya berumur ${mhs.umur} `)

document.body.innerHTML()