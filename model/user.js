var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new mongoose.Schema({

        id: {type: Number, unique: true},
        name: String,
        /* account_ids: [
            {
                type:Number,
                unique: true,
                ref:'Account'
            }
        ] */

});

const User = mongoose.model('User', UserSchema);

module.exports = User;
