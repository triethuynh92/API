const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const AccountController = require('../controllers/account.controller')
// Retrieve an Account with AccountId
//router.get('/:id', AccountController.findOne);

// Retrieve all Users
router.get('', UserController.findAll);

//Retrieve all accounts by User
router.get('/:user_id/accounts', AccountController.findAccountsByUser);


router.get('/:id', UserController.findAlldetail);

//router.get('/:user_id', AccountController.findAllAccountIDforUser);
module.exports = router;