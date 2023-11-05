var express = require('express');
var router = express.Router();
var controller = require('../controllers/register')

router.post('/', controller.Register);

module.exports = router;