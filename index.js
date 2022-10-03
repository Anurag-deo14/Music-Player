const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '17950ba76cmsh0fa2517a0230b9bp1b470cjsn835d138fff52',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

fetch('https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));