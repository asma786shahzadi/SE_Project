var express = require('express');
var router = express.Router();
var controller = require('../../controllers/Admin/viewuser')

router.get('/', controller.ViewUser);

module.exports = router;