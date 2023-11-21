var express = require('express');
var router = express.Router();
var controller = require('../../controllers/User/bought');

router.get('/', controller.Bought);

module.exports = router;