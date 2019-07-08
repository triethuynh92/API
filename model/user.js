const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var UserSchema = new mongoose.Schema({
        id: {type: Number, unique: true},
        name: String,
    });

const User = mongoose.model('User', UserSchema);

module.exports = User;
