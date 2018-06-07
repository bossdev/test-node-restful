const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');

router.post('/signup',UserController.signup);
router.post('/auth_token',UserController.auth_token);

module.exports = router;