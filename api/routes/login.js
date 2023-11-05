var express = require('express');
var router = express.Router();
var controller1 = require("../controllers/login.js");

router.post('/', controller1.Login);

module.exports = router;