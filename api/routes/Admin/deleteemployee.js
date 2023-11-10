var express = require('express');
var router = express.Router();
var controller = require('../../controllers/Admin/deleteemployee')

router.delete('/:id', controller.DeleteEmployee);

module.exports = router;