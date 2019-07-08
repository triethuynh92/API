const seeder = require('mongoose-seed');
const userSeeder = require('./user_seeder.js');
const accountSeeder = require('./account_seeder.js');

// connect mongodb
seeder.connect('mongodb+srv://devops:share123@cluster0-7pxu5.gcp.mongodb.net/havana', function() {
	
	const tasks = [];
	
	tasks.push(
		userSeeder.run(seeder)
	);

	tasks.push(
		accountSeeder.run(seeder, userSeeder.getMockUsers())
	);

	return Promise.all(tasks)
		.then(() => {
			console.log('done');
		})
});