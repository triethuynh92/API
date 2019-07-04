// const seeder = require('mongoose-seed');
const faker = require('faker');

let generatedUsers = [];

function getMockUsers() {
  if (generatedUsers && generatedUsers.length) {
    return generatedUsers;
  }
  
  const items = [];
  for(let i=1; i < 5; i++){
    let name = faker.name.findName();
    items.push(
        {
            id: i,
            name: name
        }
    )
  }

  console.log('generatedUsers');
  console.log(JSON.stringify(items));
  
  generatedUsers = items;

  return generatedUsers;
}

function getMongooseSeedUser() {
  return [{
    'model': 'User',
    'documents': getMockUsers()
  }]
}

async function run(seeder) {
  return new Promise((resolve, reject) => {
    seeder.loadModels([
      '../model/user'  // load mongoose model 
    ]);
  
    seeder.clearModels(['User'], function() {
      seeder.populateModels(getMongooseSeedUser(), function() {
        // don't close connection
        // seeder.disconnect();
        console.log('populateModels user');
        resolve('done');
      });
    });
  });
  
}

/* 
// connect mongodb
seeder.connect('mongodb://localhost:27017/havana', function() {
  seeder.loadModels([
    '../model/user'  // load mongoose model 
  ]);
  seeder.clearModels(['User'], function() {
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
}); */

module.exports = {
  getMockUsers,
  getMongooseSeedUser,
  run,
};
