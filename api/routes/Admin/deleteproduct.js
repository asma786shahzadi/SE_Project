var express = require('express');
var router = express.Router();
var controller = require('../../controllers/Admin/deleteproduct')

router.delete('/:id', controller.DeleteProduct);

module.exports = router;