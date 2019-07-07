const User = require('../model/user');


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
    .findOne({id: req.param('id')}, {_id: 0, __v: 0})
    .then(result => {
        res.send({'attributes':result});
    }) 

    
}
