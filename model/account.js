const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


const AccountSchema = new mongoose.Schema({
        id: {type: Number},
        user_id: {type: Number, ref: 'User'},
        name: String,
        balance: Number
});

 
const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;