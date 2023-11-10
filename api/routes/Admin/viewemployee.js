var express = require('express');
var router = express.Router();
var controller = require('../../controllers/Admin/viewemployee')

router.get('/', controller.ViewEmployee);

module.exports = router;