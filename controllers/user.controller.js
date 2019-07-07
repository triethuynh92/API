const User = require('../model/user');
const Account = require('../model/account');



exports.findAll = (req, res) => {
    User
    .find()
    .then(users => {
        res.send(users);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving users"
        });
    })
}


exports.findAlldetail = (req, res) => {
   User
   .aggregate([
       {
           $match: {
               id: req.param('id')}
        },
       {
           $lookup: {
            from: "accounts",
            localField: "id",
            foreignField: "user_id",
            as: "account_ids"
            }
        },
       {    
            $project: {
                id: 1,
                name: 1,
                "account_ids.id": 1
                
            }
       }
   ])
   .then(result => {
       res.send(result);
   })
}
