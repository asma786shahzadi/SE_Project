var express = require('express');
var router = express.Router();
var controller = require('../../controllers/User/addcart');

router.post('/', controller.AddCart);

module.exports = router;