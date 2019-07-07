const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/account.controller');

// Retrieve an Account with AccountId
router.get('/:id', AccountController.findOne);

// Retrive all Accounts
router.get('', AccountController.findAll);

module.exports = router;