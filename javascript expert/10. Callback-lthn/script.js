$ajax({
	url : 'http://www.omdbapi.com/?i=tt3896198&apikey=c14cf722&s=saw',
	success : (result) => {
		console.log(result);
	}, 
	error : (e) => {
	console.log(e.responseText);
	}
})