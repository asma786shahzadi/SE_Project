var express = require('express');
var router = express.Router();
var controller = require('../../controllers/User/getproduct')

router.get('/', controller.GetProduct);

module.exports = router;