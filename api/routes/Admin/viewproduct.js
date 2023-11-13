var express = require('express');
var router = express.Router();
var controller = require('../../controllers/Admin/viewproduct')

router.get('/', controller.ViewProduct);

module.exports = router;