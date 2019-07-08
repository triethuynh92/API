const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const AccountController = require('../controllers/account.controller')


// Retrieve all Users
router.get('', UserController.findAll);

// Retrieve all accounts by User
router.get('/:user_id/accounts', AccountController.findAccountsByUser);

// Retrieve detail User
router.get('/:id', UserController.findAlldetail);

module.exports = router;