var express = require('express');
var router = express.Router();
var controller = require('../../controllers/Admin/viewsupport')

router.get('/', controller.ViewSupport);

module.exports = router;