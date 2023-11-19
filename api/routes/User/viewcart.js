var express = require('express');
var router = express.Router();
var controller = require('../../controllers/User/viewcart')

router.get('/', controller.ViewCart);

module.exports = router;