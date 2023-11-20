var express = require('express');
var router = express.Router();
var controller = require('../../controllers/User/buyproduct');

router.post('/', controller.BuyProduct);

module.exports = router;