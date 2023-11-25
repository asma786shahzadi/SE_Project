var express = require('express');
var router = express.Router();
var controller = require('../utils/midleware');

router.get('/', controller.authenticateToken,);
// controller.authorizeRole(["Admin","User"]),
module.exports = router;