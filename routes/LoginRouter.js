const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/LoginController');

router.get('/login', LoginController.show);
router.post('/login', LoginController.login);

module.exports = router;