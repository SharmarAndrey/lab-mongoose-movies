// Create the seeds.js file in the bin/ folder.
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");


mongoose
	.connect('mongodb+srv://sharmarandrey:sharmarandrey@cluster0.zu7okjl.mongodb.net/movies_Ironhack', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(x => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
	})
	.catch(err => {
		console.error('Error connecting to mongo', err)
	});

/**
 * Crear 3 o más celebridades en la base de datos usando Mongoose
 * ;
 * Tenéis que ejecutar node seeds.js para ejecutar este script y crear las celebridades en la base de datos.
 * 
 */
const celebrities = [
	{
		name: "John Doe",
		occupation: "Actor",
		catchPhrase: "I'll be back"
	},
	{
		name: "Jane Smith",
		occupation: "Singer",
		catchPhrase: "Music is life"
	},
	{
		name: "Michael Johnson",
		occupation: "Athlete",
		catchPhrase: "Just do it"
	}
];

Celebrity.create(celebrities, (err, result) => {
	if (err) {
		console.log('Error creating celebriyies:', err);
	} else {
		console.log("Successfully created celebrities:", result);

	}
});


