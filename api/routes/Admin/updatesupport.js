var express = require('express');
var router = express.Router();
var controller = require('../../controllers/Admin/updatesupport')

router.put('/', controller.UpdateSupport);

module.exports = router;