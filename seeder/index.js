const seeder = require('mongoose-seed');
const userSeeder = require('./user_seeder.js');
const accountSeeder = require('./account_seeder.js');

// connect mongodb
seeder.connect('mongodb://localhost:27017/havana', function() {
  /* seeder.loadModels([
    '../model/user'  // load mongoose model 
  ]);
  seeder.clearModels(['User'], function() {
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
	}); */
	
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