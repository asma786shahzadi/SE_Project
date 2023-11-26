var express = require('express');
var router = express.Router();
var controller = require('../../controllers/User/viewuser')

router.get('/', controller.ViewUser);

module.exports = router;