var express = require('express');
var router = express.Router();
var controller = require('../../controllers/User/deletecart')

router.delete('/', controller.DeleteCart);

module.exports = router;