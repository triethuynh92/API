const seeder = require('mongoose-seed');
const faker = require('faker');
const userModel = require('../model/user');

const countUser = async () => {
  return userModel.count().exec();
}

const a = countUser().then((data) => {
  return data;
})

let generatedAccounts = [];

function getMockAccounts(mockUsers) {
  if (generatedAccounts && generatedAccounts.length) {
    return generatedAccounts;
  }

  let items = [];

  for(let i=1; i < 10; i++){
      let name = faker.name.findName();
      let balance = faker.random.number();
      // pick user_id from mockUsers
      const idx = Math.floor(Math.random() * mockUsers.length);
      const user = mockUsers[idx];
      items.push(
        {
          id: i,
          name: name,
          balance: balance,
          user_id: user.id,
        }
      )
  }

  console.log('accounts');
  console.log(JSON.stringify(items));
  
  generatedAccounts = items;

  return generatedAccounts;
}

function getMongooseSeedAccount(mockUsers) {
  return [{
    'model': 'Account',
    'documents': getMockAccounts(mockUsers)
  }]
}

async function run(seeder, mockUsers) {
  return new Promise((resolve, reject) => {
    seeder.loadModels([
      '../model/account'  // load mongoose model 
    ]);

    const mongooseSeedAccount = getMongooseSeedAccount(mockUsers);
    seeder.clearModels(['Account'], function() {
      seeder.populateModels(mongooseSeedAccount, function() {
        // seeder.disconnect();
        console.log('populateModels getMockAccounts');
        resolve('done');
      });
    });
  });
}

/*
// connect mongodb
seeder.connect('mongodb://localhost:27017/havana', function() {
  seeder.loadModels([
    '../model/account'  // load mongoose model 
  ]);
  seeder.clearModels(['Account'], function() {
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});

*/

module.exports = {
  getMockAccounts,
  getMongooseSeedAccount,
  run,
};
