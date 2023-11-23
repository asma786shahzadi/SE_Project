var express = require('express');
var router = express.Router();
var controller = require('../../controllers/User/support');

router.post('/', controller.Support);

module.exports = router;