global.fetch = require("node-fetch");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '77d5502959mshdabef4562ab275dp10c63ajsn96236b1a23b3',
		'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
	}
};

fetch('https://superhero-search.p.rapidapi.com/api/heroes', options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.log('ERROR'));